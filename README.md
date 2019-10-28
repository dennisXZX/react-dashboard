# Dashboard App

The aim of this project is to build an app to display data in a dashboard.

This project is deployed [here](https://dashboard.heroku.com/apps/still-eyrie-50623).

## Functionality
This is a web application that contains the following main features:
- Users can view data in table view
- Users can view data in pie view

## Technology
- Libraries: `React, Redux, axios`
- Styling: `styled-components`
- Linting: `Eslint`
- Testing: `Jest, Enzyme`
- Build: `Create-React-App`
- Deployment: `Heroku`

## Development
This project is using `npm` for dependency management.  Make sure `npm` is installed on your machine.

- `npm install` 

Install project dependencies.

- `npm run dev`

Run the app in development mode on `http://localhost:3000/`.

- `npm run test`

Launch test runner and run all the tests.

## Future Improvement
- Implement memoised selector using `re-select` so to reduce unnecessary mapStateToProps calls.
- Handle data loading and error states. Currently data loading and error are handled in reducer, but it's not reflected in the UI.
- Implement lazy loading. Add routing for table view and pie view so we can take advantage of lazy loading.
