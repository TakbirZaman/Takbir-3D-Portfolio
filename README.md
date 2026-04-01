# Takbir Zaman Bhuiyan – 3D Portfolio

## Setup

```bash
npm install
npm run dev
```

## ➕ Adding your photo

Place **either or both** of these files in the `public/` folder:

```
public/
  takbir.jpg    ← tried first
  takbir1.jpg   ← fallback if takbir.jpg missing
```

The About section automatically loads `takbir.jpg`, falls back to `takbir1.jpg`,
and falls back to a styled letter avatar if neither is found. Any JPG/PNG works.

## ➕ Adding new projects

Open `src/data/index.ts` and add a new entry to the `projects` array:

```ts
{
  num: '009',
  title: 'Your New Project',
  description: 'Description here.',
  tech: ['React', 'Node.js'],
  live: 'https://your-live-url.com',  // optional
  github: 'https://github.com/TakbirZaman/your-repo',
  category: 'Web',   // Web | ML/AI | Game | API | Data | Systems | Graphics
  featured: true,    // shows ★ Featured badge
},
```

## Deploy to Netlify

```bash
npm run build
# drag-and-drop /dist to netlify.com/drop
```
