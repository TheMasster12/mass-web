# mass-web [![BuildStatus](http://img.shields.io/travis/mass/mass-web.svg?style=flat)](https://travis-ci.org/mass/mass-web) [![devDependencyStatus](http://img.shields.io/david/dev/mass/mass-web.svg?style=flat)](https://david-dm.org/mass/mass-web#info=devDependencies) [![Issues](http://img.shields.io/github/issues/mass/mass-web.svg?style=flat)](https://github.com/mass/mass-web/issues) [![GaBeacon](http://img.shields.io/badge/analytics-GA-blue.svg?style=flat)](https://ga-beacon.appspot.com/UA-43696434-2/mass-web/readme)

> Complete redesign of my personal website.

## Design
The design is ~~lacking in artistic value~~ based on a grid system. Some have said that it looks similar to the Windows Metro interface, but I think it has more in common with a chess board.

## Building
First, install [Node.js](http://nodejs.org).
This will also install `npm`, the node package manager.

Clone this repository, then navigate to the directory where it was cloned.
Run `npm install` to install the required development dependencies.
Also run `npm install -g grunt-cli` to install the command-line interface for [Grunt](http://gruntjs.com).

Now all you have to do is run `grunt`, and a server will be spun up which can be accessed at `localhost:8000`.

My `Gruntfile.coffee` has a `watch` task, so any code edits will trigger an instant recompile.

If you want to build and package to prepare for deployment, run `grunt prod`.

## Travis-CI
This project is configured to build and deploy after each commit through the use of [Travis-CI](https://travis-ci.org). After a successfully running `grunt prod`, Travis-CI deploys the `dist` folder to a S3 bucket on AWS.

## Production
The website is hosted at: [mass.red](http://mass.red).
