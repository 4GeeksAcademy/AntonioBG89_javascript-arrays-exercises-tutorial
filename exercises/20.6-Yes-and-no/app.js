let theBools = [0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

// Your code here
let newTheBools = theBools.map(function(item){
    if (item === 0) {return 'woko'} else {return 'wiki'};
})
console.log(newTheBools);