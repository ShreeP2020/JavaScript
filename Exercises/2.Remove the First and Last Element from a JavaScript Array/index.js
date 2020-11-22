const removeFirstAndLast = arr => {
    if(arr.length >= 3)
        return arr.slice(1, -1);
    else
        throw "You need atleast three elements in array";
};

console.log(removeFirstAndLast([1, 2, 3, 4, 5]));
console.log(removeFirstAndLast(['A', 'B', 'C', 'D']));
console.log(removeFirstAndLast([1, 2]));