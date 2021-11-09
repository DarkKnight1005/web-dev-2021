// SCOPE IN JS

/*
The lexical scope of innerOfInnerOfFunc() consits of scopes of innerOfFunc(), 
func() and global scope (the outermost scope). Within innerOfInnerOfFunc() 
you can access the lexical scope variables myInnerVar, myVar and myGlobal.
*/

const myGlobal = 0;
function func() {
    const myVar = 1;
    console.log(myGlobal); // logs "0"
    function innerOfFunc() {
        const myInnerVar = 2;
        console.log(myVar, myGlobal); // logs "1 0"
        function innerOfInnerOfFunc() {
            console.log(myInnerVar, myVar, myGlobal); // logs "2 1 0"
        }
        innerOfInnerOfFunc();
    }
    innerOfFunc();
}
func();



// CLOSURES IN JS

// Let’s take a look again at the outerFunc() and innerFunc() example:
function outerFunc() {
  let outerVar = 'I am outside!';
  function innerFunc() {
    console.log(outerVar); // => logs "I am outside!"
  }
  innerFunc();
}
outerFunc();
/* Inside the innerFunc() scope, the variable outerVar is accessed from the 
   lexical scope. That’s known already.
   Let’s make a change: innerFunc() to be invoked outside of its lexical scope: 
   in a function exec(). Would innerFunc() still be able to access outerVar?
*/

// closure solution --------------------------------------------------------
// first function
function outerFunc() {
    let outerVar = 'I am outside!';
    // inside function to encapsulate variable
    function innerFunc() {
      console.log(outerVar); // => logs "I am outside!"
    }
    return innerFunc;
}
// second function, to call first functions local variable
function exec() {
    const myInnerFunc = outerFunc();
    myInnerFunc();
}
exec();


// closure example-2 ------------------------------------------------------

function outerFunc() {
    let outerVar = 'I am outside!';
    // inside function to encapsulate variable
    function innerFunc() {
      console.log(outerVar); // => logs "I am outside!"
    }
    return innerFunc;
}

const myInnerFunc = outerFunc();
myInnerFunc();



// closure example-3 : self executed function ------------------------------

const outer = (function outerFunc() {
    let outerVar = 'I am outside!';
    // inside function to encapsulate variable
    function innerFunc() {
      console.log(outerVar); // => logs "I am outside!"
    }
    return innerFunc;
})();

outer();


// closure example: Event Handler -------------------------------------------
// Task: Let’s display how many times a button is clicked:

let countClicked = 0;
myButton.addEventListener('click', function handleClick() {
    countClicked++;
    myText.innerText = `You clicked ${countClicked} times`;
});
/* When the button is clicked, handleClick() is executed somewhere inside of 
the DOM code. The execution happens far from the place of the definition.
But being a closure, handleClick() captures countClicked from the lexical 
scope and updates it when a click happens. Even more, myText is captured too.
*/


// closure example: A setTimeout() callback: --------------------------------

const message = 'Hello, World!';
setInterval(function callback() {
    console.log(message); // logs "Hello, World!"
}, 1000);
// The callback() is a closure because it captures the variable message.


// closure example: An iterator function for forEach():
// The iterator is a closure because it captures countEven variable.
let countEven = 0;
const items = [1, 5, 100, 10];
items.forEach(function iterator(number) {
  if (number % 2 === 0) {
    countEven++;
  }
});
countEven; // => 2