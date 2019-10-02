import Promise from 'promise-polyfill';
window.Promise = window.Promise ? window.Promise : Promise;
import { initStack } from '../../';

{
	if(!Object.assign) import(/* webpackChunkName: "polyfills" */`../../polyfills`).then(() => Promise.all(initStack.map(fn => Promise.resolve(fn()))));
	// else initStack.map(f => f());
	else Promise.all(initStack.map(fn => Promise.resolve(fn())));
}
