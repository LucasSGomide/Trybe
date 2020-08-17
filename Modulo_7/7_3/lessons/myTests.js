// Testando

const assert = require('assert');
const divFunction = (a, b) => (a / b)

const expected = divFunction(4, 2);

assert.equal(expected, 2, 'Received != 2')
assert.equal(divFunction(11, 2), 6, 'Received != 6')