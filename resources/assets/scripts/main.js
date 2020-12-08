// Polyfills if needed
// require('intersection-observer');

// import external dependencies
import './util/polyfills'
import 'jquery';
import 'bootstrap';

// Import everything from autoload
import './autoload/**/*'

import Dropzone from 'dropzone';

// import local dependencies
import Router from './util/Router';
import common from './routes/common';
import Detection from './util/Detection';
import home from './routes/home';
import shop from './routes/shop';
import profile from './routes/profile';
import early from './routes/early';
import settings from './routes/settings';
import groups from './routes/groups';
import store from './routes/store';

window._detector = new Detection({
 detect: ['ie11'],
});
window._detector.init();

// /** Populate Router instance with DOM routes */
const routes = new Router({
  // All pages
  common,
  'home': home,
  'shop': shop,
  'early': early,
  'settings': settings,
  'profile': profile,
  'groups': groups,
  'store': store,
});

// // Load Events
Dropzone.autoDiscover = false;
jQuery(document).ready(() => routes.loadEvents());
