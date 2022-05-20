console.log("Working...");

/*
Once upon a time, on a way through the old wild mountainous west,…
… a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

How I crossed a mountainous desert the smart way.
The directions given to the man are, for example, the following (depending on the language):

["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
or
{ "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
or
[North, South, South, East, West, North, West]
You can immediatly see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

["WEST"]
or
{ "WEST" }
or
[West]
*/

/*
function dirReduc(arr){
  let xArray = [];
  let yArray = [];
  let xResult = 0;
  let yResult = 0;
  let returnArray = []

  xArray = arr.filter(direction => direction === "EAST" || direction === "WEST");
  yArray = arr.filter(direction => direction === "NORTH" || direction === "SOUTH");

  xArray = xArray.map(direction => {
    if (direction === 'EAST') {
      return -1;
    }
    return 1;
  });

  yArray = yArray.map(direction => {
    if (direction === 'NORTH') {
      return -1;
    }
    return 1;
  });

  for (i=0;i<xArray.length;i++){xResult = xResult + xArray[i]};
  for (i=0;i<yArray.length;i++){yResult = yResult + yArray[i]};

  if (xResult > 0){
    returnArray.push('WEST'.repeat(xResult))
  } else if (xResult < 0){
    returnArray.push('EAST'.repeat(Math.abs(xResult)))
    }

  if (yResult > 0){
    returnArray.push('SOUTH'.repeat(yResult))
  } else if (yResult < 0){
    returnArray.push('NORTH'.repeat(Math.abs(yResult)))
    }

  console.log(returnArray)
  return returnArray;
  //xResult = xResult === 1 ? 'WEST' : (xResult === -1 ? 'EAST' : '');
  //yResult = yResult === 1 ? 'SOUTH' : (xResult === -1 ? 'NORTH' : '');

  
 
}

dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST']);





/*
function dirReduc(arr){

  let north = 0;
  let south = 0;
  let west = 0;
  let east = 0;

  north = arr.filter(x => x === 'NORTH').length; 
  south = arr.filter(x => x === 'SOUTH').length; 
  west = arr.filter(x => x === 'WEST').length; 
  east = arr.filter(x => x === 'EAST').length; 



*/

function dirReduc(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      (arr[i] === "NORTH" && arr[i + 1] === "SOUTH") ||
      (arr[i] === "SOUTH" && arr[i + 1] === "NORTH") ||
      (arr[i] === "EAST" && arr[i + 1] === "WEST") ||
      (arr[i] === "WEST" && arr[i + 1] === "EAST")
    ) {
      i++;
    } else {
      if (
        (result[result.length - 1] === "NORTH" && arr[i] === "SOUTH") ||
        (result[result.length - 1] === "SOUTH" && arr[i] === "NORTH") ||
        (result[result.length - 1] === "EAST" && arr[i] === "WEST") ||
        (result[result.length - 1] === "WEST" && arr[i] === "EAST")
      ) {
        result.pop();
      } else {
        result.push(arr[i]);
      }
    }
  }
  return result;
}
