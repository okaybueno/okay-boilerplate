let mix = require('laravel-mix');

mix.webpackConfig({
    resolve: {
        alias: {
            '~': __dirname,
        }
    }
});

mix.copyDirectory('src/assets/fonts', 'public/assets/fonts');

mix.sass('src/assets/style/main.scss', 'public/assets/style/index.css')
    .version();