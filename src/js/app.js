import { PATHS } from './constants';
import Toggle from './require/toggle';

const onInit = [
	() => {
		Toggle();
		console.log('Not my bag');
	}
];

{ onInit.map(fn => fn()); }