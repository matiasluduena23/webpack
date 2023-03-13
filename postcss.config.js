const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
    autoprefixer: {},
    cssnano: {},
    plugins: [
        purgecss({
            content: ['./**/*.html']
        })
    ]
    
}