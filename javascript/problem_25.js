const { maxHeaderSize } = require("http");
const { test, get_answer } = require("./utils");

// The Fibonacci sequence is defined by the recurrence relation:

// Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
// Hence the first 12 terms will be:

// F1 = 1
// F2 = 1
// F3 = 2
// F4 = 3
// F5 = 5
// F6 = 8
// F7 = 13
// F8 = 21
// F9 = 34
// F10 = 55
// F11 = 89
// F12 = 144
// The 12th term, F12, is the first term to contain three digits.

// What is the index of the first term in the Fibonacci sequence
// to contain 1000 digits?

/**
 *
 * @param {number} index index of fibonacci sequence.
 * @param {number[]} fib_array previous fibonacci terms.
 */
function get_fibo_by_index(index, fib_array) {
  if (index <= fib_array.length) {
    return fib_array[index - 1];
  }
  for (let i = fib_array.length; i < index; i++) {
    fib_array[i] = add(fib_array[i - 1], fib_array[i - 2]);
  }

  return fib_array[fib_array.length - 1];
}

/**
 * Return an String representation of a + b.
 * @param {String} a first number
 * @param {String} b second number
 */
function add(a, b) {
  let digits_to_add = Math.abs(a.length - b.length);
  for (let i = 0; i < digits_to_add; i++) {
    if (a.length > b.length) {
      b = `0${b}`;
    } else {
      a = `0${a}`;
    }
  }
  let remaining = 0,
    res = "";
  for (let i = a.length - 1; i >= 0; i--) {
    let sum = parseInt(a[i]) + parseInt(b[i]) + remaining;
    if (i === 0) {
      res = sum + res;
    } else {
      res = (sum % 10) + res;
    }
    remaining = Math.floor(sum / 10);
  }
  return res;
}

/**
 * Returns the index of the first term in the Fibonacci sequence
 * to contain num_digits digits
 * @param {number} num_digits number of digits
 */
function get_first_fibo_with_num_digits(num_digits) {
  let fib_array = ["1", "1"];
  let index = 0,
    fibo_num;
  do {
    index++;
    fibo_num = get_fibo_by_index(index, fib_array);
  } while (fibo_num.length < num_digits);
  return index;
}

test(get_first_fibo_with_num_digits(3));

get_answer(get_first_fibo_with_num_digits(1000));
