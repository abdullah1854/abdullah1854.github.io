#!/bin/bash

# Deployment script for React CV website
# This script builds the React app and prepares it for GitHub Pages

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
echo "📁 Built files are in the dist/ directory"
echo ""
echo "Next steps:"
echo "1. The dist/ folder contains your production-ready website"
echo "2. You can preview it locally with: npm run preview"
echo "3. To deploy to GitHub Pages, commit and push the changes"
echo ""
echo "Note: For GitHub Pages to work with React Router (if added later),"
echo "you may need to configure a 404.html redirect or use HashRouter."
