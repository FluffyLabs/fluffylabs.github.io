

// webpack.mix.js

let mix = require('laravel-mix');

mix.options({
    processCssUrls: false,
    autoprefixer: {
        enabled: true,
        options: {
            overrideBrowserslist: ['last 3 versions', '> 1%'],
            cascade: true,
            grid: true,
        }
    },
    postCss: [
        require('postcss-discard-comments')({
            removeAll: true
        }),
    ],
    uglify: {
        comments: false
    }
}).sass(`src/assets/scss/app.scss`, `src/assets/dist/app.css`).options({
    processCssUrls: false
}).js('src/assets/js/app.js', 'src/assets/dist/app.js')
//.disableNotifications();
.webpackConfig({
    externals: {
        jquery: 'jQuery',
    },
})
.autoload({
    jquery: ['$', 'window.jQuery'],
})
.browserSync({
    server: {
        baseDir: "src",
        directory: true
    },
    watchOptions: {
        ignoreInitial: true,
        ignored: '*.txt'
    },
    files: ['./src/*.+(html|php)', './src/assets/dist/app.css', './src/assets/dist/app.js']
});
