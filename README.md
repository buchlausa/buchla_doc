# Buchla Documentation
This repo contains the materials needed to edit and publish the public documentation for Buchla products. 
It uses the [Docusaurus](https://docusaurus.io/docs#fast-track) site generator to generate a static website from [markdown](https://www.markdownguide.org/cheat-sheet/) documents. 
The documentation is viewable on the [GitHub Pages site](https://buchlausa.github.io/buchla_doc/).

# Writing Documentation
* Best done with Atom, really. 
* A nice Word converter is found [here](https://word2md.com/)

# Installation
Documentation for getting started with Docusaurus is at their website. Here's some specific instructions.

You'll need NodeJS and `npm` installed on your computer. There's several ways to do this. Here's a [few options](https://nodejs.org/en/download/package-manager/#macos). You can also follow [this recipe](https://gist.github.com/d2s/372b5943bce17b964a79) to use node version manager (`nvm`) which is the more future-proof way of installing NodeJS.


Clone this repo, then run a command to install the nodeJS packages

Run the command
```
npm install
```
Then:
```
npm run start
```
will build the docs and launch a server. It should open your browser to the local site [http://localhost:3000/](http://localhost:3000/).

# Deploy  
If you clone this repo and push some changes, you'll need to publish or deploy the site to git hub pages. 

Use the [Docusaurus guide](https://docusaurus.io/docs/deployment#deploying-to-github-pages) to learn how to deploy to GitHub Pages.

# Customize
Here's a [nice tool](https://docusaurus.io/docs/styling-layout) for setting up the colors in CSS. 
