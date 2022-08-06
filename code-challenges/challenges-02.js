"use strict";
// -------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  Required:
//
//  Write a function that takes an array and returns the reversed array.
//  Without using built-in methods.
//  Input: ['C#', 'JS', 'Ruby','Python']
//  Output: ['Python','Ruby','JS','C#']

const reverseArray = (arr) => {
  // write your code here
  let reversedArr = [];
  let i = 0 ;
  while (arr.length > reversedArr.length){
    reversedArr.unshift(arr[i]);
    i++;
  }
  return reversedArr;
};
const myArr=['C#', 'JS', 'Ruby','Python'];
console.log(reverseArray(myArr));

// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------

//  Challenge 2:
// Required:

//  Write a function that takes an array of numbers and increases its values by 10
//
//  Input: [20, 54, 89, 41]
//  Output: [30, 64, 99, 51]

const arrInc = (arr) => {
  const result = [];
  // write your code here
  for (let i = 0; i < arr.length; i++){
    let arrSum = arr[i] + 10;
    result.push(arrSum);
  }
  return result;
};
const mySum=[20, 54, 89, 41];
console.log(arrInc(mySum));

// -------------------------------------------------------------------------------------------------------

module.exports = { reverseArray, arrInc };
