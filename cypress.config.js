const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  "video": false,
  
  "reporter": "mochawesome",
  "reporterOptions": {
    "charts": true,
    "overwrite": true,
    "html": true,
    "json": false,
    "reportDir": "cypress/reports"
  }
});
