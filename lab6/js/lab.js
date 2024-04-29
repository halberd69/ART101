// LAB 6 ARRAYS
// Author: Halei Fung
// Date: 4/28/24

// Constants

// Functions
// defining an array for myTransport
myTransport = ["walk", "bus", "bike"];

// creating objects for my main ride
let myMainRide = {
  make: "Toyota",
  model: "Camry",
  color: "Blue",
  year: 2021,
  age: function () {
      return 2024 - this.year;
  }
}

//Printing
document.writeln ("Transportation I Use: " + myTransport + "</br>")
document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");