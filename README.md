# TAS : a website for reading and writing books

Hi, welcome to TAS (The Authors Society)
in this website you can read the books of people who are members of TAS.
you can even write your own book. books can published chapter by chapter.
you can follow the members and their books and become followed by them.
after sign up in TAS, you can upload your profile image or edit your informations, create new book and you can see your books there.
for creating book you should choose a Genre for it . you can search book and members so easily.
on your home feed, you can see the latest published chapter of the book you followed and by clicking on book name you will be referred to the
book's profile page. and by clicking on writer's name you will referred to his/her profile.

# how to run code of frontend and backend in your vscode

run step 1 and 2 together to see the resut.

1- Step 1 : clone frontend

make a folder you want to put the frontend react js code which cloned from github in it.
open TAS-project in github and clone master branch of frontend repository with this script :
`git clone {the url of master branch of frontend repo}`
when you clone frontend :
if you use npm, you should first run the script `npm start` which installs the required dependencies. after that
then run `npm start` to run the React project and show the result in browser.
if you use yarn, you should first run the script `yarn build ` and `yarn start`.

2- Step 2 : Clone backend

make a folder you want to put the backend react js code which cloned from github in it.
open TAS-project in github and clone backend repository with this script :
`git clone {the url of backend repo}`
when you clone backend :
if you use npm, you should first run the script `npm start` which installs the required dependencies. after that
then run `node index.js` to run the server.
if you use yarn, you should first run the script `yarn build ` and `node index.js`.

this project used MYSQL as database:
1- install MYSQL
2- install HeidiSQL to make tables
3- install postman to notice the inputs that should be send to backend and token given from backend.

<!--
# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Available Scripts
In the project directory, you can run:
### `yarn start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.
### `yarn test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
### `yarn build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
### `yarn eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**
If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.
You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
## Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).
### Code Splitting
This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
### Analyzing the Bundle Size
This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
### Making a Progressive Web App
This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
### Advanced Configuration
This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)
### Deployment
This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)
### `yarn build` fails to minify
This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->
