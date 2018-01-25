'use strict';

const greet = module.exports = {}; 

greet.hello = (str) => {
    if(typeof str !== 'string') return null;

    return `hello ${str}`;
}