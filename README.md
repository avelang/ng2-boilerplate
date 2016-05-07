Angular 2 Boilerplate
https://github.com/steveblue/ng2-boilerplate

This project is starter code for a web app built with Angular 2.

This boilerplate is simple, yet powerful. It includes gulp tasks that lint and compile Typescript, compile SASS to CSS with libsass and PostCSS, and creates build directories for local and production development environments. It also includes a livereload server for local development so you can get up and running quickly.

NOTE: Angular CLI was released and is an interesting and powerful solution that does the same thing and is built by the open source community. It is strongly recommended to use Angular CLI. https://cli.angular.io

## Dependencies ##

You should install these frameworks at a system level before cloning the repo. Homebrew is helpful for installing node.js on a Mac, otherwise all other packages should be handled through npm. Note: if you have previously installed SASS via the gem, uninstall SASS and run the node-sass compiler instead, node-sass is a port of libsass.

* [node.js] (http://www.nodejs.org)
* [bower] (http://bower.io)
* [gulp] (http://gulpjs.com)
* [sass] (http://www.sass-lang.com)
* [bourbon] (http://www.bourbon.io)


Here are the shell commands so you don't have to look them up: (npm install commands may require sudo)

```
brew install node
npm install -g bower
npm install -g node-sass
npm install -g node-bourbon
npm install -g gulp
npm install -g typescript
```

## Typescript ##

The Angular 2 team has chosen to support Typescript and several tutorial authors also prefer writing Typescript for Angular 2 apps. This boilerplate includes gulp tasks that lint and compile Typescript. `tslint.json` in the root directory can be configured to your specifications for linting. Configure Typescript compilation in `config.ts.js`. This config may seem unconventional, but is necessary at the moment because using `tsconfig.json` with `gulp-typescript` has mixed results. The `gulp-typescript` plugin seems to prefer the `compilerOptions` found in `tsconfig.json`, which is stored in `config.ts.js`.

## CSS ##

Bourbon is a SASS mixin library that has several useful tools for writing SASS, including a responsive grid system and common mixins. While this library provides tools for prefixing styles via mixins, it is recommended to use the default PostCSS autoprefixer task for this purpose, while leveraging other aspects of Bourbon.

## Github ##

Fork the repo.
Clone the repo into a local folder.

Use the following command to clone the repo, replacing [username] with your Github username.

```
git clone https://github.com/[username]/ng2-boilerplate.git
```


## Installation ##

In the root folder of the repo, run the package installer for the project. This will initiate a bower install of all necessary libraries.

```
npm install
bower install
```

In the project root directory, this command will set up node_modules folder and various dev dependencies. If you do not have ownership rights on the folders that will be created, npm or bower could throw an error. If bower fails to run, `bower install`.

Duplicate the file `/settings/local-config.json` and rename the new file `/settings/local/config.json`. This will establish the settings of the local environment. The same pattern works for production environment.

After that, you should be able to run `gulp dev` in the root directory of the repo and visit localhost:9000/ in your browser.

```
localhost:9000
```

You may configure host name and port in the `config.json`.


## Notes ##

This boilerplate is the starter code for any Angular Project. It includes a gulp workflow to build and deploy projects for 2 environments, development and production. The main tasks are detailed in gulpfile.js. `gulp dev` will deploy a development server at `localhost:9000`. This task symlinks the files in /app, /assets, etc to /build/www/ and sets up watchers for changes in .html, .css, and .js files.

`gulp prod` will copy all files outlined in config.paths.json to /build/prod/ and create a workable build that can be deployed to a staging / production server. Modify the file globs that are copied in config.paths.json and/or modify the gulp tasks as needed.

head.js is used to inject all dependencies prior to bootstrapping the app.

This boilerplate is based off an earlier project I created called angular-boilerplate. https://github.com/steveblue/angular-boilerplate
