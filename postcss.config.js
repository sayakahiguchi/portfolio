const purgecss = [
  '@fullhuman/postcss-purgecss',
  {
    content: ['./src/components/**/*.js', './src/pages/**/*.js'],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
]

module.exports = {
  plugins: {
    'postcss-nested': {},
    tailwindcss: {},
    autoprefixer: {},
  },
}