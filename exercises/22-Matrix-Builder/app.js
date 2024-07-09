// Your code here
let matrixBuilder = function(int){
    let arr = [];
    
    for (let i = 0; i < int; i++){
        let row = [];
        for (let j = 0; j < int; j++){
            row.push(Math.floor(Math.random()*2));
        }
        arr.push(row);
    }
    return arr;
}


// Do not change anything from this line down
console.log(matrixBuilder(5))
