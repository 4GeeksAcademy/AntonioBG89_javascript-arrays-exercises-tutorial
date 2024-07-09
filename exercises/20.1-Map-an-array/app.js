let arrayOfCelsiusValues = [-2, 34, 56, -10];

let arrayOfFahrenheitValues = arrayOfCelsiusValues.map(function(value) {
	
	// Add your code here and return the new value
	return ((value*9/5)+32);
});

console.log(arrayOfFahrenheitValues);

/*
// Grados Fahrenheit = (grados centígrados × 9/5) +32.
console.log(arrayOfFahrenheitValues);

// Dado un arreglo de horas militares
let militaryHours = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];

// Primero define una función que recibe militaryHours y devuelve su equivalente en hora civil
let militaryToCivilian = function(hour) {
    if(hour == 12) return hour + "pm";
    else if(hour == 24) return hour-12 + "am";
    else if(hour > 11) return hour-12 + "pm";
    else return hour + "am";
}

// Puedes crear un nuevo array en horas civiles mapeando el arreglo original pero pasando la función militaryToCivilian a la función map
let civilianHours = militaryHours.map(militaryToCivilian);

console.log(civilianHours);
*/