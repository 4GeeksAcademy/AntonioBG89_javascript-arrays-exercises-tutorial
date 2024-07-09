let parkingState = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

// Your code here
let getParkingLotState = function(arr){
  let state = {totalSlots: 0, availableSlots: 0, occupiedSlots: 0};
  
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr[i].length; j++){
      state.totalSlots++;
      if (arr[i][j] === 1) state.occupiedSlots++;
      if (arr[i][j] === 2) state.availableSlots++; 
    }
  }

  
  return state;
}

console.log(getParkingLotState(parkingState))
