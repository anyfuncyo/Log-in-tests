# Example log in test with Cypress
Cypress is a JavaScript-based testing tool that runs tests directly inside the browser, it supports the creation of unit tests, integration tests and end-to-end tests. 

This is a UI Tests example which covers general login behaviour of a web page.

## Project set-up
Cypress is installed as a node module and the binary file sits under the folder “node_modules”. 

Prerequisite for running the tests on local machine:
- install [Node.js](https://nodejs.org/)
- download [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress)

To download Cypress for this project, clone this github repo and goes to the root of the project folder, from there run
```sh
npm install cypress --save-dev
```
then
```sh
node_modules/.bin/cypress install
```
 and wait for the installation to complete.

## How to run tests
There are two ways of running the tests, either by using the test runner or from CLI.

Execution from the Cypress Test Runner:
```sh
./node_modules/.bin/cypress open
```
1. Select E2E Testing 
2. Choose the browser you want to run the tests on
3. Select test file to run from `cypress/e2e` folder

Execution from CLI:
```sh
./node_modules/.bin/cypress run
```
1. Test reults will be printed in the console
2. Recordings of the test execution is automatically added into `cypress/videos` folder





