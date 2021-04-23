const { test, get_answer } = require("./utils");

// The number, 197, is called a circular prime because all
// rotations of the digits: 197, 971, and 719, are themselves prime.

// There are thirteen such primes below 100:
// 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

// How many circular primes are there below one million?

/**
 * Returns an array that contains all primes below one million.
 */
function get_primes() {
  let prev_primes = [2, 3, 5, 7, 11],
    num = prev_primes[prev_primes.length - 1] + 1;
  next_num: while (num < 1000000) {
    for (let i = 0; i < prev_primes.length; i++) {
      if (num % prev_primes[i] === 0) {
        num++;
        continue next_num;
      } else if (prev_primes[i] > Math.ceil(num / prev_primes[i])) {
        prev_primes.push(num);
        num++;
        continue next_num;
      }
    }
    prev_primes.push(num);
    num++;
  }
  return prev_primes;
}

/**
 * Returns num with rotations of the digits.
 * @param {number} num
 */
function shift_number(num) {
  if (num % 10 === 0) return num / 10;
  return (num % 10) * 10 ** Math.floor(Math.log10(num)) + Math.floor(num / 10);
}

/**
 * Returns how many circular primes are there below one million
 */
function find_circular_primes() {
  let primes = get_primes(),
    circular_primes = [];
  next_prime: for (let i = 0; i < primes.length; i++) {
    if (circular_primes.indexOf(primes[i]) === -1) {
      let num = shift_number(primes[i]);
      while (num !== primes[i]) {
        if (primes.indexOf(num) === -1) continue next_prime;
        num = shift_number(num);
      }
      if (num === primes[i]) circular_primes.push(primes[i]);
    }
  }
  return circular_primes.length;
}

get_answer(find_circular_primes());
