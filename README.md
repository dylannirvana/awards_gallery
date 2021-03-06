# Gallery Application

This application houses the special photography for Award Show attendees made available after the event. It is like a template that can be retrofitted to take the content and style of each Award Show in particular. 

The Gallery Application uses a popular presentation style used by Pinterest and Google Photos called Masonry https://masonry.desandro.com/. It employs a justified grid algorithm discussed here https://medium.com/google-design/google-photos-45b714dfbed1, and is a handsome way to present photographs these days. In other words, it is a _user affordance_. 

Photos are presented in collections. And can be individually viewed in a Lightbox. When viewed in Lightbox, photos can be scrolled left or right via a Carousel. They can be saved and shared as expected of images on any typical website. 

## Features
- Good UX meets expectations of modern photo gallery like Pinterest, Google 
- Uses Masonry justified grid
- Simple to use and maintain by mid-level Developer
- Matches style and logo of current Award Show
- Has (zoom) Lightbox and 
- Scrollable Carousel
- Has very few dependencies
- Options include set by row or column, and draggable
- Users can save and share via native OS methods

## Assumptions
Mid-level development skills. Basic JavaScript ES6, Node, SASS, Linux. Familiarity with a code editor and Terminal. 

This app requires code to run. It does not have a GUI. But that's ok 'cause we are Developers and it's not terribly hard.

- The code lives here: https://github.com/dylannirvana/awards_gallery
- The runtime is here: https://awards-gallery.herokuapp.com/ 

The application can be attached to BMI dot com or stand-alone.

## Usage
The Gallery Application parses JSON from the Strapi CMS (specific to an Award Show), and renders the handsome gallery you see here in the runtime. 

NOTE: The logo URL and `background` must be copied from the particular Award Show. 

In order to run the localhost, `cd` to the root directory, and type `yarn start`. This will run nodemon and will reload the server on each save. It will run on `localhost:3000`. (If converted to an Express application in order to use the Web API, it will then run on port 5000).

In order to run the parser, you must have access to the Strapi JSON file with the selected images from the Award Show. File prep is done in the node directory. The application is rendered in the src folder. 

1. Copy the JSON to node/source.json
2. In node/parser.js make sure that `data` variable is targeting the data set you want on line 5
3. Send that data to the selected collections photo.js in src on line 16
4. `cd` to the node directory. 
5. The command to run the code is: `node parser.js`

This will populate a file in the src with the JavaScript Object Notation the application needs to perform its magic.

## Options
One can set the Gallery to present photographs along either columns or rows. It is currently set to rows. There is also an option to make the images _draggable_. A justification for using this feature is it makes the collections more _interactive_. This can be valuable for interest retention for **retargeting**.

- Rows or columns
- Draggable

## Requirements
In order for it to run, photos must have a url, title, width, and height. Users can use native browser or operating system methods to view in Lightbox, save, and share.

## Deployment
The app can be attached as a 

## Roadmap 
- Use SASS app to simply import variables.scss to skin application
- Write multiple targeting statements in parser.js as promises, requiring only one run command
- Creating an Express wrapper to run a Fetch API for the JSON https://expressjs.com/
- Carry over SASS descriptions from SASS project

## Dependencies
Not many dependencies. All are handled through npm and visible in the package.json file. 
- Create React App https://create-react-app.dev/
- React Photo Gallery http://neptunian.github.io/react-photo-gallery/
- React Bootstrap https://react-bootstrap.github.io/ 
- Sass https://www.npmjs.com/package/sass 

Because the app is running on the Heroku runtime, it fires the build commands so you don't have to. However, your own runtime may be different.

***

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). See below for details about using Create React App (which is the wrapper of this app) for deployment purposes.

## Create React App 
Available Scripts. In the project directory, you can run:

### `npm start` or `yarn start` etc.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

