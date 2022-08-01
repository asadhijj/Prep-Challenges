"use strict";

// --------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  Required:
//
//  Write a function that takes an array and returns the maximum value in the provided array.
//  Without using build-in methods.
//
//  Input: [12, 32, 22, 45, 78, 12, 50]
//  Output: 78

const findMax = (arr) => {
  let max;
  max =arr[1];
  let i=0;
    while (i<=arr.length-1) {
      if (arr[i] >max){
        max =arr[i]
      }
      i++;
    }
 
  
  return max;
}
const myArr=[12, 32, 22, 45, 78, 12, 50];
findMax(myArr);
// --------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------
//  Challenge 02:
//  Required:
//
//  Write a function that takes an array and returns the sum of the numeric values.
//  Inside the array (there could be strings), without using built-in methods (You can use `typeof`)
//
//  Input: [20, '234', 'car', 41, 20, 'chair']
//  Output: 81
const sumNums = (arr) => {
  let sum;
  sum =0;
  let i =0;
 while (i<=arr.length-1){
    if (typeof arr[i]=='number' ){
      sum =sum + arr[i]
    }
    i++;
  }
  return sum;
}
const myArray =[20, '234', 'car', 41, 20, 'chair'];
sumNums(myArray);
// -------------------------------------------------------------------------------------------------------

module.exports = { findMax, sumNums };