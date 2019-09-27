import { VALIDATE } from './constants';
import Promise from 'promise-polyfill';
window.Promise = window.Promise ? window.Promise : Promise;
import Importer from './features/importer';
// It is not possible to use a fully dynamic import statement
// https://webpack.js.org/api/module-methods/#dynamic-expressions-in-import


// const onInit = [
// 	() => { import(/* webpackChunkName: "toggle" */`./features/toggle`).then(module => module.default()); },
// 	() => { import(/* webpackChunkName: "validate" */`@stormid/validate`).then(module => module.default.init(VALIDATE.SELECTOR)); },
// ];

const onInit = [
	Importer(`toggle`),	
	// Importer.bind(null, 'validate')(import(/* webpackChunkName: "validate" */`@stormid/validate`))
];


{
	if(!Object.assign) import(/* webpackChunkName: "polyfills" */`./polyfills`).then(() => onInit.map(f => f()));
	else onInit.map(f => f());
}