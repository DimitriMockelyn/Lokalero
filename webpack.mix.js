let mix = require('laravel-mix');


/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/assets/js/app.js', 'public/js')
//.sass('resources/assets/sass/app.scss', 'public/css')
    .sass('resources/assets/scss/main.scss', 'public/css')
    .options({
      postCss: [
        //require('postcss-color-function')(),
        require('postcss-css-variables'),
        require('postcss-preset-env')({
          browsers: 'last 2 versions',
          stage: 3,
          features: {
            'color-mod-function': {
              unresolved: 'warn'
            }
          }
        })
      ],
      processCssUrls: false
    });
