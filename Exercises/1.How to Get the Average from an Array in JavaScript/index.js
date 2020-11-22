
// Method 1: Using forEach loop
const arr = [1, 2, 3, 4, 20];

const getAverage = arr => {
    let total = 0;
    arr.forEach(element => {
       total += element
    });
    return (total/ (arr.length));
}

console.log('Using forEach loop: Average = ', getAverage(arr));

// Method 2 :Using Reduce Method

const getAverage2 = arr => {
    // sum the values from the array
    const sum = arr.reduce((accumulator, current) => accumulator + current);

    // get the length of array
    // divide the array sum by length
    return sum/arr.length;
} 

console.log('Using reduce method: Average = ', getAverage2(arr));