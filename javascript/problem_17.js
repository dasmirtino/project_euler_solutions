const { test, get_answer } = require("./utils.js");

// If the numbers 1 to 5 are written out in words: one, two, three, four, five,
// then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

// If all the numbers from 1 to 1000 (one thousand) inclusive were written out
// in words, how many letters would be used?

// NOTE: Do not count spaces or hyphens. For example,
// 342 (three hundred and forty-two) contains 23 letters
// and 115 (one hundred and fifteen) contains 20 letters.
// The use of "and" when writing out numbers is in compliance
//  with British usage.

/**
 *
 * @param {number} num number to write out in words
 * @returns {String} the num written in words
 */
function write_num(num) {
  if (num <= 20) {
    switch (num) {
      case 20:
        return "twenty";
      case 19:
        return "nineteen";
      case 18:
        return "eighteen";
      case 17:
        return "seventeen";
      case 16:
        return "sixteen";
      case 15:
        return "fifteen";
      case 14:
        return "fourteen";
      case 13:
        return "thirteen";
      case 12:
        return "twelve";
      case 11:
        return "eleven";
      case 10:
        return "ten";
      case 9:
        return "nine";
      case 8:
        return "eight";
      case 7:
        return "seven";
      case 6:
        return "six";
      case 5:
        return "five";
      case 4:
        return "four";
      case 3:
        return "three";
      case 2:
        return "two";
      case 1:
        return "one";
      case 0:
        return "";
    }
  } else if (num > 20 && num < 100) {
    let ans = "";
    switch (Math.floor(num / 10)) {
      case 2:
        ans = "twenty";
        break;
      case 3:
        ans = "thirty";
        break;
      case 4:
        ans = "forty";
        break;
      case 5:
        ans = "fifty";
        break;
      case 6:
        ans = "sixty";
        break;
      case 7:
        ans = "seventy";
        break;
      case 8:
        ans = "thirty";
        break;
      case 9:
        ans = "ninety";
        break;
    }
    return (ans + " " + write_num(num % 10)).trim();
  } else if (num >= 100 && num < 1000) {
    let ans =
      write_num(Math.floor(num / 100)) +
      " hundred and " +
      write_num(num % 100).trim();
    if (num % 100 === 0) {
      return ans.slice(0, ans.length - 5);
    }
    return ans;
  } else {
    return "one thousand";
  }
}
/**
 *
 * @param {number} start start number
 * @param {number} end end number inclusive
 * @returns the sum of letters used in the numbers from start to end inclusive.
 */
function get_num_letters_used(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    let word = write_num(i);
    sum += word.length - count_spaces(word);
  }
  return sum;
}

/**
 *
 * @param {String} word
 * @returns the number of espaces in the word.
 */
function count_spaces(word) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === " ") {
      count++;
    }
  }
  return count;
}

test(get_num_letters_used(1, 5));

get_answer(get_num_letters_used(1, 1000));
