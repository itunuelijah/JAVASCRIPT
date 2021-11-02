function mergeArray(array) {


    var newArray = [];
    for (var i = 0; i < array.length; ++i) {
        if (newArray.indexOf(array[i]) === -1) {
            newArray.push(array[i]);
        }
    }

    return newArray;
}

var array1 = [2, 3, 1];
var array2 = [2, 9, 5, 3];

var array3 = mergeArray(array1.concat(array2));

console.log(array3)
array3.sort();
console.log(array3)