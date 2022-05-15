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
  const angleOne = parseInt(document.getElementById("angle-one").value)
  const angleTwo = parseInt(document.getElementById("angle-two").value)
  const angleThree = parseInt(document.getElementById("angle-three").value)

  //process
  if (angleOne == angleTwo && angleTwo == angleThree) {
    document.getElementById("type-of-triangle").innerHTML =
      "The triangle is an equilatoral triangle because all three angles are equa l!"
  }
 else if (    
   angleOne == angleTwo) ||
   (angleOne == angleThree) ||
   (angleTwo == angleThree
 ) {
    document.getElementById("type-of-triangle").innerHTML =
  "The triangle is an isosceles triangle because two angles are equal !"
}
  else {
    document.getElementById("type-of-triangle").innerHTML =
  "The triangle is a scalene triangle becuase  no angles are equal !"
  }
}
