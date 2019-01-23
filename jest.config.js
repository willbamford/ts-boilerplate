const { defaults } = require('jest-config')

module.exports = {
  transform: {
    '^.+\\.tsx?$': 'babel-jest'
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  testPathIgnorePatterns: ['/node_modules/', 'dist'],
  testRegex: '((\\.|/)test)\\.(jsx?|tsx?)$'
}
