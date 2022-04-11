// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

function vowels(str) {
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for(let letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  return count;
}


function vowels(str) {
  let count = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for(let letter of str.toLowerCase()) {
    if (vowels.indexOf(letter) !== -1) {
      count++;
    }
  }
  return count;
}

module.exports = vowels;


// function vowels(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let count = 0;
//   for(let char of str) {
//     if(vowels.includes(char)) {
//       count++
//     }
//   }
//   return count;
// }