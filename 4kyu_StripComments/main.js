console.log("Working...");

/*
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
*/

function solution(input, markers) {
  
let solutionArray = input.split('\n');
console.log(solutionArray)
for (let i=0; i<markers.length; i++){
    console.log(i)
    solutionArray = solutionArray.map(function(tempReplace){
        let index = tempReplace.indexOf(markers[i]);
        if (index !== -1){
            //console.log(index)
            return tempReplace.substring(0, index)
        }else {
            return tempReplace.replace(/\s*$/,'');
        }
        });
    } 
return solutionArray.join('\n').trim();

};
console.log(solution("apples, plums % and bananas\npears\noranges !applesauce",  ["%", "!"]))