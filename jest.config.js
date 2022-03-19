module.exports = {
  verbose: true,
  moduleFileExtensions: [
    'js', 'ts', 'vue'
  ],
  transform: {
    // '^.+\\.[t|j]sx?$': 'babel-jest',  // do not change this line
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  testEnvironment: 'jsdom',
};
