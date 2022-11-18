// Kata
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the
// name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
// url: https://www.codewars.com/kata/5264d2b162488dc400000001

// Solution
// url: https://www.codewars.com/kata/reviews/5264d41ce218b86cb90000df/groups/6376842bbd73a60001cf7a0b
function spinWords(string) {
  var str = string.split(" ");
  var stringReversed = [];
  str.forEach((e) => {
    if (e.length >= 5) 
        stringReversed.push(e.split("").reverse().join(""));
    else stringReversed.push(e);
  });
  return stringReversed.join(" ");
}

//Tests
console.log(spinWords("Hey fellow warriors")); //returns "Hey wollef sroirraw"
console.log(spinWords("This is a test")); //returns "This is a test"
console.log(spinWords("This is another test")); //returns "This is rehtona test"
