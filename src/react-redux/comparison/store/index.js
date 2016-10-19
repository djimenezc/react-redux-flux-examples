// import storeProd from './store'
// import storeDevHtml from './configureStoreDevTools'
// import storeDev from './configureStore'

let store;

console.log(`process.env.NODE_ENV=${process.env.NODE_ENV}`);

if (process.env.NODE_ENV === 'production') {
  store = require('./store');
} else {
  store = require('./configureStoreDevTools');
  // store = require('./configureStore');
}

export default store;
