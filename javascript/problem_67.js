const { test, get_answer } = require("./utils");
const { triangle } = require("./problem_67_extras");

// By starting at the top of the triangle below and moving to
// adjacent numbers on the row below, the maximum total from top to bottom is 23.

// 3
// 7 4
// 2 4 6
// 8 5 9 3

// That is, 3 + 7 + 4 + 9 = 23.

// Find the maximum total from top to bottom in triangle.txt
//  (right click and 'Save Link/Target As...'), a 15K text file
//  containing a triangle with one-hundred rows.

// NOTE: This is a much more difficult version of Problem 18. It is
// not possible to try every route to solve this problem, as there
// are 2^99 altogether! If you could check one trillion (10^12) routes
// every second it would take over twenty billion years to check them all.
// There is an efficient algorithm to solve it. ;o)

const test_array = [[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]];

/**
 *
 * @param {number[][]} num_array
 * @returns the max sum over the num_array
 */
function get_max_sum(num_array) {
  let i, j;
  for (i = num_array.length - 2; i >= 0; i--) {
    for (j = 0; j < num_array[i].length; j++) {
      num_array[i][j] = reduce(i, j, num_array);
    }
  }
  return num_array[0][0];
}

/**
 *
 * @param {number} i row position
 * @param {number} j column position
 * @param {number[]} numb_array array to iterate
 * @returns the max sum of pos i, j
 */
function reduce(i, j, num_array) {
  return num_array[i + 1][j] > num_array[i + 1][j + 1]
    ? num_array[i + 1][j] + num_array[i][j]
    : num_array[i + 1][j + 1] + num_array[i][j];
}

test(get_max_sum(test_array));

get_answer(get_max_sum(triangle));
