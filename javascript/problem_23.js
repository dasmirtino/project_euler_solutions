const { test, get_answer } = require("./utils");

// A perfect number is a number for which the sum of its proper divisors
// is exactly equal to the number. For example, the sum of the proper
// divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28,
// which means that 28 is a perfect number.

// A number n is called deficient if the sum of its proper divisors is less
// than n and it is called abundant if this sum exceeds n.

// As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the
// smallest number that can be written as the sum of two abundant
// numbers is 24. By mathematical analysis, it can be shown that all
// integers greater than 28123 can be written as the sum of two abundant
// numbers. However, this upper limit cannot be reduced any further
// by analysis even though it is known that the greatest number that
// cannot be expressed as the sum of two abundant numbers is less
// than this limit.

// Find the sum of all the positive integers which cannot be written as
// the sum of two abundant numbers.

/**
 * Returns if num perfect, deficient or abundant.
 * @param {number} num number to evaluate
 */
function get_type(num) {
  sum_divs = get_sum_proper_divisors(num);
  if (sum_divs === num) return "perfect";
  else if (sum_divs < num) return "deficient";
  else return "abundant";
}

/**
 * Returns the sum of proper divisors of n.
 * @param {number} n
 */
function get_sum_proper_divisors(n) {
  let i = 1,
    limit = Math.sqrt(n),
    sum = 0;
  while (i <= limit) {
    if (n % i === 0) {
      sum += i;
      if (n / i !== i && i !== 1) sum += n / i;
    }
    i++;
  }
  return sum;
}

/**
 * Returns all the abundant numbers below 28123.
 */
function get_abundant_numbers() {
  let abundant_numbers = [];
  for (let i = 12; i < 28123; i++) {
    if (get_type(i) === "abundant") abundant_numbers.push(i);
  }
  return abundant_numbers;
}

/**
 * Returns all the deficient numbers below 28123.
 */
function get_deficient_numbers() {
  let deficient_numbers = [];
  for (let i = 2; i < 28123; i++) {
    if (get_type(i) === "deficient") deficient_numbers.push(i);
  }
  return deficient_numbers;
}

/**
 * Returns all the perfect numbers below 28123.
 */
function get_perfect_numbers() {
  let perfect_numbers = [];
  for (let i = 2; i < 28123; i++) {
    if (get_type(i) === "perfect") perfect_numbers.push(i);
  }
  return perfect_numbers;
}

/**
 * Returns the sum of all the positive integers which
 * cannot be written as the sum of two abundant numbers.
 */
function get_sum() {
  const max = 28123;
  let sum = 0,
    abundants = get_abundant_numbers();
  for (let i = 24; i <= max; i++) {
    let j = 0;
    let diff = i - abundants[j];
    while (diff >= 0) {
      if (get_type(diff) === "abundant") {
        sum += i;
        break;
      }
      j++;
      diff = i - abundants[j];
    }
  }
  return (max * (max + 1)) / 2 - sum;
}

test(get_type(28));
test(get_type(12));
test(get_type(24));

get_answer(get_sum());
