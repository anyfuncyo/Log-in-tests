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
1. Select E2E Testing from the test runner when it is launched
2. Choose the browser you want to run the tests on
3. Select test file to run from `cypress/e2e` folder

Execution from CLI:
```sh
./node_modules/.bin/cypress run
```
1. Test reults will be printed in the console
2. Recordings of the test execution is automatically added into `cypress/videos` folder

## Acknowledgement
- This is my first Cypress project, the aim is to develop my knowledge with the tool and to identify the potential it has
- I am particually interested in using Cypress for API testing, on knowing how to use stub requests and responses for writing tests
- The project set-up instruction provided should apply on both mac and window machines, I was not able to verify the behaviour on window machine myself but have tested the instruction thoroughly on mac running both intel and apple chips
- I have tried to use unique element id for assertions as much as possible in writing tests, however some elements have not got id included and I have to use hardcoded string instead. Ideally hardcode string should be avoided and it will be better to use localised strings for asserting element text or value, that way the tests will be more robust and less likely to be impacted by content or translation upodate. I couldn't find the translation keys in the web page inspector, will be good to know if this option is available.



