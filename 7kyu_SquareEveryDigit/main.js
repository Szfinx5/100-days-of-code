console.log("Working");

function squareDigits(num){
  let numberToArray = [];
  let squareArray = [];
  let squareNumber = 0;

  if(num === 0){return 0};
  
  while (num > 0) {
    numberToArray.push(num % 10);
    num = Math.trunc(num / 10);
  }
  numberToArray.reverse();
  console.log(numberToArray);

  for (i=0;i<numberToArray.length;i++){
    squareArray[i] = (numberToArray[i] **2).toString();
    squareNumber = squareNumber + squareArray[i];
    
  }
  squareNumber = Number(squareNumber.substring(1));
  console.log(squareArray);
  console.log(squareNumber);
  return squareNumber;
}

console.log(squareDigits(335674))