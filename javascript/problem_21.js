const { test, get_answer } = require("./utils");

// Let d(n) be defined as the sum of proper divisors
// of n (numbers less than n which divide evenly into n).
// If d(a) = b and d(b) = a, where a ≠ b, then a and b
// are an amicable pair and each of a and b are called amicable numbers.

// For example, the proper divisors of 220 are
//  1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110;
// therefore d(220) = 284.
// The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

// Evaluate the sum of all the amicable numbers under 10000.

/**
 *
 * @param {number} n
 * @returns the sum of proper divisors of n
 */
function d(n) {
  let i = 1,
    limit = Math.sqrt(n),
    divs = [];
  while (i <= limit) {
    if (n % i === 0) {
      divs.push(i);
      if (n / i !== i && i !== 1) divs.push(n / i);
    }
    i++;
  }

  let sum = 0;
  for (let i = 0; i < divs.length; i++) {
    sum += divs[i];
  }
  return sum;
}

function get_sum_amicable_nums_below(num) {
  let sum = 0;
  for (let i = 3; i < num; i++) {
    let b = d(i);
    if (d(b) === i && b !== i) sum += i;
  }
  return sum;
}

test(d(220));

get_answer(get_sum_amicable_nums_below(10000));
