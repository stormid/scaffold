import Importer from './features/importer';
import Toggle from './features/toggle';

//This stack is executed in parallel
export const initStack = [
	Toggle,
	Importer(`tabs`)
	// 	() => { import(/* webpackChunkName: "toggle" */`./features/toggle`).then(module => module.default()); },
	// 	() => { import(/* webpackChunkName: "validate" */`@stormid/validate`).then(module => module.default.init(VALIDATE.SELECTOR)); },
	// Importer.bind(null, 'validate')(import(/* webpackChunkName: "validate" */`@stormid/validate`)),
];