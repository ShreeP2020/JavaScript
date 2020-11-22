function hiThere () {
    console.log('Hi there');
}

hiThere(); // Hi there

function hiThereTwo() {
    return 'Hi there again';
}

console.log(hiThereTwo()); // "Hi there again"

var storedText = hiThere(); // Hi there

console.log('storedText', storedText); // undefined

var storedTextTwo = hiThereTwo();

console.log('storedTextTwo', storedTextTwo); // "Hi there again"