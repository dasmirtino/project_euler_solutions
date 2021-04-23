const { test, get_answer } = require("./utils");

// 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

// Find the sum of all numbers which are equal to the sum of the
// factorial of their digits.

// Note: As 1! = 1 and 2! = 2 are not sums they are not included.

/**
 * Returns num!
 * @param {number} num
 * @param {number[]} prev_fact previous factorials
 */
function factorial(num, prev_fact) {
  if (prev_fact.length > num) return prev_fact[num];
  let fact = prev_fact[prev_fact.length - 1];
  for (let i = prev_fact.length; i <= num; i++) {
    prev_fact[i] = prev_fact[i - 1] * i;
  }
  return prev_fact[num];
}

/**
 * Returns sum of the factorial of num digits.
 * @param {number} num
 */
function get_sum_of_fact_digits(num, prev_fact) {
  let sum = 0;
  while (num > 0) {
    sum += factorial(num % 10, prev_fact);
    num = Math.floor(num / 10);
  }
  return sum;
}

/**
 * Finds the sum of all numbers which are equal to the sum of
 * the factorial of their digits.
 */
function find_sum_all_curious_nums() {
  let num = 3,
    prev_fact = [1, 1, 2],
    res = 0;
  while (num <= 99999) {
    let sum = get_sum_of_fact_digits(num, prev_fact);
    if (sum === num) res += num;
    // if (num > sum) break;
    num++;
  }
  return res;
}

test(get_sum_of_fact_digits(145, [1, 1, 2]));
get_answer(find_sum_all_curious_nums());
