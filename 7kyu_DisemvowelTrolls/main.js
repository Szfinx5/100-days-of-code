function disemvowel(str) {
  let newStr = "";
  for(i=0;i<str.length;i++){
    if (!/[aeiouAEIOU]/.test(str[i])){
      newStr = newStr + str[i];
    }
  }
  
  return newStr;
}

console.log(disemvowel("This website is for losers LOL!"))