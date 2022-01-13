# Assets

Static asssets that are not images, CSS, or JavaScript can be added to an `assets` folder in the `src` directory. All files and folders in the `assets` directory will be copied to the `/static` directory during the build process, and can be referenced at `/static` when running the dev server.

For example, to add locally-hosted webfonts to a project you could create a directory `src/assets/fonts` for the font files. Then you can reference the webfonts in your CSS at `/static/fonts/`.