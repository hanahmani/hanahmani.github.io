# Hana Hmani — Portfolio

Personal portfolio of **Hana Hmani**, Licence graduate in Software Engineering and Information Systems (GLSI, IIT Sfax, 2026) and engineering student at the International Institute of Technology (IIT).

Static site: plain **HTML, CSS and JavaScript** — no build step, hosted for free on GitHub Pages.
Bilingual **English / Français** (button in the top bar, choice remembered), light & dark mode, scroll animations.

## Structure

```
index.html            page structure (sections, SEO / Open Graph)
style.css             design: beige/brown palette, light & dark mode, responsive
data.js               ALL the content, bilingual { en, fr } (education, skills, experience, projects, certifications…)
i18n.js               interface texts in English and French (menu, buttons, form messages…)
script.js             rendering, project filter, theme, mobile menu, contact form, QR code
assets/               photo, CV (PDF), add certificate images and screenshots here
.nojekyll             tells GitHub Pages to serve files as-is
```

## Updating the content

Edit **`data.js`** only. Examples:

- **Add a certification**: copy a block in `certifications`, fill `name`, `issuer`, `date`, `skills`, put the image in `assets/certs/` and set `image: "assets/certs/my-cert.jpg"`, add `verifyUrl` if any.
- **Add a GitHub link to a project**: set `github: "https://github.com/hanahmani/<repo>"` (and `demo`, `image`, `role`).
- Empty fields (`""`) show "to complete" or are hidden — nothing is invented.

Stats in the About section (projects, technologies, events) are computed from `data.js`.

## Contact form

The form really sends the message to **hanahmani3@gmail.com** through [FormSubmit](https://formsubmit.co) (free, no account, no backend).

**One-time activation:** the very first message sent from the live site triggers an email from FormSubmit to hanahmani3@gmail.com titled *"Action Required: Activate FormSubmit"*. Click **Activate Form** — all following messages are then delivered to that inbox (check spam the first time). The visitor's address is set as *reply-to*, so you can answer directly.

Included: field validation, anti-spam honeypot, loading state, animated confirmation, and an error message with a direct email link if sending fails.

## Run locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploy on GitHub Pages

1. Create a repository named **`hanahmani.github.io`** (site at `https://hanahmani.github.io/`) or any name, e.g. `portfolio` (site at `https://hanahmani.github.io/portfolio/`). All paths are relative, so both work.
2. Push the files:

```bash
git init
git add .
git commit -m "Initial commit - Professional Portfolio"
git branch -M main
git remote add origin https://github.com/hanahmani/hanahmani.github.io.git
git push -u origin main
```

3. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, branch `main`, folder `/ (root)`, Save.
4. After ~1 minute the site is live. Each new push to `main` redeploys automatically.

## Links

- GitHub: https://github.com/hanahmani
- LinkedIn: https://www.linkedin.com/in/hana-hmani-996b41337/
- Email: hanahmani3@gmail.com
