# QA Back-End — Resume Book

Резюмета на лекциите: таб = занятие, карти = подтеми.

Сайтът е само HTML, CSS и JavaScript — без Node, Vite или build стъпка.

Покрити занятия от PDF презентациите в тази папка:

- Data Formats — JSON, YAML, XML
- Containers, Docker, Docker Compose
- Unit Testing with Mocking

## Какво качваш в GitHub

**Да:**

- `index.html`
- `css/`
- `js/` (`lectures.js` са резюметата, `practice.js` е каталогът, `sheets.js` е текстът на попълнените листове, `markdown.js` ги рендира, `app.js` е логиката)
- `.nojekyll`
- `.gitignore`
- `README.md`
- `.github/workflows/pages.yml`

**Не:**

- PDF презентациите — съдържанието вече е обобщено в `js/lectures.js`

## GitHub Pages

1. Качи файловете в `main`.
2. В репото: **Settings → Pages → Source → GitHub Actions**.
3. След минута-две сайтът е на адреса на Pages.

При всяко следващо качване в `main` сайтът се обновява сам.
