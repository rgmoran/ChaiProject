const chai = require('chai');

var assert = chai.assert;
//expect
const expect = chai.expect;

//error examples
let a = 4, b = 4;
expect(a).to.be.equals(b);

expect(a).to.equal(4);

//a.should.equal(4);

assert.typeOf(a, 'number');

assert.equal(b, 4);


