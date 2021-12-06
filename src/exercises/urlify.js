// https://www.geeksforgeeks.org/urlify-given-string-replace-spaces/

/* 
 
  Write a method to replace all the spaces in a string with ‘%20’.
  You may assume that the string has sufficient space at the end to 
  hold the additional characters and that you are given the “true” length of the string.
  
  */

function urlify(str, length) {
  const arr = str.split(" ");
  const newString = arr.map((word, idx) => {
    if (word && arr[idx + 1] !== "") {
      return word + "%20";
    } else if (word) {
      return word;
    }
  });
  return newString.join("");
}

function urlifyV2(str) {
  const trimedStr = str.trim();

  // replaceAll can also but only available with ES12

  return trimedStr.replace(/ /g, "%20");
}

const str = "Mr John Smith    ";
//EXPECTED TO BE 'Mr%20John%20Smith'

console.log(urlify(str, str.length));
console.log(urlifyV2(str));
