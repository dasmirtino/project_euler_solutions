const { test, get_answer } = require("./utils.js");

//PROBLEM 1
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

/**
 * Finds the sum of all the multiples of 3 or 5 below num.
 * @param {number} num
 * @returns {number} The sum of all the multiples of 3 or 5 below num.
 */
function get_sum(num) {
  let sum = 0;
  for (let n = 1; n < num; n++) {
    if (n % 3 === 0 || n % 5 === 0) sum += n;
  }
  return sum;
}

test(get_sum(10));
get_answer(get_sum(1000));
