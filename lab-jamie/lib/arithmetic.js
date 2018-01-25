'use strict';

const arithmetic = module.exports = {};

arithmetic.add = (fir, sec) => {
    if(typeof fir !== 'number' || typeof sec !== 'number') return null;
    return fir + sec;
};

arithmetic.sub = (fir, sec) => {
    if(typeof fir !== 'number' || typeof sec !== 'number') return null;
    return fir - sec;
};