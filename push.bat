@echo off
echo Linking to the new professorV2 GitHub repository...
git remote set-url origin https://github.com/GKHarjithadithyha/professorV2.git
if errorlevel 1 (
    echo "Origin remote didn't exist, adding it directly..."
    git remote add origin https://github.com/GKHarjithadithyha/professorV2.git
)

echo Staging files...
git add .

echo Committing changes...
git commit -m "Initial commit for V2: Transitioned to Zapier Design System"

echo Pushing to GitHub (Main branch)...
git push -u origin main
if errorlevel 1 (
    echo "Failed to push to main, attempting master..."
    git push -u origin master
)

echo Done! Verify your GitHub repository to ensure the files were uploaded safely.
pause
