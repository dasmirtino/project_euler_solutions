const { words } = require("./problem_42_extras");
const { get_answer, test } = require("./utils");

// The nth term of the sequence of triangle
// numbers is given by, tn = ½n(n+1); so the
// first ten triangle numbers are:

// 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

// By converting each letter in a word to a
// number corresponding to its alphabetical
// position and adding these values we form
// a word value. For example, the word value
// for SKY is 19 + 11 + 25 = 55 = t10.
// If the word value is a triangle number then
// we shall call the word a triangle word.

// Using words.txt, a 16K text file containing
// nearly two-thousand common English words,
// how many are triangle words?

/**
 *
 * @param {number} tn nth term of the sequence
 * of triangle number
 * @returns true if tn is a triangle number, false otherwise.
 */
function is_triangle_numer(tn) {
  let n = (Math.sqrt(8 * tn + 1) - 1) / 2;
  return n % 1 == 0;
}

/**
 *
 * @param {string} word
 * @returns the word value obtained from sum each letter in word
 * to a number corresponding to its alphabetical position
 */
function get_word_value(word) {
  let sum = 0;
  for (let i = 0; i < word.length; i++) {
    sum += word.charCodeAt(i) - 64;
  }
  return sum;
}

/**
 *
 * @param {string[]} words_array
 * @returns how many strings in words_array are triangle words.
 */
function get_triangle_words_number_from(words_array) {
  let counter = 0;
  for (let i = 0; i < words_array.length; i++) {
    let word_value = get_word_value(words_array[i]);
    if (is_triangle_numer(word_value)) counter++;
  }
  return counter;
}

test(is_triangle_numer(55));
test(is_triangle_numer(45));
test(is_triangle_numer(28));
test(get_word_value("SKY"));

get_answer(get_triangle_words_number_from(words));
