// Lab 7: Working with Functions
// Author: Halei Fung
// Date: 5/2/2024


// Functions
// takes a username and sorts it in alphabeticala order
function sortUserName() {
  const userName = window.prompt("Hi, please tell me your name so I can fix it.");
  // convert the string into an array
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