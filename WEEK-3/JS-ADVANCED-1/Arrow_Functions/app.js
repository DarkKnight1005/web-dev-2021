/* 
There’s another very simple and concise syntax for creating functions, 
that’s often better than Function Expressions.
It’s called “arrow functions”, because it looks like this:

let func = (arg1, arg2, ..., argN) => expression

This creates a function func that accepts arguments arg1..argN, then evaluates 
the expression on the right side with their use and returns its result.
In other words, it’s the shorter version of:

let func = function(arg1, arg2, ..., argN) {
  return expression;
};

*/

// Example-1 -----------------------------------------------------------------
let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:
let sum = function(a, b) {
  return a + b;
};
*/
console.log( sum(1, 2) ); // 3

// Example-2 -----------------------------------------------------------------
// Arrow functions can be used in the same way as Function Expressions.
let age = prompt("What is your age?", 18);

let welcome = (age < 18) 
  ? () => alert('Hello')
  : () => alert("Greetings!");

welcome();

// Example-3 -----------------------------------------------------------------
// Replace Function Expressions with arrow functions in the code below:

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);

// Solution:
let ask = (question, yes, no) => confirm(question) ? yes() : no();
ask(
  'Do you agree?',
  () => console.log('You agreed'),
  () => console.log('You interrupted execution'),
);