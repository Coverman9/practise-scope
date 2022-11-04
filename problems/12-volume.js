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
const recVolume = (height) => {
  let dimensions = [height];
  const anything = (num) => {
    if (dimensions.length < 3) {
      dimensions.push(num);
    }
    if (dimensions.length === 3) {
      let product = 1;
      for (let i = 0; i < dimensions.length; i++) {
        product *= dimensions[i];
      }
      return product;
    } else {
      return anything;
    }
  }
  return anything;
}

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
