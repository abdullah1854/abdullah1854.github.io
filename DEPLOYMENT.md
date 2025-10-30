# Deployment Guide - React CV Website

## 🚀 Quick Deployment

### Option 1: Deploy Built Files to GitHub Pages

```bash
# 1. Install dependencies
npm install

# 2. Build for production
npm run build

# 3. The dist/ folder contains your built website
# GitHub Pages needs to serve from root or docs/ folder

# 4. Copy dist contents to root (or configure GitHub Pages to use dist/)
# For now, we'll configure Vite to build directly to root for GitHub Pages
```

### Option 2: Using GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## 📋 Pre-Deployment Checklist

- [ ] All components created and working
- [ ] Dark mode toggle functional
- [ ] Responsive on mobile/tablet/desktop
- [ ] All links working (LinkedIn, GitHub)
- [ ] Images loading correctly (Abdullah.JPG in public/)
- [ ] No console errors
- [ ] Lighthouse score > 90

## 🔧 Configuration for GitHub Pages

Update `vite.config.js` if deploying to a subdirectory:

```javascript
export default defineConfig({
  base: '/repository-name/', // Change if not root domain
  // ... rest of config
})
```

For `username.github.io` repositories, keep `base: '/'`.

## 🧪 Testing Locally

```bash
# Development mode with hot reload
npm run dev

# Build and preview production version
npm run build
npm run preview
```

## 📁 File Structure After Build

```
dist/
├── index.html          # Main HTML file
├── assets/
│   ├── index-[hash].js   # JavaScript bundle
│   ├── index-[hash].css  # CSS bundle
│   └── ...
└── Abdullah.JPG        # Your profile image
```

## 🐛 Troubleshooting

### Images Not Loading
- Ensure `Abdullah.JPG` is in the `public/` folder
- Images in `public/` are copied to `dist/` during build
- Reference as `/Abdullah.JPG` (with leading slash)

### 404 on Refresh
- GitHub Pages doesn't support client-side routing by default
- Add a `404.html` that redirects to `index.html`
- Or use HashRouter instead of BrowserRouter (if routing is added)

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json dist
npm install
npm run build
```

### Dark Mode Not Persisting
- Check browser localStorage
- Verify Navigation component is loading
- Check console for errors

## 🚀 Deployment Steps (Manual)

### Step 1: Build the Application
```bash
npm run build
```

### Step 2: Test the Build Locally
```bash
npm run preview
# Visit http://localhost:4173
```

### Step 3: Commit and Push
```bash
git add .
git commit -m "feat: deploy React CV website"
git push origin main
```

### Step 4: Configure GitHub Pages
1. Go to repository Settings
2. Navigate to Pages section
3. Select source: Deploy from a branch
4. Select branch: main
5. Select folder: / (root) or /dist
6. Save

### Step 5: Wait for Deployment
- GitHub will build and deploy automatically
- Usually takes 1-2 minutes
- Check Actions tab for deployment status

## 🎯 Performance Optimization

### Already Implemented
✅ Code splitting (vendor, motion chunks)
✅ Lazy loading for images
✅ Minification (Terser)
✅ CSS optimization
✅ Font preconnect

### Future Improvements
- [ ] Convert images to WebP format
- [ ] Add service worker for offline support
- [ ] Implement progressive image loading
- [ ] Add compression (gzip/brotli)

## 📊 Expected Lighthouse Scores

With current optimizations:
- **Performance**: 90-95
- **Accessibility**: 95-100
- **Best Practices**: 95-100
- **SEO**: 95-100

## 🔗 Useful Links

- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [React Documentation](https://react.dev)
- [TailwindCSS Docs](https://tailwindcss.com)

## 💡 Tips

1. **Always test locally before deploying**
   ```bash
   npm run build && npm run preview
   ```

2. **Check build size**
   ```bash
   npm run build
   # Check dist/ folder size
   du -sh dist/
   ```

3. **Verify all assets are included**
   ```bash
   ls -R dist/
   ```

4. **Test on multiple devices**
   - Use browser dev tools for mobile testing
   - Test on real devices if possible

## 🆘 Need Help?

- Check the main README-REACT.md
- Review REACT-MIGRATION-GUIDE.md
- Check GitHub Issues for similar problems
- Ensure Node.js >= 16 is installed

---

Ready to deploy? Run `./deploy.sh` to build and get deployment instructions!
