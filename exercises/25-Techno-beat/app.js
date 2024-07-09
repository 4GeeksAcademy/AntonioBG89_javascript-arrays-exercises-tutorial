// Your code here
let lyricsGenerator = function (arr) {
    let str = "";
    let contador = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) { str += 'Boom '; contador = 0; }
        else if (arr[i] === 1) {
            str += 'Drop the bass '; contador++; if (contador === 3) {
                str += '!!!Break the bass!!! ';
                contador = 0;
            }
        }

    }
    return str.trim();
}

// Don't change anything below this line
console.log(lyricsGenerator([0, 0, 1, 1, 0, 0, 0]))
console.log(lyricsGenerator([0, 0, 1, 1, 1, 0, 0, 0]))
console.log(lyricsGenerator([0, 0, 0]))
console.log(lyricsGenerator([1, 0, 1]))
console.log(lyricsGenerator([1, 1, 1]))
