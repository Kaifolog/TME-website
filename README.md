# [TME](https://github.com/Kaifolog/TME) project website  

You can find it at: https://kaifolog.github.io/TME-website

## Installation

Pre-requirements:
- node.js
- vite
- postcss 
- autoprefixer
- tailwindcss

To install npm packages use:
```
npm install
```

## Building

After merging all changes to the ```deployment``` branch, it's necessary to compile css:
```
npx tailwindcss -o styles.css --minify
```
Then commit and push. Github Pages will do the rest.