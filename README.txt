THE INTELLIGENCE — CIA Student Newspaper

GitHub Pages structure:
  index.html
  content.json
  admin.html
  assets/
  past_editions/

IMPORTANT:
This version has the current newspaper content embedded inside index.html as a fallback.
That means the site will still display even if the browser cannot fetch content.json.
When hosted correctly, it will load the latest content.json first.

If GitHub Pages is used, set Settings > Pages > Deploy from a branch > main > /(root).
After uploading, allow a few minutes for the Pages site to update.

Admin workflow:
  1. Open admin.html
  2. Edit content
  3. Download content.json
  4. Replace the repository's content.json
  5. Commit the change

Suggestion form:
The current Google Form link is stored in content.json and also included as the fallback
site data in index.html.
