const { get_answer } = require("./utils");
// It was proposed by Christian Goldbach that every
// odd composite number can be written as the sum
// of a prime and twice a square.

// 9 = 7 + 2×12
// 15 = 7 + 2×22
// 21 = 3 + 2×32
// 25 = 7 + 2×32
// 27 = 19 + 2×22
// 33 = 31 + 2×12

// It turns out that the conjecture was false.

// What is the smallest odd composite that cannot be
// written as the sum of a prime and twice a square?

/**
 *
 * @returns the smallest odd composite that cannot be
 * written as the sum of a prime and twice a square
 */
function find_smallest_odd_composite() {
  let prev_primes = [2, 3, 5, 7];
  let last_prime = prev_primes[prev_primes.length - 1] + 2;
  next_prime: while (true) {
    for (let i = 0; i < prev_primes.length; i++) {
      if (last_prime % prev_primes[i] === 0) {
        //Odd composite number
        if (!is_odd_composite(last_prime, prev_primes)) {
          return last_prime;
        }
        last_prime += 2;
        continue next_prime;
      } else if (prev_primes[i] > last_prime / prev_primes[i]) {
        prev_primes.push(last_prime);
        last_prime += 2;
        continue next_prime;
      }
    }
  }
}

/**
 *
 * @param {number} n possible odd composite number
 * @param {number[]} primes prime numbers less than n
 * @returns  true if n is an odd composite number and can be written
 * as the sum of a prime and twice a square
 */
function is_odd_composite(n, primes) {
  for (let i = 0; i < primes.length; i++) {
    let exponent = Math.sqrt((n - primes[i]) / 2);
    if (exponent % 1 === 0) return true;
  }
  return false;
}

get_answer(find_smallest_odd_composite());
