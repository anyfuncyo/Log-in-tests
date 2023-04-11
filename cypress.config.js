const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env: {
    baseUrl: "https://www.hudl.com/login?utm_content=hudl_primary&utm_source=www.hudl.com&utm_medium=login_dropdown&utm_campaign=platform_logins",
  }
});
