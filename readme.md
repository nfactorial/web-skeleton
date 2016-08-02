Webpage Skeleton
================
This repository contains a simple skeleton webpage that makes use of a selection of modern web technologies,
these include:

React (https://facebook.github.io/react/)
A JavaScript library for building component based user interfaces, created by Facebook.

Babel (https://babeljs.io/)
A transpiler for JavaScript allowing ES6 JavaScript code to be written for browsers that do not yet support ES6
natively.

Sass (http://sass-lang.com/)
A pre-processor for generating Cascading Style Sheets (CSS) Sass provides a more complete language for declaring
your pages styles, including variables, nesting, inheritance and much more.

Bootstrap (http://getbootstrap.com/)
Is a great UI framework for HTML applications, created by the people at Twitter. It comes with pre-defined CSS for
many flexible and useful UI components.

WebPack (https://webpack.github.io/)
WebPack is a module bundler and is used to compress all the JavaScript and CSS files into simple packages for upload
to your web-server.

Getting Started
===============
To use this repository you must have Node.js (https://nodejs.org/en/) and npm installed.

Obtain the repository on your local machine from git:
```
git clone https://github.com/nfactorial/web-skeleton
```
Once you have the repository, navigate to the directory in the command line and install the required packages by
typing:
```
npm install
```
This will take a few seconds while your computer downloads the necessary files over the network. Once downloaded
you may launch the development webpage by typing:
```
npm run dev
```
You will see some coloured text fill your console, once finished you may open a web-browser and navigate to localhost
(http://127.0.0.1:8081).

Once launched, you may make changes to your web-page in any of the files within the development folder, webpack will
detect those changes and rebuild the website for you dynamically. Allowing you to refresh the browser window to see
your changes immediately.

Deploying
=========
Once your are happy with your web-page, you will want to upload it to a web-server for access from the internet. To
do this, return to the command line and run:
```
npm run deploy
```
Webpack will now take your application and build files suitable for distribution on a web-server. It will store all
the generated files inside the ./dist folder. Once finished, you may upload this folder to your web-server.
