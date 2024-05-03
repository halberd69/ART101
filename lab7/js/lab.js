// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function sortUserName() {
  const userName = window.prompt("Hi, please tell me your name so I can fix it.");
  // let nameArray = userName.split('');
  // //sort the array
  // let nameArraySort = nameArray.sort();
  // //join array back to a string
  // let nameSorted = nameArraySort.join('');
  return userName.split('').sort().join('');
}

//output
document.writeln ("I've fixed your name!: ",
  sortUserName(), "</br>")