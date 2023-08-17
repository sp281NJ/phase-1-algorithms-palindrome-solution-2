function isPalindrome(word) {
  // Write your algorithm here
// 1 - take the parameter and create an array of each letter. 
const string = word.split('');
const joinoriginal = word;

//2- write back the array in reverse
const reversstring = string.reverse();
const joinreverse = reversstring.join('');

//3- compare array 1 with reversed array 2 for equality.
//return(Boolean(joinoriginal==joinreverse));

// iterate from the beginning of the string to the middle of the string
for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
 // compare the letter we're iterating over to the corresponding letter at the end of the string 
 const endIndex = word.length - 1 - startIndex;
  if (word[startIndex] !== word[endIndex]) {
// if the letters don't match, return false
  return false;
    }
};
return true;
// if we reach the middle, and all the letters match, return true
};

/* 
  Add your pseudocode here
  Make the function return true if the first letter and last letter as same
  and second and second to last and third and third to last.
  return false if letters not matching
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
