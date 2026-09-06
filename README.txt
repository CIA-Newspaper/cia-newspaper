THE INTELLIGENCE — CIA STUDENT NEWSPAPER
FINAL GITHUB PAGES PACKAGE

FILES
- index.html: the public newspaper website
- content.json: all editable newspaper content
- admin.html: browser-based content editor
- assets/: CIA crest and campus images
- past_editions/: placeholder newsletter PDFs

DEPLOY TO GITHUB PAGES
1. Replace the files in your existing GitHub Pages repository with the contents of this folder.
2. Keep index.html and content.json in the repository root.
3. Keep assets/ and past_editions/ as folders in the repository root.
4. Commit the changes. GitHub Pages will publish the update.

UPDATING THE NEWSPAPER
1. Open the deployed admin.html page (or run it from a local web server).
2. Edit the front page, clubs, events, Hall of Fame, morning briefing and newsletter entries.
3. Click Download content.json.
4. Replace the existing content.json in GitHub with the downloaded file and commit it.

PAST NEWSLETTERS
The three PDFs in past_editions are placeholders. Replace them with your actual PDF files while keeping the filenames/paths in content.json correct.

SUGGESTION BOX
The public website is connected to the supplied Google Form URL. Students are sent to the Google Form and responses are stored in Google Forms. For a central inbox, use the Google Form's Responses tab and optionally link responses to a Google Sheet.

IMPORTANT ABOUT admin.html
This is a static editing helper. It does NOT directly write to GitHub. It downloads a new content.json for you to upload. Do not treat admin.html as a secure password-protected administration system if it is publicly accessible.

CREDITS
Website & concept: Rushil Chauhan
CIA Student Press • Years 7–9
