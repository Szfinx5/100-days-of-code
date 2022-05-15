console.log("Working...");

/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

function humanReadable (seconds) {
  let second = seconds % 60;
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  minutes = minutes % 60;
 
  second = second < 10 ? '0' + second.toString() : second.toString();
  minutes = minutes < 10 ? '0' + minutes.toString() : minutes.toString();
  hours = hours < 10 ? '0' + hours.toString() : hours.toString();
  

  return `${hours}:${minutes}:${second}`;
}

console.log(humanReadable(359999))