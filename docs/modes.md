# Modes

The scaffold has four modes:
- dev - runs the webpackdev server and watches for changes
- build - runs the build process once and outputs a static site
- ci - runs the build process once and outputs a static assets (not HTML) to a target folder
- watch - runs ci task and watches for changes 


## Dev
For developing a static site locally. The webpackdev server keeps files in memory, and hot reloads when it detects changes. Browsersync also runs to allow the devserver to be mirrored across devices.

## Build
To generate a static site. The build process runs once, and outputs a static site to a target folder.

## CI
To generate static assets for a server-rendered application. The build process runs once, and outputs a static assets to a target folder.

## Watch
For developing against a server-rendered application. The watch task runs the CI task and watches for changes.
