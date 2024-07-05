#!/bin/bash

cd C:\Users\mianh\Documents\INTERNSHALA\Landing-page-task

# Initialize Git repository
git init

# Add all files to staging area
git add .

# Commit changes
git commit -m "Initial commit"

# Set remote origin (replace <your-github-username> with your GitHub username)
git remote add origin https://github.com/hamid6426/api-data-fetch.git

# Push to GitHub (replace <branch-name> with your branch, typically main or master)
git push -u origin main
