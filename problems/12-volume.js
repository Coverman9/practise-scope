/***********************************************************************
For this problem you will be writing a function capable of finding the volume
for a rectangle (height * width * length). In order to enter the
required measurements we'll need to measure them one at a time.

Write a function named `recVolume(height)`. The recVolume function will be passed
a height int and will return a function. The function returned by recVolume can
then be invoked two more times with a single argument number each time (one for
length and one for width). Once all three numbers (height, width, length) have
been collected return the volume of the rectangle. Any subsequent calls to the
function returned by recVolume should continue to return the original volume.


***********************************************************************/

// Your code here
let recVolume = (height) => {
  let arr = [];
  let sum = 1;
  arr.push(height);
  return function volume(width) {
    arr.push(width);
    console.log(arr);
    if (arr.length === 3) {
      for (let i = 0; i < arr.length; i++) {
        sum *= arr[i];
      }
    }
    // } else {
    //   return function volume(height) {
    //     arr.push(height);
    //   };
    // }

    // return function volume(length) {
    //   arr.push(length);
    //   let sum = 1;

    //   return sum;
    // };
    return sum;
  };
};

let table1 = recVolume(5);
table1(4);
console.log(table1(3)); //should be 60

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = recVolume;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
