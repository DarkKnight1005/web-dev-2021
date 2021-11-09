// FUNFCTIONAL PROGRAMMING
// https://www.telerik.com/blogs/functional-programming-javascript

// impure function, here we updated global variable
/* There is a notion in Functional Programming called side-effects. 
A side-effect is when a function not only returns a value but also 
goes off and changes something on the side. When a function runs, 
it could change something while it’s running. You have to avoid side 
effects as much as possible. Sometimes you need side effects.
*/
// EXAMPLE-1
// PURE FUNCTION
const pureAdd = (num1, num2) => {
  return num1 + num2;
};
//always returns same result given same inputs
pureAdd(5, 5);
//10
pureAdd(5, 5);
//10

// IMPURE FUNCTION
let plsMutateMe = 0;
const impureAdd = (num) => {
  return (plsMutateMe += num);
};
//returns different result given same inputs
impureAdd(5);
//5
impureAdd(5);
//10
console.log(plsMutateMe)
//10. I'm now double digit


// EXAMPLE-2
// Here a counter object is made with the help of the constructor function.
// Both nested functions are created within the same outer Lexical Environment, 
// so they share access to the same count variable:

function Counter() { //constructor function
    let count = 0;
  
    this.up = function() {
      return ++count;
    };
  
    this.down = function() {
      return --count;
    };
  }
  
  let counter = new Counter(); // declaring new object
  
  console.log( counter.up() ); // 1
  console.log( counter.up() ); // 2
  console.log( counter.down() ); // 1
