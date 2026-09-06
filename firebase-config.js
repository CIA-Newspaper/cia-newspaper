/*
 * Firebase web configuration is intentionally public. It identifies this web
 * application; access is protected by the Firestore rules in firestore.rules.
 *
 * 1. Create a Firebase project.
 * 2. Register this GitHub Pages site as a Web app.
 * 3. Copy its configuration values below.
 * 4. Add staff Gmail addresses to ADMIN_EMAILS and the same addresses to
 *    firestore.rules before publishing.
 */
export const FIREBASE_CONFIG = {
  apiKey: "PASTE_YOUR_API_KEY",
  authDomain: "PASTE_YOUR_PROJECT.firebaseapp.com",
  projectId: "PASTE_YOUR_PROJECT_ID",
  storageBucket: "PASTE_YOUR_PROJECT.firebasestorage.app",
  messagingSenderId: "PASTE_YOUR_MESSAGING_SENDER_ID",
  appId: "PASTE_YOUR_APP_ID"
};

// These only control what the interface shows. Firestore rules enforce access.
export const ADMIN_EMAILS = [
  "PASTE_STAFF_GMAIL_ADDRESS_HERE"
];
