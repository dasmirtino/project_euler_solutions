const { count } = require("console");
const { test, get_answer } = require("./utils");

// The number 3797 has an interesting property. Being prime itself,
// it is possible to continuously remove digits from left to right,
//  and remain prime at each stage: 3797, 797, 97, and 7. Similarly
//  we can work from right to left: 3797, 379, 37, and 3.

// Find the sum of the only eleven primes that are both truncatable
// from left to right and right to left.

// NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.

/**
 * Returns the next prime from the last element of prev_primes array.
 * @param {number[]} prev_primes
 */
function next_prime(prev_primes) {
  let last_prime = prev_primes[prev_primes.length - 1] + 1;
  next_num: while (true) {
    for (let i = 0; i < prev_primes.length; i++) {
      if (last_prime % prev_primes[i] === 0) {
        last_prime++;
        continue next_num;
      } else if (prev_primes[i] > last_prime / prev_primes[i]) {
        prev_primes.push(last_prime);
        break next_num;
      }
    }
  }
  return last_prime;
}

/**
 * Removes digits from right to left.
 * @param {number} num
 */
function shift_left(num) {
  if (num < 10) return num;
  return Math.floor(num / 10);
}

/**
 * Removes digits from left to right
 * @param {num} num
 */
function shift_right(num) {
  if (num < 10) return num;
  let num_cp = num,
    last_digit,
    count = -1;
  while (num_cp > 0) {
    last_digit = num_cp % 10;
    num_cp = Math.floor(num_cp / 10);
    count++;
  }
  return num - last_digit * 10 ** count;
}

/**
 * Find the sum of the only eleven primes that are both truncatable
 * from left to right and right to left.
 */
function find_sum_truncatable_primes() {
  let sum = 0,
    prev_ps = [2, 3, 5, 7],
    count = 0;
  next_prime: while (count < 11) {
    let curr_prime = next_prime(prev_ps),
      l_shift = curr_prime,
      r_shift = curr_prime;
    do {
      l_shift = shift_left(l_shift);
      r_shift = shift_right(r_shift);
      if (prev_ps.indexOf(r_shift) === -1 || prev_ps.indexOf(l_shift) === -1) {
        //l_shift or r_shift are not primes
        continue next_prime;
      }
    } while (l_shift >= 10 && r_shift >= 10);
    sum += curr_prime;
    count++;
  }
  return sum;
}

get_answer(find_sum_truncatable_primes());
