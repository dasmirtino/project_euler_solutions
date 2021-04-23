const { test, get_answer } = require("./utils.js");

// The sum of the squares of the first ten natural numbers is 385,

// The square of the sum of the first ten natural numbers is 3025,

// Hence the difference between the sum of the squares of the first
// ten natural numbers and the square of the sum is .
//                                          3025 - 385 = 2640
// Find the difference between the sum of the squares of the first
// one hundred natural numbers and the square of the sum.

/**
 *
 * @param {number} start_num
 * @param {number} end_num
 * @returns {number} the difference between the sum of the squares from the start_num
 * to end_num and the square of the sum from the start_num to end_num.
 *
 */
function calc_diff(start_num, end_num) {
  let sum_sqrt = 0,
    sqrt_sum = 0;
  for (let i = start_num; i <= end_num; i++) {
    sum_sqrt += i * i;
    sqrt_sum += i;
  }
  return sqrt_sum ** 2 - sum_sqrt;
}

test(calc_diff(1, 10));

get_answer(calc_diff(1, 100));
