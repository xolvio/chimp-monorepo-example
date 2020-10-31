const {pathsToModuleNameMapper} = require('ts-jest/utils')
const {compilerOptions} = require('./tsconfig')

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['./jest.setup.js'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
}
