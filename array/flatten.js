// Flattens array a single level deep.

_.flatten([1, [2, [3, [4]], 5]]);
// → [1, 2, [3, [4]], 5]

// Recursively flattens array.

_.flatten([1, [2, [3, [4]], 5]]);
// → [1, 2, 3, 4, 5]
