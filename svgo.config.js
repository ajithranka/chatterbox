module.exports = {
  js2svg: {
    indent: 2,
    pretty: true,
  },
  plugins: [
    'preset-default',
    'removeDimensions',
    { name: 'convertColors', params: { currentColor: true } },
  ],
}
