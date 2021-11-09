// setTimeout  - allows us to run a function once after the interval of time.
// setInterval - allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.

/*
let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...);
*/
function sayHi() {
  alert('Hello');
}
setTimeout(sayHi, 1000);

// using arrow functions
setTimeout(() => alert('Hello'), 1000);

//To stop further calls, we should call clearInterval(timerId)

//The following example will show the message every 2 seconds. After 5 seconds, the output is stopped:

// repeat with the interval of 2 seconds
let timerId = setInterval( () => alert('hello'), 2000);

// after 5 seconds stop
setTimeout( () => { clearInterval(timerId); alert('stop'); }, 5000);



/* TASK: Output every second
   Write a function printNumbers(from, to) that outputs a number every second, 
   starting with from and ending with to 
*/
function printNumbers(from, to) {
    let current = from;
  
    let timerId = setInterval(function() {
      console.log(current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
  } 
// usage:
printNumbers(5, 10);