const { test, get_answer } = require("./utils.js");

// By listing the first six prime numbers:
// 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?

/**
 *
 * @param {number} index index of the nth prime number
 * @returns {number} the nth prime number.
 */
function get_prime_by_index(index) {
  let primes = [2],
    n = 3;
  if (n <= primes[primes.length - 1]) {
    return primes[primes.length - 1];
  } else {
    while (primes.length !== index) {
      let num_div = 0;
      for (let p = 0; p < primes.length; p++) {
        if (n % primes[p] === 0) num_div++;
        if (num_div > 0) break;
      }
      if (num_div === 0) {
        primes.push(n);
      }
      n++;
    }
  }
  return primes[index - 1];
}

test(get_prime_by_index(6));

get_answer(get_prime_by_index(10001));
