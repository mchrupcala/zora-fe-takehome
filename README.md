# Michael Chrupcala's submission for Zora FE Takehome Test

Deployed via Netlify - access the site here:
URL: https://zora-fe-takehome.netlify.app/

Some notes on the project:

- /pages/Homepage.jsx is the base layout that holds PhotoGrid, SearchBar, and reusable Photo component files.
- fetch requests to Unsplash live in /api/photos.js
- all environment variables (REACT_APP_UNSPLASH_ACCESS_KEY) stored in either local .env files or Netlify env vars for security.

Also feel free to clone this repo and run this create-react-app project like so:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
