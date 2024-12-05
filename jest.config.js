module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**/*.js',    
    './backend/**/*.js', 
  ],
  coverageThreshold: {
    './src/*.js': {
      lines: 25,
    },
  },
};
