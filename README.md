# README #

### How do I get set up? ###

Install NPM (tested with node v15.9.0)
1. npm ci
2. npm run dev

### How it's done ###

* #### Using laravel mix on top of webpack
    * Configuration of webpack is in **./webpack.mix.js**, in the file you will find:
    * Some webpack plugins options on top
    * Sass compilation from entry file to final file - .sass(`src/assets/scss/app.scss`, `src/assets/dist/app.css`)
    * JS Bundling from entry file to final file - .js('src/assets/js/app.js', 'src/assets/dist/app.js')
    * We bundle all vendor imported/required scripts inside JS files so they are included in the compiled app.js file. Only jQuery is autoloaded from external source (as Wordpress also loads jQuery and it's used by many plugins, we don't need duplicated jQuery in bundled JS)
    * Browsersync
    * Read more at - https://laravel-mix.com/docs/6.0/what-is-mix

* #### General notes about JS
    * All initial code is moved to **./src/assets/js/modules/_legacy.js**
    * Some parts of the code were removed and rewriten using ES6 modules and importing the vendor scripts from npm. They can be found in **./src/assets/js/modules/** folders - **aos.js**, **parallax.js** and **slick.js**
    * Some more parts from _legacy.js could be moved to another modules, for example menu.js
    * Entry script is **./src/assets/js/app.js** which loads all the other modules
    
* #### How to add new vendor JS library
    * Install it from npm, for example **npm i jquery-parallax.js**
    * Import it in the js file / module for example **import 'jquery-parallax.js'**
    * That's it. No need to add multiple <script src="..."> into HTML. All imported JS will be bundled into 1 final JS, which is great for Google Page Speed optimizations
    * Sometimes css needs to also be imported. Import them in scss as it's done for example **./src/assets/scss/app.scss** - @import 'aos/src/sass/aos.scss'; @import 'slick-carousel/slick/slick.css';
    * The path is relative to /node_modules/ path

* #### Es6 modules
    * Modules are grouped by logic or functions related to some vendor script
    * Used for modularity and simple maiteinance of the code
    * In this example done just as a simple class with a method that do some piece of code
    * Read more at - https://metabox.io/modernizing-javascript-code-in-wordpress/
