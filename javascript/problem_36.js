const { test, get_answer } = require("./utils");

// The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.

// Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

// (Please note that the palindromic number, in either base, may not include leading zeros.)

/**
 * Returns true if num is a palindrome number.
 * @param {number} num
 */
function is_palindrome(num) {
  let reverse_num = 0,
    num_cp = num;
  while (num_cp > 0) {
    reverse_num = reverse_num * 10 + (num_cp % 10);
    num_cp = Math.floor(num_cp / 10);
  }
  return reverse_num === num;
}

/**
 * Returns the binary representation of num.
 * @param {number} num
 */
function to_binary(num) {
  let binary = "";
  while (num >= 2) {
    binary = (num % 2) + binary;
    num = Math.floor(num / 2);
  }
  return (num % 2) + binary;
}

/**
 * Return true if binary is palindrome.
 * @param {String} binary
 */
function is_palindrome_bin(binary) {
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] !== binary[binary.length - 1 - i]) return false;
  }
  return true;
}

/**
 * Find the sum of all numbers, less than one million, which are
 * palindromic in base 10 and base 2.
 */
function find_sum() {
  let sum = 0;
  for (let i = 0; i < 1000000; i++)
    if (is_palindrome(i) && is_palindrome_bin(to_binary(i))) sum += i;
  return sum;
}

get_answer(find_sum());
