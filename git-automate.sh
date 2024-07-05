#!/bin/bash

# Replace with the correct path to your project directory
cd "C:/Users/mianh/Documents/INTERNSHALA/Landing-page-task" 

# Initialize Git repository if not already initialized
git init

# Add all files to staging area
git add .

# Commit changes
git commit -m "Initial commit"

# Check if remote origin already exists
if ! git ls-remote --exit-code origin >/dev/null 2>&1; then
    # Set remote origin (replace <your-github-username> with your GitHub username)
    git remote add origin https://github.com/Hamid6426/api-data-fetch.git
fi

# Pull changes from remote (if any)
git pull origin main --allow-unrelated-histories

# Push to GitHub
git push -u origin main
