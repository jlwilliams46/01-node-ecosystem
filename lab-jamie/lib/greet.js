'use strict';

const greet = module.exports = {}; 

greet.hello = (str) => {
    // return null ? typeof str !== 'str' : undefined;
    if(typeof str !== 'string') return null;

    return `hello ${str}`;
}