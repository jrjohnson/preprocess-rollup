'use strict';

module.exports = {
  name: 'preprocess-rollup',
  setupPreprocessorRegistry(type, registry) {
    registry.add('htmlbars-ast-plugin', {
      baseDir() {
        return __dirname;
      },
    });
  },
};
