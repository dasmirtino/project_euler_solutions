const { test, get_answer } = require("./utils.js");

// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

/**
 *
 * @param {number} num
 * @returns the sum of all the primes below num.
 */
function calc_sum_below(num) {
  primes = [2, 3, 5, 7];
  let n = primes[primes.length - 1] + 1,
    sum = 17;

  next_n: while (n <= num) {
    for (let i = 0; i < primes.length; i++) {
      if (n % primes[i] === 0) {
        n++;
        continue next_n;
      } else if (primes[i] > Math.ceil(n / primes[i])) {
        primes.push(n);
        sum += n;
        n++;
        continue next_n;
      }
    }
  }

  return sum;
}

test(calc_sum_below(10));
get_answer(calc_sum_below(2000000));
