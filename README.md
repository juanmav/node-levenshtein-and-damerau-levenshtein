# node-levenshtein-and-damerau-levenshtein

Implementation of Damerau-Levenshtein edit distance algorithm with the option
to calculate only Levenshtein edit distance.

The implementation is based from pseudo code found in Wikipedia:

https://en.wikipedia.org/wiki/Damerau%E2%80%93Levenshtein_distance

## Install

```shell script
npm install node-levenshtein-and-damerau-levenshtein --save
```

(*) to be published.

## Interface
```javascript
/***
 * @param s1 original string
 * @param s2 comparison string
 * @param transposition default true, add transposition calculation to original
 * actions (deletion, insertion,substitution)
 * */
distance(string1, string2, trasposition)
```

## Usage

### Damerau-Levenshtein
```javascript
const distance = require('../index');

let d = distance('axe', 'aex');
console.log(d) // 1
```

### Levenshtein distance

```javascript
const distance = require('../index');

let d = distance('axe', 'aex', false);
console.log(d) // 2
```

## To run tests and/or fix something

```shell script
git clone https://github.com/juanmav/node-levenshtein-and-damerau-levenshtein
cd node-levenshtein-and-damerau-levenshtein
npm install
npm test
```