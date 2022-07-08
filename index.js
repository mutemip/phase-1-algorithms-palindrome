function isPalindrome(test) {

  let newTest = test;
  let reverseTest = newTest.split("").reverse().join("");
  return (newTest === reverseTest) ? true:false;
    // for (let i = 0; i < test.length / 2; i++) {
    //   const j = test.length - 1 - i;
    //   if (test[i] !== test[j]) return false;
    // }
    // return true;
}

/* 
  Add your pseudocode here
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

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;


