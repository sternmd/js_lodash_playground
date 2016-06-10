// Naive method: Remove an array of keys from object
Object.prototype.remove = function(arr) {
    var that = this;
    arr.forEach(function(key){
        delete(that[key]);
    });
};

var objA = {"name": "colin", "car": "suzuki", "age": 17};

objA.remove(['car', 'age']);
objA; // {"name": "colin"}

// Lodash
objA = _.omit(objA, ['car', 'age']); // {"name": "colin"}


// Other instances

var objA = {"name": "colin", "car": "suzuki", "age": 17};

// Lodash
objA = _.omit(objA, 'car'); // {"name": "colin", "age": 17};
objA = _.omit(objA, _.isNumber); // {"name": "colin"};
