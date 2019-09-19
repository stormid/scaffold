import Promise from 'promise-polyfill';
import Import from './require/importer';

const onInit = [
	Import('toggle')
];

{
	window.Promise = window.Promise ? window.Promise : Promise;
	if(!Object.assign) import(/* webpackChunkName: "polyfills" */`./polyfills`).then(() => onInit.map(f => f()));
	else onInit.map(f => f());
}