# Getting started

1. Use the command line tool to scaffold a new project, first install it (this is a one-time operation)

```
npm i -g @stormid/scaffold-cli
```

2. Create a new project

```
scaffold my-project
```

This will create a folder called 'my-project' in the current directory containing the latest stable version of the scaffold, it will set the project name in the package.json, and install all of the dependencies.

3. Start building

```
npm start
```

This will spin up the development server and watch for changes as you build your website.

See [build modes](../build-system/types-of-build.md) for details about the different ways that the scaffold can run a build, including how to export your static site for deployment.


## Node version
The Scaffold runs on Rspack 2, which requires Node.js 20.19+ or 22.12+. The current target version is specified in the `.nvmrc` file (Node 22). This file is compatible with NVM and NVS — the command `nvm use` (or `nvs use`) will change (or attempt to change) to the node version specified in the `.nvmrc` file. 


## Next
[Creating pages ⟶](./html.md)


