// By replacing the 1st digit of the 2-digit number *3,
// it turns out that six of the nine possible values:

// 13, 23, 43, 53, 73, and 83, are all prime.

// By replacing the 3rd and 4th digits of 56**3 with the
// same digit, this 5-digit number is the first example
// having seven primes among the ten generated numbers,
// yielding the family:

// 56003, 56113, 56333, 56443, 56663, 56773, and 56993.

// Consequently 56003, being the first member of this
// family, is the smallest prime with this property.

// Find the smallest prime which, by replacing part of
// the number (not necessarily adjacent digits) with the
// same digit, is part of an eight prime value family.

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
