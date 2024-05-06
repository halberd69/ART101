// Lab 8: Anonymous Functions
// Author: Your Name
// Date:

// Constants

// Functions

//defining an array
let array = [3,12,4,8,9,23];
console.log(array)

//creating a multiplication function
function calculate(x){
    let ans = x * 2;
    return ans;
}

// using the elements in the array and passing it through the function by mapping it
let product = array.map(calculate);
// show product
console.log(product);
// console.log(product);


// print on site
var mapResults =
  "Original array: [" + array + "] </br>" +
  "Multiplied by 2: [" + array.map(calculate) + "] </br>" +
  "Multiplied by 10: [" + array.map(function(x){
  return (x*10);
}) + "]";

// Use jQuery to select the element by its ID and set the HTML content
$("#output").html(mapResults);

// print on site
// var mapResults =
//   "Original array: [" + array + "] </br>" +
//   "Multiplied by 2: [" + array.map(calculate) + "] </br>" +
//   "Multiplied by 10: [" + array.map(function(x){
//   return (x*10) + "]";
// })
