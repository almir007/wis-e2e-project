const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
      baseUrl: 'https://www.thepunterspage.com/',
      defaultCommandTimeout: 6000,
      supportFile: false,
      viewportWidth: 1920,
      viewportHeight: 1080,
      realEvents: true,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
});
