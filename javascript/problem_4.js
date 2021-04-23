const { test, get_answer } = require("./utils.js");

// A palindromic number reads the same both ways. The largest palindrome
// made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

/**
 *
 * @param {number} num
 * @returns {boolean} true if num is a palindrome number, false otherwise.
 */
function is_palindrome(num) {
  digits = [];
  while (num > 0) {
    if (num < 10) {
      digits.push(num);
      break;
    }
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }
  last_digit_index = digits.length - 1;
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] !== digits[last_digit_index]) return false;
    last_digit_index--;
  }
  return true;
}
/**
 *
 * @param {number} num_digits
 * @returns {number} Finds the largest palindrome made from
 * the product of two numbers with length of num_digits.
 */
function get_largest_palindrome(num_digits) {
  let max = 0;
  for (let i = 10 ** num_digits - 1; i > 0; i--) {
    let pal = 0;
    for (let j = 10 ** num_digits - 1; j > 0; j--) {
      if (j < 10 ** (num_digits - 1)) break;
      pal = i * j;
      if (is_palindrome(pal) && max < pal) {
        max = pal;
        break;
      }
    }
  }
  return max;
}

test(get_largest_palindrome(2));
get_answer(get_largest_palindrome(3));
