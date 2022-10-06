# Buchla Documentation
This repo contains public documentation for Buchla products. It uses the [Docusaurus](https://docusaurus.io/docs#fast-track) site generator to generate a static website from [markdown](https://www.markdownguide.org/cheat-sheet/) documents.

# Installation
Documentation for getting started with Docusaurus is at their website. Here's some specific instructions.

You'll need NodeJS and `npm` installed on your computer. There's several ways to do this. Here's a [few options](https://nodejs.org/en/download/package-manager/#macos). You can also follow [this recipe](https://gist.github.com/d2s/372b5943bce17b964a79) to use node version manager (`nvm`) which is the more future-proof way of installing NodeJS.


Clone this repo, then navigate into the repository folder (e.g. `~/Documents/GitHub/buchla-docs`).

Run the command
```
npm init docusaurus@latest my-website classic
```

This installs Docusaurus and initializes a website. Then:
```
cd my-website
npm run start
```
And visit the default tutorial website that is running locally at [http://localhost:3000/](http://localhost:3000/).

# Deploy  
Use the [Docusaurus guide](https://docusaurus.io/docs/deployment#deploying-to-github-pages) to deploy to GitHub Pages.
