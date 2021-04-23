const { test, get_answer } = require("./utils");
// The first two consecutive numbers to have two
// distinct prime factors are:

// 14 = 2 × 7
// 15 = 3 × 5

// The first three consecutive numbers to have
// three distinct prime factors are:

// 644 = 2² × 7 × 23
// 645 = 3 × 5 × 43
// 646 = 2 × 17 × 19.

// Find the first four consecutive integers to have
// four distinct prime factors each. What is the
// first of these numbers?

/**
 *
 * @param {number} num_factors number of prime factors
 * @returns the first num_factors consecutive integers
 * that has num_factors distinct prime factors.
 */
function find_consecutive_with(num_factors) {
  let consecutives = [];
  let last_factor = 1;
  let prime_factors_count = 0;
  let prev_primes = [2, 3, 5, 7];
  let curr_number = prev_primes[prev_primes.length - 1];
  next_number: while (true) {
    curr_number++;
    for (let i = 0; i < prev_primes.length; i++) {
      if (curr_number % prev_primes[i] === 0) {
        let copy = curr_number;
        let index = 0;
        //count prime factor for curr_number
        while (index < prev_primes.length && copy !== 1) {
          if (copy % prev_primes[index] === 0) {
            copy /= prev_primes[index];
            if (last_factor !== prev_primes[index]) {
              prime_factors_count++;
              last_factor = prev_primes[index];
            }
          } else {
            index++;
          }
        }
        //add to the consecutive array
        if (
          consecutives.length < num_factors &&
          prime_factors_count === num_factors
        ) {
          consecutives.push(curr_number);
          if (consecutives.length == num_factors) return consecutives;
        } else {
          consecutives = [];
        }

        // Clear variables
        last_factor = 1;
        prime_factors_count = 0;
        last_number = curr_number;
        continue next_number;
      } else if (prev_primes[i] > curr_number / prev_primes[i]) {
        prev_primes.push(curr_number);
        consecutives = [];
        continue next_number;
      }
    }
  }
}

test(find_consecutive_with(2));
test(find_consecutive_with(3));
get_answer(find_consecutive_with(4));
