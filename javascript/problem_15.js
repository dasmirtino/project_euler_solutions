const { test, get_answer } = require("./utils.js");

// Starting in the top left corner of a 2×2 grid, and only being
// able to move to the right and down, there are exactly 6 routes
// to the bottom right corner.

// How many such routes are there through a 20×20 grid?

/**
 *
 * @param {number} num
 * @param {number[]} prev_fact previous factorials array
 * @returns {number} the factorial of num
 */
function factorial(num, prev_fact) {
  if (num === 0) return 1;
  if (prev_fact[num - 1] !== undefined) return prev_fact[num - 1];
  let fact = prev_fact[prev_fact.length - 1];
  for (let i = prev_fact.length + 1; i <= num; i++) {
    fact *= i;
    prev_fact.push(fact);
  }
  return fact;
}

/**
 *
 * @param {number} n represent n in a nxn  grid
 * @param {number[]} prev_fact previous factorials array
 * @returns {number} the number of routes there are through a nxn grid
 */
function get_num_routes(n, prev_fact) {
  return (
    factorial(n * 2, prev_fact) /
    (factorial(n, prev_fact) * factorial(n * 2 - n, prev_fact))
  );
}

let prev_fact = [1];
test(get_num_routes(2, prev_fact));

get_answer(get_num_routes(20, prev_fact));
