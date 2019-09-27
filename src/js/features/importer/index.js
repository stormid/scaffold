import * as CONSTANTS from '../../constants';
const constantise = str => str.split('-').join('_').toUpperCase();

export default component => fn => {
    const { SELECTOR, MODULE = false } = CONSTANTS[constantise(component)];
    const targetNode = typeof SELECTOR === 'string' 
                            ? document.querySelector(SELECTOR)
                            : Object.keys(SELECTOR).reduce((acc, curr) => acc || (document.querySelector(SELECTOR[curr]) ? true : false), false);
    if(!targetNode) return;
    if(MODULE) fn.then(module => module.default.init(SELECTOR));
    else import(/* webpackChunkName: "[request]" */`../${component}`).then(module => module.default());
};