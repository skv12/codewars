// Kata
// Given an array of integers, find the one that appears an odd number of times.
//
// There will always be only one integer that appears an odd number of times.
//
// Examples
//  [7] should return 7, because it occurs 1 time (which is odd).
//  [0] should return 0, because it occurs 1 time (which is odd).
//  [1,1,2] should return 2, because it occurs 1 time (which is odd).
//  [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
//  [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
// url: https://www.codewars.com/kata/54da5a58ea159efa38000836/javascript

// Solution 1
// url: https://www.codewars.com/kata/reviews/56257b1427e918467e000174/groups/63771313caa5f8000145d06d
function findOdd(A) {
  var values = A.map((e) => {
    var count = 0;
    A.forEach((number) => {
      if (number == e) count++;
    });
    return count;
  });
  return A[values.findIndex((e) => e % 2 != 0)];
}

// Solution 2
// url: https://www.codewars.com/kata/reviews/56257b1427e918467e000174/groups/63771655f351af00012b9d7b
function findOdd(A) {
  var values = A.map((e) => {
    return A.filter((number) => number == e).length;
  });
  return A[values.findIndex((e) => e % 2 != 0)];
}

//Tests
console.log(findOdd([7])); //returns 7
console.log(findOdd([0])); //returns 0
console.log(findOdd([1, 1, 2])); //returns 2
console.log(findOdd([0, 1, 0, 1, 0])); //returns 0
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); //returns 4
