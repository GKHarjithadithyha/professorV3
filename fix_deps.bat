@echo off
echo Cleaning up old node_modules and package-lock.json...
if exist "node_modules\" rd /s /q "node_modules"
if exist "package-lock.json" del /f /q "package-lock.json"

echo Installing runtime dependencies (Next.js, React)...
call npm install next react react-dom

echo Installing TypeScript and Types...
call npm install --save-dev typescript @types/react @types/node

echo Done! Please restart your VSCode or TypeScript server to clear the IDE errors.
pause
