// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Ms Raffin
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates area and perimeter of triangle.
 */
function calculate () {
  // input
  let base = parseInt(document.getElementById('base-of-triangle').value);
  let hight = parseInt(document.getElementById('hight-of-triangle').value);

  // process
  let area = (base * hight) / 2;

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
}
