const { test, get_answer } = require("./utils");

// n! means n × (n − 1) × ... × 3 × 2 × 1

// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10!
// is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

// Find the sum of the digits in the number 100!

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
/**
 *
 * @param {number} num
 * @param {number[]} prev_fact previous factorials array
 * @returns {number} the string representation of the factorial of num
 */
function str_factorial(num, prev_factorials) {
  if (num === 0) return 1;
  if (prev_fact[num - 1] !== undefined) return prev_fact[num - 1];
  
  let fact_str = prev_fact[prev_fact.length - 1];
  for (let i = prev_fact.length + 1; i <= num; i++) {
    fact_str = mult(fact_str, i);
    prev_fact.push(fact_str);
  }
  return fact_str;
}

let prev_fact = ["1"];

test(get_sum_digits_of(str_factorial(10, prev_fact)));

get_answer(get_sum_digits_of(str_factorial(100, prev_fact)));
