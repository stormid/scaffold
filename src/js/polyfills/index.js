require('es6-object-assign').polyfill();
// require('unfetch/polyfill');
import Promise from 'promise-polyfill';
window.Promise = window.Promise ? window.Promise : Promise;