console.log("Working...");

/*
Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

12 ==> 21
513 ==> 531
2017 ==> 2071
nextBigger(num: 12)   // returns 21
nextBigger(num: 513)  // returns 531
nextBigger(num: 2017) // returns 2071
If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

9 ==> -1
111 ==> -1
531 ==> -1
nextBigger(num: 9)   // returns nil
nextBigger(num: 111) // returns nil
nextBigger(num: 531) // returns nil
*/

function nextBigger(n){
    let numberArray = n.toString().split('');

    let pivot = -1;
    for (let i = numberArray.length-1; i > 0; i--) {
      if (+numberArray[i] > +numberArray[i-1]) {
        pivot = i-1;
        break;
      }
    }
  
    if (pivot == -1) return pivot;
  
    let right = numberArray.splice(pivot);
  
    let pv = right.splice(0, 1)[0];

    let mm = null, mmi = null;
    for (let i = 0; i < right.length; i++) {
      if (right[i] > pv) {
        if (mm == null || right[i] < mm) {
          mm = right[i];
          mmi = i;
        }
      }
    }
  
    if (mmi == null) return -1;
  
    right.splice(mmi, 1);
    right.push(pv);
    right = right.sort();

    let ret = +numberArray.concat([mm]).concat(right).join('');
    if (ret < n) return -1;
  
    return ret;
  }


nextBigger(2017)


