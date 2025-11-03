# Deploy to GitHub Pages - Instructions

## Quick Deploy Steps:

### Option 1: Automatic (GitHub Actions) - RECOMMENDED

1. **Push code to GitHub:**
   ```bash
   git add .
   git commit -m "Deploy demo app"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your GitHub repo
   - Settings > Pages
   - Source: **GitHub Actions** (not branch)
   - Save

3. **Wait for deployment:**
   - Go to Actions tab
   - Wait for "Deploy to GitHub Pages" workflow to complete
   - Your app will be live at: `https://yourusername.github.io/Event-Discovery-Scoring-Automation-Assistant/`

---

### Option 2: Manual Deploy

1. **Build the app:**
   ```bash
   cd demo-app
   npm run build
   ```

2. **Deploy dist folder:**
   - Go to repo Settings > Pages
   - Source: Branch > `gh-pages` > `/ (root)`
   - Or use `gh-pages` npm package:
     ```bash
     npm install -g gh-pages
     cd demo-app
     npm run build
     gh-pages -d dist
     ```

---

## Important Notes:

✅ **Routing:** Using HashRouter (works perfectly on GitHub Pages)
- URLs will be: `#/workflow`, `#/scoring`, etc.
- This avoids 404 errors on GitHub Pages

✅ **Base Path:** Set to `/` for flexibility
- Works whether deployed to root or subdirectory

✅ **GitHub Actions:** Already configured
- Auto-deploys when you push to `main` branch

---

## Access Your Live Demo:

Once deployed, your app will be available at:
```
https://[your-username].github.io/Event-Discovery-Scoring-Automation-Assistant/
```

Or if deployed to root of repo:
```
https://[your-username].github.io/Event-Discovery-Scoring-Automation-Assistant/
```

---

## Troubleshooting:

**If pages don't load:**
- Check GitHub Actions for build errors
- Verify base path in vite.config.js
- Make sure `dist` folder contains `index.html`

**If routing doesn't work:**
- Already using HashRouter (should work automatically)
- URLs will have `#` like: `/Event-Discovery-Scoring-Automation-Assistant/#/workflow`

