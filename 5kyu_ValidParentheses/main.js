console.log("Working...")
/*
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
*/

function validParentheses(parens) {
  arrayParentheses = parens.split('');
  console.log(arrayParentheses)
  let counter = 0;

    for(let i = 0;i<arrayParentheses.length;i++){
      if (arrayParentheses[i] === '('){counter++}
      else{counter--}
      if (counter < 0){return false}
    }
    let answer = (counter === 0) ?  true :  false;

  return answer;
}

console.log(validParentheses('()()'));