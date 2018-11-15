export const h = (nodeName, attributes, ...args) => {  
    let children = args.length ? [].concat(...args) : null;
    return { nodeName, attributes, children };
};

export const doctype = html => `<!DOCTYPE html>${html}`;

export const ghost = (component, ghost, isGhost) => isGhost ? ghost : component; 