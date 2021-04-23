const { test, get_answer } = require("./utils");
const { names } = require("./problem_22_extras");

// Using names.txt,a 46K text file containing over five-thousand
// first names, begin by sorting it into alphabetical order.
// Then working out the alphabetical value for each name, multiply
// this value by its alphabetical position in the list to obtain a name score.

// For example, when the list is sorted into alphabetical order,
// COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th
// name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

// What is the total of all the name scores in the file?

/**
 *
 * @param {String} name name in array
 * @param {number} pos_in_array position in array
 */
function get_name_score(name, pos_in_array) {
  let sum = 0;
  for (let pos = 0; pos < name.length; pos++) {
    sum += name.charCodeAt(pos) - 64;
  }
  return sum * (pos_in_array + 1);
}

/**
 *
 * @param {String[]} array sorted string array
 * @returns total sum of name score in array.
 */
function get_total_name_score(array) {
  let total_sum = 0;
  for (let i = 0; i < array.length; i++) {
    total_sum += get_name_score(array[i], i);
  }
  return total_sum;
}

names.sort();
test(get_name_score(names[937], 937));
get_answer(get_total_name_score(names));
