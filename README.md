# LaunchDarkly SDK for React Web - Example app

This is a simple SPA demonstrating `launchdarkly-react-client-sdk`.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running the example

Follow these steps to run the example app:

- In app.js, replace `clientSideID` value to your own Client-side ID. You can find
  this in your LaunchDarkly portal under Account settings / Projects.

- Create a boolean flag called `logoSwitch` in your project. Make sure you
  make the flag available to the client-side SDK.

- Create a boolean flag called `learnSwitch` in your project. Make sure you
  make the flag available to the client-side SDK.

- You should now be able to start the app by running the following in the project directory:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

- Toggle the killswitch for `dev-test-flag` in the dashboard and the
  app should respond without a browser refresh.

## Appendix

You can learn more about this sample application at [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
