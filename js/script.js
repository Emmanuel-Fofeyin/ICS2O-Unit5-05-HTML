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
