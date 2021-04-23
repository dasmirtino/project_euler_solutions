const { tes, get_answer, test } = require("./utils");

// Starting with the number 1 and moving to the right in
// a clockwise direction a 5 by 5 spiral is formed as follows:

// 21 22 23 24 25
// 20  7  8  9 10
// 19  6  1  2 11
// 18  5  4  3 12
// 17 16 15 14 13

// It can be verified that the sum of the numbers on the
// diagonals is 101.

// What is the sum of the numbers on the diagonals in a
// 1001 by 1001 spiral formed in the same way?

function get_sum(num_spiral) {
  let sum = 0;
  for (let i = 1; i <= (num_spiral + 1) / 2; i++) {
    sum += 16 * i ** 2 - 28 * i + 16;
  }
  return sum - 3;
}

test(get_sum(5));

get_answer(get_sum(1001));
