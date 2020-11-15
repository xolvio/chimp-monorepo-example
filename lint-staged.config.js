module.exports = {
  '*.{j,t}s': ['eslint --cache --fix', 'jest --findRelatedTests'],
  'package.json': ['sort-package-json'],
}
