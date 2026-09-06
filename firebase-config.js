/*
 * Firebase web configuration is intentionally public: it identifies this web
 * application. Access is enforced by firestore.rules, not by keeping these
 * values secret.
 */
export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAvWkJVoQDkbOm75S71qd4vCCr_EEk25DI",
  authDomain: "cia-student-newspaper.firebaseapp.com",
  projectId: "cia-student-newspaper",
  storageBucket: "cia-student-newspaper.firebasestorage.app",
  messagingSenderId: "730635916940",
  appId: "1:730635916940:web:aa6bb360ec7242d25acda9",
  measurementId: "G-K2Y0J9TSXZ"
};

// These only control what the interface shows. Firestore rules enforce access.
export const ADMIN_EMAILS = [
  "rushilchauhan1910@gmail.com"
];
