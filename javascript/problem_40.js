const { get_answer } = require("./utils");

// An irrational decimal fraction is created by
// concatenating the positive integers:

// 0.123456789101112131415161718192021...

// It can be seen that the 12th digit of the
// fractional part is 1.

// If dn represents the nth digit of the fractional,
// find the value of the following expression.

// d1 × d10 × d100 × d1000 × d10000 × d100000 × d1000000

/**
 *
 * @param {number} n digit of the fractional
 * @returns the nth digit of the fractional created by
 * concatenating the positive integers
 */
function d_n(n) {
  let num_digits = 0;
  let x1 = 0;
  let y1 = 0;
  let limit = 0;
  for (let i = 0; i < 10; i++) {
    x1 = limit;
    limit += 9 * 10 ** (i - 1) * i;
    if (n <= limit) {
      x1++;
      num_digits = i;
      break;
    }
  }
  y1 = 10 ** (num_digits - 1);
  let y = (n - x1) / num_digits + y1;
  let index = (n - x1) % num_digits;

  return `${y}`[index];
}

function get_expression_value() {
  let res = 1;
  for (let i = 0; i <= 6; i++) {
    res *= parseInt(d_n(10 ** i));
  }
  return res;
}

get_answer(get_expression_value());
