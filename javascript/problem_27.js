const { test, get_answer } = require("./utils");

// Euler discovered the remarkable quadratic formula:

//          n^2 + n + 41

// It turns out that the formula will produce 40 primes for
// the consecutive integer values 0 <= n <= 39. However, when
// is divisible by 41, and certainly when n = 41,
// 41^2 + 41 + 41 is clearly divisible by 41.

// The incredible formula n^2 + 79n + 1601 was discovered,
// which produces 80 primes for the consecutive values .
// The product of the coefficients, −79 and 1601, is −126479.

// Considering quadratics of the form:

// n^2 + an + b, where |a| < 1000 && |b| < 1000

// where |n| is the modulus/absolute value of
// e.g. |11| = 11 and |-4| = 4
// Find the product of the coefficients, a and b, for the quadratic
// expression that produces the maximum number of primes for
// consecutive values of n, starting with n = 0.

/**
 * Returns true if n is prime.
 * @param {number} n integer positive
 */
function is_prime(n) {
  if (n <= 1) return false;

  for (let i = 2; i <= n / 2; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

/**
 * Returns the value of n^2 + a * n + b
 * @param {number} n
 * @param {number} a coeficient a
 * @param {number} b coeficient b
 */
function get_quadratic_value(n, a, b) {
  return n ** 2 + a * n + b;
}

function find_prod_coefficients() {
  const max_coef_value = 1000;
  let res = { a: 0, b: 0, n: 0 };
  for (let a = -max_coef_value - 1; a < max_coef_value; a++) {
    for (let b = -max_coef_value - 1; b <= max_coef_value; b++) {
      let n = 0;
      while (is_prime(n * n + a * n + b)) n++;
      if (res.n < n) {
        res.n = n;
        res.a = a;
        res.b = b;
      }
    }
  }
  console.log(res);
  return res.a * res.b;
}

let count = 0;
while (is_prime(get_quadratic_value(count, 1, 41))) count++;
test(count);

count = 0;
while (is_prime(get_quadratic_value(count, -79, 1601))) count++;
test(count);

count = 0;
while (is_prime(get_quadratic_value(count, -1, 41))) count++;
test(count);

get_answer(find_prod_coefficients());
