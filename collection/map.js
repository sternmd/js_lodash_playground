// Creates an array of values by running each element in collection thru iteratee.

// Many lodash methods are guarded to work as iteratees for methods like _.every, _.filter, _.map, _.mapValues, _.reject, and _.some.

function square(n) {
  return n * n;
}

_.map([4, 8], square);
// → [16, 64]

_.map({ 'a': 4, 'b': 8 }, square);
// → [16, 64] (iteration order is not guaranteed)

var users = [
  { 'user': 'barney' },
  { 'user': 'fred' }
];

// The `_.property` iteratee shorthand.
_.map(users, 'user');
// → ['barney', 'fred']
