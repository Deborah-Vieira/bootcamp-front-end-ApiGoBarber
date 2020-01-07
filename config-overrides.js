//node
//addBabelPlugin é a funcao que add o plugin dentro do react
const { addBabelPlugin, override } = require('customize-cra');

//add o plugin
module.exports = override(
  //array 1 posicao o nome do plugin, a 2 indica qual pasta esta meu codigo
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src',
    },
  ])
);
