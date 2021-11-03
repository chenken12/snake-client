// fileA.js

const num = 42;
const str = "hello";
const func = () => {
  // myFunction's code
  console.log("Hello");
};

module.exports = {
  myNumber: num, // stores 42 as myNumber
  myString: str, // stores "hello" as myString
  myFunction: func, // stores func (the function) as myFunction
};