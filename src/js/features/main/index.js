import { VALIDATE } from '../../constants';
import Promise from 'promise-polyfill';
window.Promise = window.Promise ? window.Promise : Promise;
import { initStack } from '../../';

{
	if(!Object.assign) import(/* webpackChunkName: "polyfills" */`../../polyfills`).then(() => initStack.map(f => f()));
	else initStack.map(f => f());
}