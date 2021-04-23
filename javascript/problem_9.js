const { test, get_answer } = require("./utils.js");
// A Pythagorean triplet is a set of three natural numbers,
// a < b < c, for which,
//                  a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

/**
 *
 * @param {number} sum
 * @returns the product of Pythagorean triplet that sums sum.
 */
function get_prod(sum) {
  let min = Math.floor((sum + 3) / 6);

  for (let c = min; c < sum + 3; c++) {
    for (let b = 0; b < c; b++) {
      for (let a = 0; a < b; a++) {
        if (a + b + c === sum && a ** 2 + b ** 2 === c ** 2) return a * b * c;
      }
    }
  }
}

test(get_prod(12));

get_answer(get_prod(1000));
