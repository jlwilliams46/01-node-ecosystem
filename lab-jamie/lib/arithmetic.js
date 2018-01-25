'use strict';

const arithmetic = module.exports = {};

arithmetic.add = (fir, sec) => {
    // return null ? typeof fir !== 'number' || typeof sec !== 'number' : undefined;
    // return fir + sec ? typeof fir === 'number' || typeof sec === 'number' : undefined;
    if(typeof fir !== 'number' || typeof sec !== 'number') return null;
    return fir + sec;
};

arithmetic.sub = (fir, sec) => {
    // return null ? typeof fir !== 'number' || typeof sec !== 'number' : undefined;
    // return fir - sec ? typeof fir === 'number' || typeof sec === 'number' : undefined;
    if(typeof fir !== 'number' || typeof sec !== 'number') return null;
    return fir - sec;
};