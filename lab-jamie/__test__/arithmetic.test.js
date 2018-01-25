'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('Incorrect Input', () => {
    it('should return null if either input is not a number', () => {
        expect(arithmetic.add(42, 'phineas and ferb')).toBeNull();
    })
});

describe('Correct Output', () => {
    it('should return the sum of any two input numbers', () => {
        expect(arithmetic.add(101010, 42)).toEqual(101052);
    })
});
describe('Incorrect Input', () => {
    it('should return null if either input is not a number', () => {
        expect(arithmetic.sub(101010)).toBeNull();
    })
});

describe('Correct Output', () => {
    it('should return the difference of any two input numbers', () => {
        expect(arithmetic.sub(101010, 42)).toEqual(100968);
    })
});