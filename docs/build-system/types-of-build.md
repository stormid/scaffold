# Build modes

The scaffold has four build modes:
- `dev` - runs the Rspack dev server and watches for changes
- `build` - runs the build process once and outputs a static site
- `ci` - runs the build process once and outputs a static assets (not HTML) to a target folder
- `watch` - runs ci task and watches for changes 


## Dev
```
npm start
```

For developing a static site locally. The Rspack dev server keeps files in memory, hot reloads JavaScript when it detects changes, and live-reloads the page when CSS changes (via the dev server's `watchFiles` option).

By default the dev server runs on `localhost:8081`. Read the console messages for output.

## Build
```
npm run build
```
To generate a static site. The build process runs once, and outputs a static site to a target folder (default `/build`).

## CI
```
npm run ci
```
To generate static assets for a server-rendered application. The build process runs once, and outputs static assets to a target folder specified by the `integrationOutput` variable in the `paths.config.js` file.

## Watch
```
npm run watch
```
For developing against a server-rendered application. The watch task runs the CI task and watches for changes.


## Next
[Configuration ⟶](./configuration.md)