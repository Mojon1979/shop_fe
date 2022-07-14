const { override } = require('customize-cra');
const {
  aliasDangerous,
  configPaths,
} = require('react-app-rewire-alias/lib/aliasDangerous');

module.exports = {
  Webpack: override(aliasDangerous(configPaths('./tsconfig.paths.json'))),
};
