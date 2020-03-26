let mix = require('laravel-mix');

mix.copyDirectory('src/assets/fonts', 'public/assets/fonts');

mix.sass('src/assets/style/main.scss', 'public/assets/style/index.css')
    .version();