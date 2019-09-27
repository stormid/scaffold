import * as CONSTANTS from '../../constants';
const constantise = str => str.split('-').join('_').toUpperCase();

export default component => fn => {
    const { SELECTOR } = CONSTANTS[constantise(component)];
    const targetNode = typeof SELECTOR === String 
                            ? document.querySelector(SELECTOR)
                            : Object.keys(SELECTOR).reduce((acc, curr) => acc || (document.querySelector(SELECTOR[curr]) ? true : false), false);
    if(!targetNode) return;
    else import(/* webpackChunkName: "[request]" */`../${component}`).then(module => module.default());
};