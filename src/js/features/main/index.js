import Promise from 'promise-polyfill';
window.Promise = window.Promise ? window.Promise : Promise;
import { initStack } from '../../';
const promisify = fn => fn.then ? fn() : Promise.resolve(fn());
{
	if(!Object.assign) import(/* webpackChunkName: "polyfills" */`../../polyfills`).then(() => Promise.all(initStack.map(promisify)));
	// else initStack.map(f => f());
	else Promise.all(initStack.map(promisify));
}
