const { get_answer } = require("./utils");
// The series,
// 1^2 + 2^2 + 3^3 + ... + 10^10 = 10405071317.

// Find the last ten digits of the series,
// 1^1 + 2^2 + 3^3 + ... + 1000^1000.

/**
 *
 * @param {string} a first summand
 * @param {string} b second summand
 * @returns string representation of a + b.
 */
function add(a, b) {
  let sum = "";
  let rest = 0;
  let num_digits = a.length > b.length ? a.length : b.length;
  for (let i = 0; i < num_digits; i++) {
    let digit_1 = a[a.length - i - 1];
    let digit_2 = b[b.length - i - 1];
    let current_sum =
      (digit_1 === undefined ? 0 : parseInt(digit_1)) +
      (digit_2 === undefined ? 0 : parseInt(digit_2)) +
      rest;
    rest = Math.floor(current_sum / 10);
    sum = `${current_sum % 10}` + sum;
  }

  return sum;
}

/**
 *
 * @param {String} a String number
 * @param {number} b multiplier
 * @returns {String} a string represents a * b;
 */
function mult(a, b, digit_limit) {
  let prod = 0,
    prev_mult = 0,
    res = "";
  if (a.length < digit_limit) digit_limit = 0;
  else digit_limit = a.length - digit_limit;

  for (let i = a.length - 1; i >= digit_limit; i--) {
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
 * @param {string} base string representation of the base
 * @param {number} exponent the exponent
 * @returns string representation of base^exponent
 */
function pow(base, exponent, digit_limit) {
  let res = "1";
  while (exponent > 0) {
    res = mult(res, base, digit_limit);
    exponent--;
  }

  return res;
}

function get_last_ten_digits() {
  ans = "0";
  for (let i = 1; i <= 1000; i++) {
    ans = add(ans, `${pow(`${i}`, i, 10)}`);
  }
  return ans.substring(ans.length - 10);
}

get_answer(get_last_ten_digits());
