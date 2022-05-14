console.log("Working...")
/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str){
  pigItArray = str.split(' ');
  console.log(pigItArray)

  for(let i=0;i<pigItArray.length;i++){
    if (/^[A-Za-z]+$/.test(pigItArray[i])) {
      pigItArray[i] = `${pigItArray[i].substr(1)}${pigItArray[i].substr(0, 1)}ay`
    }
  } return pigItArray.join(' ');
} 
console.log(pigIt('Hello world !'));
