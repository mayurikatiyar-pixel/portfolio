# Mayuri Katiyar - Portfolio Website

A responsive personal portfolio built with plain HTML, CSS and JavaScript. No build step is needed.

## Folder structure

```
portfolio/
├── index.html
├── css/style.css
├── js/script.js
├── assets/
│   ├── images/          <- put profile.jpg and project images here
│   └── documents/
│       ├── resume.pdf
│       └── ai-literacy-certificate.pdf
└── README.md
```

## Add your images

| File to add | Used for |
|---|---|
| `assets/images/profile.jpg` | Your photo in the hero section |
| `assets/images/smart-expenses-tracker.png` | Smart Expenses Tracker project image |

Until you add them, the site shows your initials and a placeholder box. If your file has a different name, change the `src` in `index.html`.

## Publish on GitHub Pages

1. Create a new repository on GitHub (for example `portfolio`).
2. Upload everything inside this folder so that `index.html` is at the top level of the repository.
3. Open **Settings > Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then click **Save**.
5. After a minute your site appears at `https://mayurikatiyar-pixel.github.io/<repository-name>/`.

## Update content

- **Text, links and contact details:** edit `index.html`. Each section has a comment above it.
- **Add a project:** copy the whole `<article class="project-card">` block and paste it below the first one.
- **Add your contribution to a project:** remove the comment markers around the `contribution` line in the project card.
- **Show the Internship section:** in `index.html`, remove the word `hidden` from `<section id="internship">` and replace the placeholders.
- **Add a certificate:** copy an `<article class="card cert">` block.
- **Change colours or fonts:** edit the variables at the top of `css/style.css`.
- **Update your resume:** replace `assets/documents/resume.pdf` with a new file of the same name.
