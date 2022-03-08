# Dashboard App

The aim of this project is to build an app to display data in a dashboard.

This project is deployed [here](https://test-dashboard-dennis.herokuapp.com).

## Functionality
This is a web application that contains the following main features:
- Users can view data in table or pie view

## Technology
- Libraries: `React, Redux, axios`
- Styling: `styled-components`
- Linting: `Eslint`
- Testing: `Jest, react-testing-library`
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

## Future Improvements
- Reduce wasted rendering by memorising (potential candidates: PieView, but have to profile and benchmark first to see how beneficial is the memorisation)
- Handle data loading and error states. Currently data loading and error states are handled in reducer and saved to Redux store, but it's not reflected in the UI
- Implement lazy loading. Add routing for table view and pie view so we can take advantage of lazy loading
- Use `Redux Toolkit` to reduce boilerplate code
- Extract some common code into custom hook (potential candidates: network call)
- Type everything correctly, remove all `any` type
