# Event Discovery & Scoring Automation - Demo App

Professional interactive web application to showcase the Event Discovery & Scoring Automation system.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
# Build static files
npm run build

# Preview production build
npm run preview
```

## 📦 Deployment to GitHub Pages

### Option 1: Automatic Deployment (GitHub Actions)

1. Create `.github/workflows/deploy.yml` (already configured in repo)
2. Push to `main` branch
3. GitHub Actions will automatically deploy to GitHub Pages

### Option 2: Manual Deployment

```bash
# Build the app
npm run build

# Deploy dist/ folder contents to GitHub Pages
# Settings > Pages > Deploy from branch: gh-pages, folder: / (root)
```

### Option 3: Using gh-pages Package

```bash
# Install gh-pages (if not already installed)
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

## 📁 Project Structure

```
demo-app/
├── src/
│   ├── components/
│   │   └── Layout.jsx          # Navigation layout
│   ├── pages/
│   │   ├── Home.jsx           # Landing page
│   │   ├── Workflow.jsx       # Interactive workflow visualization
│   │   ├── Scoring.jsx        # Scoring calculator
│   │   ├── Dashboard.jsx     # Sample dashboard
│   │   └── About.jsx          # Project information
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🎨 Features

- **Interactive Workflow Visualization** - Step-by-step walkthrough of the automation pipeline
- **Scoring Calculator** - Adjustable weights and scores with real-time calculation
- **Dashboard Preview** - Sample events with score breakdowns
- **Professional UI** - Modern, responsive design with animations
- **Easy Navigation** - Clear menu structure for presentation

## 🔧 Configuration

### Base Path for GitHub Pages

If deploying to a subdirectory (e.g., `/Event-Discovery-Scoring-Automation-Assistant/`), update `vite.config.js`:

```js
base: '/your-repo-name/'
```

### Customization

- Colors: Edit `tailwind.config.js` for theme colors
- Content: Modify page components in `src/pages/`
- Styling: Update `src/index.css` for global styles

## 📱 Presentation Tips

1. **Start with Home** - Overview of the system
2. **Walk through Workflow** - Use "Run Workflow" button to demonstrate
3. **Explain Scoring** - Show interactive calculator
4. **Review Dashboard** - Discuss top events and scores
5. **End with About** - Summary of deliverables

## 🛠️ Technologies

- **React 18** - UI framework
- **React Router** - Navigation
- **Framer Motion** - Animations
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Lucide React** - Icons

## 📄 License

Internal use only - Event Discovery Project

---

**Created by**: Van  
**Date**: January 2025  
**Purpose**: Interactive demo presentation for Event Discovery & Scoring Automation

