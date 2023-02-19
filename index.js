function reverseString(str) {
  return str.split("").reverse().join("")
}

function isPalindrome(word) {
  // write a function that takes a string  
  // reverse the string
  //make comparison between the original string and the reverse string
  //returns true if you can read the word the same backwords as forwards
  //esle returns false
let reversedWord = reverseString(word)
if(reversedWord === word) {
  return true
} else {
  return false
}
}
  
  


/* 
  I expect calling a name and return true if it's palindrome and false otherwise
*/

/*
  // I first made a helper function that reversed a string
  // The helper function took the word and split it in individual letters
  // Then it reverse that word
  // Then it join the letters back togeter
  // Then I assigned a variable to the reverse function and gave it the "word" parameter
  // Then I used an if statement to compare if the word is palindrome
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
