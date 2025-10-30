#!/bin/bash

# Deployment script for React CV website to GitHub Pages
# This script builds the React app and prepares it for GitHub Pages deployment

set -e  # Exit on error

echo "🚀 Starting deployment process..."

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install dependencies"
        exit 1
    fi
fi

# Build the React app
echo "🔨 Building React application..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo "✅ Build completed successfully!"
echo ""
echo "📋 Next steps for GitHub Pages deployment:"
echo ""
echo "OPTION 1: Use GitHub Actions (Recommended - Automatic)"
echo "  1. Commit and push the .github/workflows/deploy.yml file"
echo "  2. Go to repository Settings > Pages"
echo "  3. Under 'Source', select 'GitHub Actions'"
echo "  4. Push to main branch - deployment will happen automatically"
echo ""
echo "OPTION 2: Manual deployment (if GitHub Actions not available)"
echo "  1. Copy dist/ contents to root directory"
echo "  2. Commit and push to main branch"
echo "  3. GitHub Pages will serve from root"
echo ""
echo "⚠️  IMPORTANT: Make sure GitHub Pages is configured correctly:"
echo "  - Repository Settings > Pages"
echo "  - Source: GitHub Actions (if using Option 1)"
echo "  - OR Source: Deploy from branch 'main' / (root) (if using Option 2)"
echo ""
