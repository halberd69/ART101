// index.js - Experimenting with Libraries and jQuery for the first time
// Author: Halei Fung
// Date: 5/13/2024


// add a challenge button
$("#challenge").append("<button id='button-challenge'> Press Me First!!</button>");

// add a click listener to the challenge button
$("#button-challenge").click(function(){
  $("#challenge").toggleClass("special");
});

// add a problems button
$("#problems").append("<button id = 'button-problems'> Press Me Next Please! </button>");
// add a click listener to the problems button
$("#button-problems").click(function(){
  $("#problems").toggleClass("special2");
});

// add a reflection button
$("#reflection").append("<button id = 'button-reflection'> Now Press ME! </button");
// add a click listener to the reflection button
$("#button-reflection").click(function (){
  $("#reflection").toggleClass("special3");
});

// add a results button
$("#results").append("<button id = 'button-results'> Press me if you want. </button");
// add a click listener to the reflection button
$("#button-results").click(function (){
  $("#results").toggleClass("special4");
});
