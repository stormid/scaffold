import * as CONSTANTS from '../../constants';
const constantise = str => str.split('-').join('_').toUpperCase();

export default component => fn => {
    const selector = CONSTANTS[constantise(component)].SELECTOR;
    const targetNode = typeof selector === String 
                            ? document.querySelector(selector)
                            : Object.keys(selector).reduce((acc, curr) => acc || (document.querySelector(selector[curr]) ? true : false), false);
    if(!targetNode) return;
    import(/* webpackChunkName: "[request]" */`../${component}`).then(module => module.default());
};