// The prime 41, can be written as the sum of
// six consecutive primes:

const { count } = require("console");
const { get_answer } = require("./utils");

// 41 = 2 + 3 + 5 + 7 + 11 + 13

// This is the longest sum of consecutive primes
// that adds to a prime below one-hundred.

// The longest sum of consecutive primes below
// one-thousand that adds to a prime, contains
// 21 terms, and is equal to 953.

// Which prime, below one-million, can be written
// as the sum of the most consecutive primes?

/**
 *
 * @param {number} limit integer positive greater than 7
 * @returns array of primes below limit
 */
function get_primes_below(limit) {
  let prev_primes = [2, 3, 5, 7];
  let last_prime = prev_primes[prev_primes.length - 1] + 2;
  next_prime: while (last_prime <= limit) {
    for (let i = 0; i < prev_primes.length; i++) {
      if (last_prime % prev_primes[i] === 0) {
        last_prime += 2;
        continue next_prime;
      } else if (prev_primes[i] > last_prime / prev_primes[i]) {
        prev_primes.push(last_prime);
        last_prime += 2;
        continue next_prime;
      }
    }
  }
  return prev_primes;
}

/**
 *
 * @param {number} n positive integer
 * @param {number[]} prev_primes prime numbers array
 * @returns true if n is prime.
 */
function is_prime(n, prev_primes) {
  for (let i = 0; i < prev_primes.length; i++) {
    if (n % prev_primes[i] === 0) {
      return false;
    } else if (prev_primes[i] > n / prev_primes[i]) {
      return true;
    }
  }
}

/**
 *
 * @returns the prime that can be written as the sum of
 * the most consecutive primes below 1000000.
 */
function get_desire_number() {
  let primes = get_primes_below(1000000);

  let sum = 0;
  let possible_longest_chain_count = 0;
  for (let i = 0; i < primes.length; i++) {
    sum += primes[i];
    if (sum > 1000000) {
      break;
    }
    possible_longest_chain_count++;
  }

  next_chain_count: for (
    let chain_count = possible_longest_chain_count;
    chain_count > 0;
    chain_count--
  ) {
    for (let i = 0; i < primes.length; i++) {
      let possible_prime = 0;
      for (let j = 0; j < chain_count; j++) {
        possible_prime += primes[i + j];
        if (possible_prime > 1000000) continue next_chain_count;
      }
      if (is_prime(possible_prime, primes)) {
        return possible_prime;
      }
    }
  }
}

get_answer(get_desire_number());
