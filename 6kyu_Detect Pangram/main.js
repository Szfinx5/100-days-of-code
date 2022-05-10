function isPangram(string){
  //Declare the pangram string
  //let pangramArray = "abcdefghijklmnopqrstuvwxyz".split('');
  let pangramString = "abcdefghijklmnopqrstuvwxyz"

  console.log(pangramString);

  //Remove the space and dot characters and Convert the string to an array and sort it alphabetically
   //let givenArray = string.toLowerCase().replace(/\s/g, '').replace(/\./g,'').replace(/[0-9]/g, '').split('').sort();
   let givenArray = string.toLowerCase().replace(/[^a-zA-Z]/g,"").split('').sort();
 
  //prune the array and leave only unique elements and convert it to string
    let uniqueStrings = Array.from(new Set(givenArray));
    uniqueStrings = uniqueStrings.join('');
    console.log(uniqueStrings)

  


  //Compare the pruned array with the pangram array
  if (uniqueStrings === pangramString){
    return true;
  }else return false;
  
}

console.log(isPangram(`The qu22222222222222222ick brown fox jumps over the lazy dog.`));

