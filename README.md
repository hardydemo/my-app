# LaunchDarkly SDK for React Web - Example app

This is a simple SPA demonstrating `launchdarkly-react-client-sdk`. It demonstrates two features flags - boolean and string which will toggle between React and NextJS logo/learning. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running the example

Follow these steps to run the example app:

- In App.js, replace `clientSideID` value to your own Client-side ID. You can find
  this in your LaunchDarkly portal under Account settings / Projects.

- Create a boolean flag called `logoSwitch` in your project. Make sure you
  make the flag available to the client-side SDK.

- Create a string flag called `learnSwitch` in your project. Make sure you
  make the flag available to the client-side SDK.

- You should now be able to start the app by running the following in the project directory:

  ```sh
  npm start
  ```

- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

- Toggle the killswitch for `logoSwitch` and/or `learnSwitch` in the dashboard and the
  app should respond without a browser refresh.

- The application should adapt its response based on the specific segment, whether it involves `react-users` or `nextjs-users`.
