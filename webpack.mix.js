const { mix } = require('laravel-mix');

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

mix.js('resources/assets/js/app.js', 'public/js')
   .js('resources/assets/js/main.js', 'public/js')
   .js('resources/assets/js/client.js', 'public/js');
   // .extract(['vue']);

mix.sass('resources/assets/sass/app.scss', 'public/css')
   .sass('resources/assets/sass/portal.scss', 'public/css')
   .sass('resources/assets/sass/client.scss', 'public/css')
   .sass('resources/assets/sass/media.scss', 'public/css');

mix.styles([
    'resources/assets/sass/plugins/jquery-ui.min.scss',
    'resources/assets/sass/plugins/font-awesome.scss',
    'resources/assets/sass/plugins/toastr.scss',
    'resources/assets/sass/plugins/bootstrap-datepicker3.min.scss',
    'resources/assets/sass/plugins/bootstrap-select.scss',
    'resources/assets/sass/plugins/fileinput.scss',
    'resources/assets/sass/plugins/jquery.mmenu.all.scss',
    'resources/assets/sass/plugins/colorbox.scss',
    'resources/assets/sass/plugins/chosen.scss',
    'resources/assets/sass/plugins/selectize.scss',
    'resources/assets/sass/plugins/multiple-autocomplete.scss'
], 'public/css/all.css');

mix.scripts([
    'resources/assets/js/jquery-3.2.1.min.js',
    'resources/assets/js/jquery-ui.min.js'
], 'public/js/core.js');

mix.scripts([
    'resources/assets/js/plugins/jquery-browserdetect.js',
    'resources/assets/js/plugins/classie.js',
    'resources/assets/js/plugins/toastr.min.js',
    'resources/assets/js/plugins/isotope.pkgd.min.js',
    'resources/assets/js/plugins/imagesloaded.pkgd.min.js',
    'resources/assets/js/plugins/jquery.debouncedresize.js',
    'resources/assets/js/plugins/modernizr.custom.js',
    'resources/assets/js/plugins/bootstrap-datepicker.js',
    'resources/assets/js/plugins/bootstrap-select.js',
    'resources/assets/js/plugins/fileinput.js',
    'resources/assets/js/plugins/dialogFx.js',
    'resources/assets/js/plugins/jquery.mmenu.all.min.js',
    'resources/assets/js/plugins/jquery.colorbox-min.js',
    'resources/assets/js/plugins/chosen.jquery.js',
    'resources/assets/js/plugins/selectize.js',
    'resources/assets/js/plugins/moment.js'
], 'public/js/plugins.js');

if (mix.config.inProduction) {
    mix.version();
}
