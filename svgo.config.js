module.exports = {
  js2svg: {
    indent: 2,
    pretty: true,
  },
  plugins: [
    'removeDimensions',
    { name: 'convertColors', params: { currentColor: true } },
  ],
}
