const { test, get_answer } = require("./utils.js");

// 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

// What is the sum of the digits of the number 2^1000?

/**
 *
 * @param {String} num
 * @returns the sum of the digits of num.
 */
function get_sum_digits_of(num) {
  let sum = 0;
  for (let i = num.length - 1; i >= 0; i--) {
    sum += parseInt(num[i]);
  }
  return sum;
}
/**
 *
 * @param {number} exp exponent
 * @returns the sum of the digits of 2^exp.
 */
function sum_digits_of_2_to(exp) {
  let ans = "2";
  for (let i = 1; i < exp; i++) {
    ans = mult(ans, 2);
  }
  //   console.log(exp, "==>", ans);
  return get_sum_digits_of(ans);
}

/**
 *
 * @param {String} a String number
 * @param {number} b multiplier
 * @returns {String} a string represents a * b;
 */
function mult(a, b) {
  let prod = 0,
    prev_mult = 0,
    res = "";
  for (let i = a.length - 1; i >= 0; i--) {
    prod = parseInt(a[i]) * b + prev_mult;
    if (i !== 0) {
      res = (prod % 10) + res;
      prev_mult = Math.floor(prod / 10);
    } else {
      res = prod + res;
    }
  }
  return res;
}

test(sum_digits_of_2_to(15));

get_answer(sum_digits_of_2_to(1000));
