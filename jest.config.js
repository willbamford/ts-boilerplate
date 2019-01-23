const { defaults } = require('jest-config')
// const path = require('path')

module.exports = {
  // setupFiles: [path.join(__dirname, '../jest.setup.js')],
  // roots: ['./src'],
  transform: {
    '^.+\\.tsx?$': 'babel-jest'
  },
  // modulePaths: ['<rootDir>/src', '<rootDir>/node_modules'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  testPathIgnorePatterns: ['/node_modules/', 'dist'],
  testRegex: '((\\.|/)test)\\.(jsx?|tsx?)$'
  // snapshotSerializers: ['enzyme-to-json/serializer']
}
