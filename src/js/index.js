import Importer from './features/importer';
import Tabs from './features/tabs';
// It is not possible to use a fully dynamic import statement
// https://webpack.js.org/api/module-methods/#dynamic-expressions-in-import

export const initStack = [
	Tabs,
	Importer(`toggle`)
	// 	() => { import(/* webpackChunkName: "toggle" */`./features/toggle`).then(module => module.default()); },
	// 	() => { import(/* webpackChunkName: "validate" */`@stormid/validate`).then(module => module.default.init(VALIDATE.SELECTOR)); },
	// Importer.bind(null, 'validate')(import(/* webpackChunkName: "validate" */`@stormid/validate`)),
];
