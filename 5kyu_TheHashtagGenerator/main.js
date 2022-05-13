/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/

function generateHashtag (str) {
  let arrayStr = [];
  if (str.length === 0){ 
    return false
  }else {
    arrayStr = str.split(" ").filter(Boolean);
  }
  if (arrayStr.length === 0){return false};
  
  for(i=0;i<arrayStr.length;i++){
  arrayStr[i] = arrayStr[i][0].toUpperCase()+arrayStr[i].slice(1);
  }

  let stringStr = "#" + arrayStr.join('');

  if (stringStr.length > 140) {return false}
  return stringStr
}

console.log(generateHashtag("   "))