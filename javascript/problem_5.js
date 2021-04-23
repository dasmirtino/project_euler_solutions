const { test, get_answer } = require("./utils.js");

// 2520 is the smallest number that can be divided by each
// of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly
// divisible by all of the numbers from 1 to 20?

/**
 *
 * @param {number} start_num start number
 * @param {number} end_num end number
 * @returns {number} smallest positive number that is evenly
 * divisible by all of the numbers from start_num to end_num.
 */
function is_divisible_through(start_num, end_num) {
  let stop = true,
    num = 0;
  while (stop) {
    num++;
    for (let i = start_num; i <= end_num; i++) {
      if ((stop = num % i)) break;
    }
  }
  return num;
}

test(is_divisible_through(1, 10));

get_answer(is_divisible_through(1, 20));
