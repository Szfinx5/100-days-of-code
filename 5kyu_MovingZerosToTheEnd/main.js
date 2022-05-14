console.log("Working...");

/*
Write an algorithm that takes an array and moves all of the zeros to the end, 
preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

function moveZeros(arr) {
  newArray = [];
  countZeros = 0;
  console.log(arr.length)
  for (let i=0;i<arr.length;i++){
    if (arr[i] === 0){
      countZeros++
    } else{
      newArray.push(arr[i])
    }
  }console.log(countZeros)

  for (let i=0;i<countZeros;i++){
    newArray.push(0);
  }
  return newArray;
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));