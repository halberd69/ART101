// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions


// click listener for button
$("#submit").click(function(){
  // get value of input field
const userName = $("#user-name").val();
});

function sortString(inputString) {
  
  // We have to convert our string to an array and back again to sort it
  return inputString.split('').sort().join('');
}

// now let's sort it
userNameSorted = sortString(userName);


// append a new div to our output div
$("#output").append('<div class="text"><p>' + userNameSorted + '</p></div>');