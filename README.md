# mass-web

[![Depenency Status](https://gemnasium.com/TheMasster12/mass-web.png)](https://gemnasium.com/TheMasster12/mass-web)
![GA Beacon](https://ga-beacon.appspot.com/UA-43696434-2/mass-web/readme)

> Complete redesign of my personal website.

## Design
The design is based on a grid system. Some have said that it looks similiar to the Windows Metro interface, but I think it has more in common with a chess board.

## Building
First, install [Node.js](http://nodejs.org).
This will also install `npm`, the node package manager.

Clone this repository, then navigate to the directory where it was cloned.
Run `npm install` to install the required development dependencies.
Also run `npm install -g grunt-cli` to install the command-line interface for [Grunt](http://gruntjs.com).

Now all you have to do is run `grunt`, and a server will be spun up which can be accessed at `localhost:8000`.

My `Gruntfile.coffee` has a `watch` task, so any code edits will trigger an instant recompile.

## Production
When finished, this version of my website will be pushed to production at:
[mass.gigastormdevelopers.com](mass.gigastormdevelopers.com)
