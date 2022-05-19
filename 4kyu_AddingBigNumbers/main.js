console.log("Working...");

/*
We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example
add("123", "321"); -> "444"
add("11", "99");   -> "110"
Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives
*/

function add(a, b) {
    
    let aLength = a.length;
    let bLength = b.length;
    let MaxLength = aLength;

    console.log(aLength)
    console.log(bLength)

    b = b.padStart(aLength-bLength, "0");
    /*
    if (aLength > bLength){
        MaxLength = aLength;
        b = b.padStart(aLength-bLength, "0");
    } else if(aLength < bLength){
        MaxLength = bLength;
        a = a.padStart(bLength-aLength, "0");
    } 
    */
    console.log(a)
    console.log(b)
    console.log(aLength-bLength)

   

  }

  add('2222', '44');
