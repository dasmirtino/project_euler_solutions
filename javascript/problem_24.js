const { test, get_answer } = require("./utils");

// A permutation is an ordered arrangement of objects. For example,
// 3124 is one possible permutation of the digits 1, 2, 3 and 4.
// If all of the permutations are listed numerically or alphabetically,
// we call it lexicographic order. The lexicographic permutations of
// 0, 1 and 2 are:

//            012   021   102   120   201   210

// What is the millionth lexicographic permutation of the digits
// 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?

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
    // console.log({ current_fact: current_fact, next_fact: next_fact });
  }
  indexes.reverse();
  indexes.push(index % 2);
  indexes.push(0);

  let digits = "0123456789",
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

test(get_permutation_by_index(5, 3));

get_answer(get_permutation_by_index(999999, 10));
