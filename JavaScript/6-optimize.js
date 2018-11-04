'use strict';

const view = (lens, obj) => lens.get(obj);
const set = (lens, val, obj) => lens.set(val, obj);
const over = (lens, map, obj) => lens.set(map(lens.get(obj)), obj);

const lens = (source, destination = source) => ({
  get: obj => obj[source],
  set: (val, obj) => ({ ...obj, [destination]: val })
});

// Usage

const person = {
  name: 'Marcus Aurelius',
  city: 'Rome',
  born: 121,
};

const nameLens = lens('name');

console.log('view name:', view(nameLens, person));

console.log('set name:', set(nameLens, 'Marcus', person));

const upper = s => s.toUpperCase();
console.log('over name:', over(nameLens, upper, person));
