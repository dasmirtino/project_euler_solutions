const { test, get_answer } = require("./utils.js");

// PROBLEM 3
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

/**
 *
 * @param {number} start_num
 * @param {number[]} primes previous primes array
 * @returns {number} next prime number close to start_number
 */
function next_prime(start_num, primes) {
  let n = start_num + 1;
  if (n <= primes[primes.length - 1]) {
    return primes[primes.length - 1];
  } else {
    while (true) {
      let num_div = 0;
      for (let p = 0; p < primes.length; p++) {
        if (n % primes[p] === 0) num_div++;
        if (num_div > 0) break;
      }
      if (num_div === 0) {
        primes.push(n);
        return n;
      }
      n++;
    }
  }
}
/**
 *
 * @param {number} num
 * @returns {number} the largest prime factor of num.
 */
function get_max_prime_factor(num) {
  let prime_factor = 2;
  let remainder = 0;
  primes = [2];
  do {
    remainder = num % prime_factor;
    if (!remainder) {
      // remainder === 0
      num = Math.floor(num / prime_factor);
    } else {
      prime_factor = next_prime(prime_factor, primes);
      ramainder = 0;
    }
  } while (num >= prime_factor);
  return prime_factor;
}

test(get_max_prime_factor(13195));
get_answer(get_max_prime_factor(600851475143));
