# Google accounts and suggestion inbox

The public newspaper is still a static GitHub Pages site. Firebase provides the
secure pieces that GitHub Pages cannot: Google account sign-in and a private
database for submissions.

## 1. Create the Firebase project

1. Open the [Firebase console](https://console.firebase.google.com/) and create
   a project owned by the school.
2. Add a **Web** app to that project. Give it a recognisable name such as
   The Intelligence website.
3. Copy the web configuration from [firebase-config.js](firebase-config.js).
   These values identify the web app; the security rules, not the visible
   configuration, protect submissions.

## 2. Enable the two services

1. In **Authentication → Sign-in method**, enable **Google**.
2. In **Authentication → Settings → Authorized domains**, add
   cia-newspaper.github.io and any custom school domain used for the website.
3. In **Firestore Database**, create a Cloud Firestore database.

## 3. Protect the inbox before publishing

1. Replace PASTE_STAFF_GMAIL_ADDRESS_HERE in both
   [firebase-config.js](firebase-config.js) and
   [firestore.rules](firestore.rules) with the Gmail address of each staff
   member who may view suggestions. Add another quoted line for every
   additional staff account.
2. In **Firestore Database → Rules**, replace the default rules with the exact
   contents of [firestore.rules](firestore.rules), then publish the rules.

The rules deliberately let signed-in students create only their own submission.
They cannot browse submissions. Only the allowlisted staff Gmail accounts can
read the inbox, available at inbox.html.

## 4. Publish and test

1. Commit and push firebase-config.js, firebase.js, firestore.rules,
   index.html, and inbox.html.
2. Visit the published site and use **Continue with Google**. The first Google
   sign-in automatically creates the visitor’s Firebase account and greets them
   by name.
3. Send one test suggestion.
4. Sign in to inbox.html with an allowlisted staff account and confirm that it
   appears.

Do not use test-mode or public Firestore rules in production. Firebase
Authentication and Firestore security rules are the enforcement boundary for
the private inbox. See Firebase’s [Google sign-in guide](https://firebase.google.com/docs/auth/web/google-signin)
and [Firestore security rules documentation](https://firebase.google.com/docs/firestore/security/rules-conditions).
