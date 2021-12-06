/*
  Given a string, write a function to check if it is a permutation of a palin­drome.
*/

function canBePalindrome(s) {
  const sanitized = s.toLowerCase();
  const values = {};
  let totalOdd = 0;

  for (let i = 0; i < s.length; i++) {
    const char = sanitized[i];
    if (!values[char]) {
      values[char] = 1;
    } else {
      values[char] += 1;
    }
  }

  // Can be improved by using for loop
  // if totalOdd > 1 break and return false
  Object.keys(values).forEach((key) => {
    if (values[key] % 2 !== 0) {
      totalOdd++;
    }
  });

  return totalOdd <= 1;
}

console.log(canBePalindrome("aabbb")); // True
console.log(canBePalindrome("aabbaa")); // True
console.log(canBePalindrome("AAAbbb")); // False
console.log(canBePalindrome("AAAbbbCCC")); // False

//Thoughts:
/*  Can change implementation instead in for loop
    Instead of adding values[char] += 1, we can remove the key
      a- If the same key comes again we store it again
    Finally we count how many keys does the value object has 
    return Object.keys(values).length <= 1
    Probably better.
**/
