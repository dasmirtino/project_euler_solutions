const { get_answer, test } = require("./utils");

// We shall say that an n-digit number is pandigital
// if it makes use of all the digits 1 to n exactly once.
// For example, 2143 is a 4-digit pandigital and is also prime.

// What is the largest n-digit pandigital prime that exists?

/**
 * Returns the next prime from the last element of prev_primes array.
 * @param {number[]} prev_primes
 */
function next_prime(prev_primes) {
  let last_prime = prev_primes[prev_primes.length - 1] + 1;
  // tag to stop the loop
  next_num: while (true) {
    // iterate over previous primes to check if the last_prime is prime
    for (let i = 0; i < prev_primes.length; i++) {
      // if last_prime is divisible by the current prime in array
      // continue with the next number
      if (last_prime % prev_primes[i] === 0) {
        last_prime++;
        continue next_num;

        // no reason to check all the primes in the list because there is no
        // divisors greater than (last_prime / prev_primes[i])
      } else if (prev_primes[i] > last_prime / prev_primes[i]) {
        // add the next prime in the array and return the last prime founded
        prev_primes.push(last_prime);
        break next_num;
      }
    }
  }
  return last_prime;
}

/**
 *
 * @param {number} number greater than zero
 * @param {string} digits n-digits to verify if is a n-digits pandigital
 * @returns true if number is a n-digits pandigital number.
 */
function is_pandigital(number, digits) {
  while (number > 0) {
    current_digit = number % 10;
    digits = digits.replace(current_digit, "");
    number = Math.floor(number / 10);
  }
  return digits.length == 0;
}

function get_largest_pandigital_prime() {
  // Array fpr previous primes calculated
  let primes = [2, 3, 5, 7];
  //  iterate over primes
  let current_prime = next_prime(primes);
  let largest_prime = current_prime;

  // current digits to verify if the current prime is n-digit pandigital
  let digits = "12";
  let current_num_digits = 2;

  // There is no numbers pandigitals and primes that has 8 digits
  while (current_num_digits < 8) {
    //If current_prime is n_digit pandigital update largest_prime
    if (is_pandigital(current_prime, digits)) {
      largest_prime = current_prime;
    }
    // if current_prime increments its digits number update
    // the current number of digits and adds the new digit
    // to digits
    if (current_prime > 10 ** current_num_digits) {
      current_num_digits++;
      digits += current_num_digits;
    }
    current_prime = next_prime(primes);
  }
  return largest_prime;
}

test(is_pandigital(2143, "1234"));

get_answer(get_largest_pandigital_prime());
