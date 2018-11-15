import { PATHS } from './constants';
import Toggle from './require/toggle';

const onInit = [
	Toggle
];

{ onInit.map(fn => fn()); }