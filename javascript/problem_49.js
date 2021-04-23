const { get_answer } = require("./utils");

// The arithmetic sequence, 1487, 4817, 8147, in which
// each of the terms increases by 3330, is unusual in
// two ways: (i) each of the three terms are prime, and,
// (ii) each of the 4-digit numbers are permutations of
// one another.

// There are no arithmetic sequences made up of three
// 1-, 2-, or 3-digit primes, exhibiting this property,
// but there is one other 4-digit increasing sequence.

// What 12-digit number do you form by concatenating
// the three terms in this sequence?

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
 * @param {number} n integer number
 * @param {number} n1 integer number greater tha n
 * @returns true if n1 is a permutation of n.
 */
function is_permutable(n, n1) {
  let digits = `${n}`;
  while (n1 > 0) {
    let digit = n1 % 10;
    digits = digits.replace(digit, "");
    n1 = Math.floor(n1 / 10);
  }
  return digits.length === 0;
}

/**
 *
 * @returns 12-digit number formed by concatenating the three
 * terms in the sequence that follows:
 * (i) each of the three terms are prime
 * (ii) each of the 4-digit numbers are permutations of one another.
 */
function get_concatenated_sequence() {
  let ans = "";
  let primes = get_primes_below(10000);
  const numbers = primes.filter((prime) => prime >= 1000);

  for (let i = 0; i < numbers.length; i++) {
    let gap = 3330;
    let seq1 = 0;
    let seq2 = 0;
    while (seq2 < 10000) {
      seq1 = numbers[i] + gap;
      seq2 = numbers[i] + gap * 2;
      if (
        is_permutable(numbers[i], seq1) &&
        is_permutable(numbers[i], seq2) &&
        is_prime(seq1, primes) &&
        is_prime(seq2, primes) &&
        numbers[i] !== 1487
      ) {
        return "" + numbers[i] + seq1 + seq2;
      }
      gap++;
    }
  }
}

get_answer(get_concatenated_sequence());
