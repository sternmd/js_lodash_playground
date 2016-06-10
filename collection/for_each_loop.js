// Iterate over elements of collection and invoke iteratee for each element. The iteratee is invoked with three arguments: (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.

_([1, 2]).forEach(function(value) {
  console.log(value);
});
// → Logs `1` then `2`.

_.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
  console.log(key);
});
// → Logs 'a' then 'b' (iteration order is not guaranteed).
