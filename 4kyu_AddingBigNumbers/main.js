function add(a, b) {
    
    let aLength = a.length;
    let bLength = b.length;
    let maxLength = aLength;
    let carryOver = 0;
    let result = 0;
    let sumNumbers = '';


    if (aLength > bLength){
        maxLength = aLength;
        b = b.padStart(aLength, "0");
    } else if(aLength < bLength){
        maxLength = bLength;
        a = a.padStart(bLength, "0");
    } 

    
    for(i=maxLength-1;i>=0;i--){
        result = Number(a[i]) + Number(b[i]) + carryOver;
        carryOver = result > 9 ? 1 : 0;
        result = result % 10;
        sumNumbers = sumNumbers + result.toString();
    }
  
    if (carryOver === 1){
        sumNumbers = sumNumbers + '1';
    }

    sumNumbers = sumNumbers.split("").reverse().join("");
    return sumNumbers
  }