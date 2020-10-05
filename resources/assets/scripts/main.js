// Polyfills if needed
// require('intersection-observer');

// import external dependencies
import './util/polyfills'
import 'jquery';

// Import everything from autoload
import './autoload/**/*'

// import local dependencies
import Router from './util/Router';
import common from './routes/common';
import Detection from './util/Detection';

window._detector = new Detection({
 detect: ['ie11'],
});
window._detector.init();

// /** Populate Router instance with DOM routes */
const routes = new Router({
  // All pages
  common,
});

// // Load Events
jQuery(document).ready(() => routes.loadEvents());
