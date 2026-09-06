THE INTELLIGENCE — STUDENT NEWSPAPER

FILES
- index.html — the public newspaper website.
- admin.html — the Content Desk for editing an issue.
- content.json — the single source of truth for all editable content.
- assets/ — the crest and campus images.
- past_editions/ — linked newsletter PDFs.

PUBLISHING WITH GITHUB PAGES
1. Keep every file and folder in the repository root.
2. In GitHub Pages, publish from the configured branch and repository root.
3. Visit index.html normally through the GitHub Pages address. The site loads content.json automatically.
4. After committing an update, hard-refresh the webpage (Ctrl+Shift+R) if you still see an older issue.

EDITING AN ISSUE
1. Open admin.html from the published GitHub Pages site.
2. Make your changes and choose Download content.json.
3. Replace the repository’s content.json with the downloaded copy and commit the change.
4. Open the newspaper and confirm the issue looks right.

LOCAL PREVIEW
Modern browsers do not let a local HTML file read content.json directly. In this folder, start a local web server:

  python -m http.server 8000

Then open http://localhost:8000/ in your browser. If you open admin.html directly from your computer instead, choose Import content.json before editing.

CROSSWORD
Entries in content.json use:
- number: a unique positive clue number
- direction: across or down
- answer: letters only
- row and col: zero-based starting position
- clue: the displayed clue

The Content Desk validates duplicate clue numbers, out-of-bounds entries, and conflicting letters before it downloads content.json. The public site also shows a clear error instead of a broken grid if a crossword is invalid.

GOOGLE ACCOUNTS AND SUGGESTIONS
The newspaper now has a built-in Google account sign-in, personalised greeting,
suggestion form, and private staff inbox at inbox.html. It requires a Firebase
Console setup before it can collect real submissions. Follow FIREBASE_SETUP.md
before publishing the account features.
