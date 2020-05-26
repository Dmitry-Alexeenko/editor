const Autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [
    new Autoprefixer({grid: 'autoplace'}),
  ],
}
