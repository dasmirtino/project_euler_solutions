const { get_answer } = require("./utils");

// We shall say that an n-digit number is pandigital if it makes use of
// all the digits 1 to n exactly once; for example, the 5-digit number,
// 15234, is 1 through 5 pandigital.

// The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing
// multiplicand, multiplier, and product is 1 through 9 pandigital.

// Find the sum of all products whose multiplicand/multiplier/product identity
// can be written as a 1 through 9 pandigital.

// HINT: Some products can be obtained in more than one way so be sure to
// only include it once in your sum.

/**
 * Returns the lexicographic permutation in nth position.
 * @param {number} index nth position in the lexicographic permutation.
 * Starts from 0.
 * @param {number} num_digits number of digits of lexicographic permutations.
 */
function get_permutation_by_index(index, num_digits) {
  let indexes = [],
    current_fact = 1,
    next_fact = 6;
  for (let i = 2; i < num_digits; i++) {
    current_fact *= i;
    indexes.push(Math.floor((index % next_fact) / current_fact));
    next_fact *= i + 2;
  }
  indexes.reverse();
  indexes.push(index % 2);
  indexes.push(0);

  let digits = "123456789",
    res = "";
  for (let i = 0; i < indexes.length; i++) {
    res += digits[indexes[i]];
    let remaining_dig = "";
    for (let j = 0; j < digits.length; j++) {
      if (indexes[i] !== j) {
        remaining_dig += digits[j];
      }
    }
    digits = remaining_dig;
  }
  return res;
}

/**
 * Finds the sum of all products whose multiplicand/multiplier/product identity
 * can be written as a 1 through 9 pandigital.
 */
function find_desire_sum() {
  products = new Set();
  const MAX_ITER = 362880;
  for (let i = 0; i < MAX_ITER; i++) {
    let num = get_permutation_by_index(i, 9);
    if (
      parseInt(num.slice(0, 2)) * parseInt(num.slice(2, 5)) ===
        parseInt(num.slice(5)) ||
      parseInt(num.slice(0, 3)) * parseInt(num.slice(3, 5)) ===
        parseInt(num.slice(5)) ||
      parseInt(num.slice(0, 1)) * parseInt(num.slice(1, 5)) ===
        parseInt(num.slice(5)) ||
      parseInt(num.slice(0, 4)) * parseInt(num.slice(4, 5)) ===
        parseInt(num.slice(5))
    )
      products.add(parseInt(num.slice(5)));
  }
  sum = 0;
  products.forEach((element) => {
    sum += element;
  });
  return sum;
}

get_answer(find_desire_sum());
