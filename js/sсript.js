// Copyright (c) 2022 Emmanuel Fofeyin All rights reserved
//
// Created by: Emmanuel.Fofeyin
// Created on: April 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-05-HTML/sw.js", {
    scope: "/ICS2O-Unit5-05-HTML/",
  })
}

/**
 * This function gets the users input and converts the value to celsius
 */
function convertClicked() {
  //input
  const lengthOne = parseInt(document.getElementById("length-one").value)
  const lengthTwo = parseInt(document.getElementById("length-two").value)
  const lengthThree = parseInt(document.getElementById("length-three").value)

  //process
  if (lengthOne == lengthTwo && lengthTwo == lengthThree) {
    document.getElementById("type-of-triangle").innerHTML =
      "The triangle is an equilateral triangle because all three angles are equal !"
  }
  else if ((lengthOne == lengthTwo) || (lengthOne == lengthThree) || (lengthTwo == lengthThree)){
     document.getElementById("type-of-triangle").innerHTML =
    "The triangle is an isosceles triangle because two angles are equal !"
  }
  else {
     document.getElementById("type-of-triangle").innerHTML =
    "The triangle is a scalene triangle because  no lengths are equal !"
  }
}