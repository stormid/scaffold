import '@stormid/outliner';
import { initStack } from '../..';
const promisify = fn => fn.then ? fn() : Promise.resolve(fn());
Promise.all(initStack.map(promisify));