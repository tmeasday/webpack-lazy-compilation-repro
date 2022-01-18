// HMR works
// import('./load');

// HMR fails
// import './load';

// HMR fails
// import(/* webpackMode: "eager" */ './load');

// module.hot.accept('./load', () => console.log('new load'));

import('./two-load');
module.hot.accept('./two-load', () => {
  console.log('new load');
  // import('./two-load');
});
