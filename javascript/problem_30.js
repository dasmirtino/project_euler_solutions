const { test, get_answer } = require("./utils");

// Surprisingly there are only three numbers that can be
// written as the sum of fourth powers of their digits:

// 1634 = 1^4 + 6^4 + 3^4 + 4^4
// 8208 = 8^4 + 2^4 + 0^4 + 8^4
// 9474 = 9^4 + 4^4 + 7^4 + 4^4
// As 1 = 1^4 is not a sum it is not included.

// The sum of these numbers is 1634 + 8208 + 9474 = 19316.

// Find the sum of all the numbers that can be written as
// the sum of fifth powers of their digits.

function is_desire_num(num, exponent) {
  let sum = 0,
    n = num;
  while (n > 0) {
    sum += (n % 10) ** exponent;
    n = Math.floor(n / 10);
  }
  // return [sum === num, sum, num, sum > num, sum - num];
  return sum === num;
}

/**
 * Finds the sum of all the numbers that can be written as
 * the sum of exponents powers of their digits.
 * @param {number} exponent
 */
function find_sum(exponent) {
  let sum = 0;
  for (let i = 10 ** (exponent + 1); i > 2; i--) {
    if (is_desire_num(i, exponent)) sum += i;
  }
  return sum;
}

test(find_sum(4));

get_answer(find_sum(5));
