'use strict';

const greet = require('../lib/greet.js');
require('jest');

describe('Incorrect Input', () => {
    it('should return null if input was not a string', () => {
        expect(greet(3.14159265359).toBeNull());
    })
});

describe('Correct Output', () => {
    it('should take a string and concatenate it to the "hello"', () => {
        expect(greet.hello('awesomeness').toEqual('hello awesomeness'));
    })
});