// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  for(i=1; i<=n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else  if (i % 5 === 0) {
      console.log('buzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else {
      console.log(i);
    }
  }
}

module.exports = fizzBuzz;






// function fizzbuzz(n) {
//   for(i = 1; i <= n; i++) {
//     let by3 = i % 3 === 0;
//     let by5 = i % 5 === 0
//     if(by3 && by5) {
//       console.log('fizzbuzz');
//     } else if (by3) {
//       console.log('fizz');
//     } else if (by5) {
//       console.log('buzz');
//     } else {
//       console.log(i);
//     }
//   }
// }






function fizzbuzz(n) {
  for(i = 1; i <= n; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if(i % 3 === 0) {
      console.log('fizz');
    } else if(i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}


























