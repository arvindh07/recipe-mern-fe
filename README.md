# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

Scenerio 
-> if it is a important request, we need to make sure that the user is authenticated.

Sol 
-> In node js, we use middleware that runs before each request.
-> Middleware function, verifies the token that u send frontend and the actual token.
