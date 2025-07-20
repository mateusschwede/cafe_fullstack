import { defineConfig } from 'cypress'

export default defineConfig({
    e2e: {
        baseUrl: 'http://localhost:5173',
        specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
        supportFile: 'cypress/support/e2e.ts',
        viewportWidth: 1280,
        viewportHeight: 800,
        defaultCommandTimeout: 8000,
        video: true,
    },
})