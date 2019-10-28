# Dashboard App

The aim of this project is to build an app to display data in a dashboard.

This project is deployed [here](https://dashboard.heroku.com/apps/still-eyrie-50623).

## Functionality
This is a web application that contains the following main features:
- Users can view the data in table view
- Users can view the data in pie view

## Technology
- Code: `React (16.7.0), Redux (4.0.1), date-fns, axios`
- Styling: `styled-components`
- Linting: `Eslint`
- Testing: `Jest, Enzyme`
- Build: `Create-React-App (Webpack)`
- Deployment: `Heroku`

## Development
This project is using `npm` for dependency management.  Make sure `npm` is installed on your machine.

- `npm install` 

Install project dependencies.

- `npm run dev`

Run the app in development mode on `http://localhost:3000/`.

- `npm run test`

Launch test runner and run all the tests.

## Considerations
- Lazy load is implemented for each view

## Future Improvement
- Implement memoised selector using `re-select`
- Mobile UI design could be improved.
