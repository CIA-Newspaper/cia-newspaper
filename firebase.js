import { ADMIN_EMAILS, FIREBASE_CONFIG } from "./firebase-config.js";

const isPlaceholder = value => !value || String(value).includes("PASTE_YOUR");
export const firebaseConfigured = !["apiKey", "authDomain", "projectId", "appId"].some(
  key => isPlaceholder(FIREBASE_CONFIG[key])
);

let auth = null;
let db = null;
let provider = null;
let authApi = null;
let firestoreApi = null;

if (firebaseConfigured) {
  const [appApi, loadedAuthApi, loadedFirestoreApi] = await Promise.all([
    import("https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js"),
    import("https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js"),
    import("https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js")
  ]);
  authApi = loadedAuthApi;
  firestoreApi = loadedFirestoreApi;
  const app = appApi.getApps().length
    ? appApi.getApps()[0]
    : appApi.initializeApp(FIREBASE_CONFIG);
  auth = authApi.getAuth(app);
  db = firestoreApi.getFirestore(app);
  provider = new authApi.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
}

export const normaliseEmail = value => String(value || "").trim().toLowerCase();
export const isAdmin = user =>
  Boolean(user && ADMIN_EMAILS.map(normaliseEmail).includes(normaliseEmail(user.email)));

export function observeUser(callback) {
  if (!firebaseConfigured) {
    callback(null);
    return () => {};
  }
  return authApi.onAuthStateChanged(auth, callback);
}

export async function signInWithGoogle() {
  if (!firebaseConfigured) throw new Error("Firebase has not been configured yet.");
  return authApi.signInWithPopup(auth, provider);
}

export async function signOutUser() {
  if (!firebaseConfigured) return;
  await authApi.signOut(auth);
}

export async function submitSuggestion({ topic, message }, user) {
  if (!firebaseConfigured) throw new Error("Firebase has not been configured yet.");
  if (!user) throw new Error("Please sign in before sending a suggestion.");
  const cleanTopic = String(topic || "").trim().slice(0, 60);
  const cleanMessage = String(message || "").trim().slice(0, 1200);
  if (!cleanTopic || !cleanMessage) throw new Error("Choose a topic and write a suggestion first.");

  await firestoreApi.addDoc(firestoreApi.collection(db, "suggestions"), {
    topic: cleanTopic,
    message: cleanMessage,
    authorUid: user.uid,
    authorName: String(user.displayName || "Student").slice(0, 100),
    authorEmail: normaliseEmail(user.email).slice(0, 254),
    createdAt: firestoreApi.serverTimestamp()
  });
}

export async function getSuggestions() {
  if (!firebaseConfigured) throw new Error("Firebase has not been configured yet.");
  const snapshot = await firestoreApi.getDocs(
    firestoreApi.query(
      firestoreApi.collection(db, "suggestions"),
      firestoreApi.orderBy("createdAt", "desc")
    )
  );
  return snapshot.docs.map(document => ({ id: document.id, ...document.data() }));
}
