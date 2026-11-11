# Leonidas Germanopoulos Kalfoglou — portfolio v1

A minimal, black, responsive photography portfolio.

## Included
- Left-side navigation: Images / About / Contact
- Stacked name, in normal capitalization
- One photograph at a time, fitted inside the available frame (no cropping)
- Generous space around all four edges
- Previous / next arrows at the bottom left
- Random order shuffled once per page load
- Keyboard arrow-key navigation
- Mobile layout
- Automatic image-list generation when files are added to `images/`

## Add photographs
Put `.jpg`, `.jpeg`, `.png`, `.webp` or `.gif` files into `images/`. Subfolders are supported. Commit and push the changes to GitHub; the included workflow regenerates the gallery list and republishes the site.

## Publish with GitHub Pages
1. Create a new **public** GitHub repository, for example `leonidas-portfolio`.
2. Upload the contents of this folder to the repository root (including the hidden `.github` folder).
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions** as the source.
5. Open the **Actions** tab and wait for “Build and deploy photography website” to finish successfully.
6. Your site will be available at `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

## Connect your Papaki domain
After the GitHub Pages deployment succeeds:
1. In **Settings → Pages → Custom domain**, enter your domain (for example `www.example.com`) and save.
2. Follow GitHub's current DNS instructions for the exact records required for your domain.
3. In Papaki's DNS management, add those records exactly as GitHub specifies.
4. Allow DNS changes to propagate, then enable **Enforce HTTPS** in GitHub Pages when available.

Do not change your Papaki nameservers unless you specifically intend to. DNS records are usually enough.

## Edit About and Contact
Open `index.html` and replace the placeholder text in the About and Contact sections. For a contact email, you can add a link such as:
`<a href="mailto:hello@example.com">hello@example.com</a>`

## Notes
- The gallery order is randomized once per fresh page load and then remains stable while the visitor browses.
- The site is static: it has no database, tracking, or server-side contact form.
- The website does not crop images. Portrait and landscape photographs are both fully visible, with black space around them as needed.
