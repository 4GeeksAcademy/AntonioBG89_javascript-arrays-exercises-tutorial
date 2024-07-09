let chunkOne = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
let chunkTwo = [ 'Lucas', 'Jake', 'Scott', 'Amy', 'Molly', 'Hannah', 'Lucas' ];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = []
    // Your code here
    firstArray.forEach(element => {
        newArray.push(element);
    });
    secondArray.forEach(element => {
        newArray.push(element);
    })
    return newArray
} 

/* Easily
let newArray = [...chunkOne, ...chunkTwo];

console.log(newArray); */



console.log(mergeArrays(chunkOne, chunkTwo));
