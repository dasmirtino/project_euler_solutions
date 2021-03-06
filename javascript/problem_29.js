const { test, get_answer } = require("./utils");
const { RadixSortLsdUInt32 } = require("./test/sort_tests");

// Consider all integer combinations of a^b
// for 2 ≤ a ≤ 5 and 2 ≤ b ≤ 5:

// 2^2=4, 2^3=8, 2^4=16, 2^5=32
// 3^2=9, 3^3=27, 3^4=81, 3^5=243
// 4^2=16, 4^3=64, 4^4=256, 4^5=1024
// 5^2=25, 5^3=125, 5^4=625, 5^5=3125

// If they are then placed in numerical order,
// with any repeats removed, we get the following
// sequence of 15 distinct terms:

// 4, 8, 9, 16, 25, 27, 32, 64, 81, 125, 243, 256, 625, 1024, 3125

// How many distinct terms are in the sequence generated
// by a^b for 2 ≤ a ≤ 100 and 2 ≤ b ≤ 100?
//

/**
 * Returns the hash code of str.
 */
function hashCode(str) {
  var hash = 0,
    i,
    chr;
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

/**
 *
 * @param {String} a String number
 * @param {number} b multiplier
 * @returns {String} a string representation of a * b;
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
 * @param {number} a base
 * @param {number} b exponent
 * @returns Returns the String representation of a^b
 * generated by a^b for a ≤ base ≤ b and a ≤ exponent ≤ b?
 */
function pow(a, b) {
  let pow = `${a}`;
  for (let i = 1; i < b; i++) {
    pow = mult(pow, a);
  }
  return pow;
}

/**
 *
 * @param {number} start minor interval value
 * @param {number} end maxium interval value
 * @returns The number of distinct terms that are in the sequence.
 */
function get_sequence(start, end) {
  let terms = [];
  for (let a = start; a <= end; a++)
    for (let b = start; b <= end; b++) terms.push(hashCode(pow(a, b)));
  terms = RadixSortLsdUInt32(terms);

  let temp = [];
  for (let i = 0; i < terms.length; i++) {
    if (temp.indexOf(terms[i]) === -1) {
      temp.push(terms[i]);
    }
  }
  return temp.length;
}

test(get_sequence(2, 5));
get_answer(get_sequence(2, 100));
