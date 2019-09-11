import { PATHS } from './constants';
import Promise from 'promise-polyfill';
import Load from './require/load';
import Toggle from './require/toggle';

const onInit = [
	Toggle
];

{ 
	window.Promise = window.Promise ? window.Promise : Promise;
	if(!Object.assign) Load(`${PATHS.JS_ASYNC}/polyfills.js`) .then(() => onInit.map(f => f()));
	else onInit.map(f => f());
}