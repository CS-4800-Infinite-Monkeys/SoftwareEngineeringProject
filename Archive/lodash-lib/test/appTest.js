const assert = require('chai').assert;
const app = require('../app');

describe('App', function(){
    describe('firstInArray()', function(){
        it('firstInArray should return sky', function(){
            let res = app.firstInArray();
            assert.equal(res, 'sky');
        });
    });
    
    describe('lastInArray()', function(){
        it('lastInArray should return universe', function(){
            let res = app.lastInArray();
            assert.equal(res, 'universe');
        });
    });
    
});