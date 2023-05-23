module.exports = {
  browsers: 'chrome',
  clientScripts: [{module: 'axe-core/axe.min.js'}],
  src: ['e2e/tests/*.e2e-spec.ts'],
  screenshots: {
    path: 'tmp/screenshots/',
    takeOnFails: true,
    pathPattern: '${DATE}_${TIME}_${TEST}_${QUARANTINE_ATTEMPT}.png',
  },
  concurrency: 1,
  selectorTimeout: 4000,
  quarantineMode: {
    successThreshold: 1,
    attemptLimit: 3,
  },
  compilerOptions: {
    typescript: {
      customCompilerModulePath: '../typescript',
    },
  },
};
