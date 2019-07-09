let mix = require('webpack-mix').mix;

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.styles([
    '../private/dist/css/normalize.css',
    '../private/dist/css/bootstrap.min.css',
    '../private/dist/Lizziecons/lizziecons.css'
], './dist/main.css').babel([
    '../private/dist/js/jquery.js',
    '../private/dist/js/bootstrap.min.js',
    '../private/dist/js/app.js'
], './dist/main.js');

mix.sass('../private/dist/css/style.scss', 'dist').setPublicPath('dist');
