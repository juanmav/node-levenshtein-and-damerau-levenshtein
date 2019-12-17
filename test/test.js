const test = require('tape');
const distance = require('../index');

test('Basic test', function (t) {
    let d = distance('hola', 'ohla');
    t.equal(d, 1);
    t.end();
});

test('Empty input', function (t) {
    let d = distance('', '');
    t.equal(d, 0);
    t.end();
});

test('Transposition test', function (t) {
    let d = distance('axe', 'aex');
    t.equal(d, 1);
    t.end();
});

test('Same string', function (t) {
    let d = distance('hola', 'hola');
    t.equal(d, 0);
    t.end();
});

test('Damerau–Levenshtein vs Levenshtein distance', function (t) {
    let d1 = distance('aex', 'axe');
    t.equal(d1, 1);

    let d2 = distance('aex', 'axe', false);
    t.equal(d2, 2);
    t.end();
});