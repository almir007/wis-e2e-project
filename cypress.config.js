const {defineConfig} = require("cypress");

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://www.thepunterspage.com',
        pageLoadTimeout: 20000,
        defaultCommandTimeout: 6000,
        supportFile: false,
        viewportWidth: 1920,
        viewportHeight: 1080,
        realEvents: true,
        chromeWebSecurity: false,
        experimentalModifyObstructiveThirdPartyCode: true,
    },
    setupNodeEvents(on, config) {
        // implement node event listeners here
    },
});
