// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

console.log("This is working");

function solution(str, ending){
    
    if(ending.length === 0){
        return true;
    }
    let slicedStr = str.slice(-ending.length);
    if(slicedStr === ending){
        return true;
    }else return false;
}






  
  console.log(solution("abc", ""));