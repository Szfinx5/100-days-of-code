/*
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/

function rgb(r, g, b){

  r = r<0 ? 0 : (r>255 ? 255 : r);
  g = g<0 ? 0 : (g>255 ? 255 : g);
  b = b<0 ? 0 : (b>255 ? 255 : b);


  let rHex = r < 16 ?  '0'+r.toString(16) : r.toString(16);
  let gHex = g < 16 ?  '0'+g.toString(16) : g.toString(16);
  let bHex = b < 16 ?  '0'+b.toString(16) : b.toString(16);

return (rHex.toUpperCase() + gHex.toUpperCase() + bHex).toUpperCase();
}

console.log(rgb(300,-4,16));