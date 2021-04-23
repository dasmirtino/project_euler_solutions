const { get_answer } = require("./utils");

// The number, 1406357289, is a 0 to 9 pandigital
// number because it is made up of each of the
// digits 0 to 9 in some order, but it also has
// a rather interesting sub-string divisibility property.

// Let d1 be the 1st digit, d2 be the 2nd digit, and so on.
// In this way, we note the following:

// d2d3d4=406 is divisible by 2
// d3d4d5=063 is divisible by 3
// d4d5d6=635 is divisible by 5
// d5d6d7=357 is divisible by 7
// d6d7d8=572 is divisible by 11
// d7d8d9=728 is divisible by 13
// d8d9d10=289 is divisible by 17

// Find the sum of all 0 to 9 pandigital numbers with this property.

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

function get_sum() {
  let sum = 0;
  let divisors = [2, 3, 5, 7, 11, 13, 17];

  //Skip all pandigitals that starts with 0
  next_pandigital: for (let i = 362880; i < /*10!*/ 3628800; i++) {
    let pandigital = get_permutation_by_index(i, 10);
    for (let j = 1; j < 8; j++) {
      //Getting the substring for divibility test
      let sub_number = pandigital.substr(j, 3);
      if (parseInt(sub_number) % divisors[j - 1] != 0) continue next_pandigital;
    }
    sum += parseInt(pandigital);
  }
  return sum;
}

get_answer(get_sum());
