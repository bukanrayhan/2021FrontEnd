// macam macam function
//      declare
//      anon/expression
//      arrow function

arr = [1, 2, 3, 4, 5, 5];

// declare
function myFunction() {
  console.log("hello declare function");
}
myFunction();

// expression
let myOtherFunction = function () {
  console.log("Hello expression function");
};
myOtherFunction();

// arrow function
let hello = () => console.log("Hello arrow function");
hello();

let y = arr.map((e) => {
  return e * 2;
});

console.log(y);
