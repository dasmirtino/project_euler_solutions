const { test, get_answer } = require("./utils");
// Take the number 192 and multiply it by each of 1, 2, and 3:

// 192 × 1 = 192
// 192 × 2 = 384
// 192 × 3 = 576
// By concatenating each product we get the 1 to 9 pandigital,
// 192384576. We will call 192384576 the concatenated product
// of 192 and (1,2,3)

// The same can be achieved by starting with 9 and multiplying
// by 1, 2, 3, 4, and 5, giving the pandigital, 918273645,
// which is the concatenated product of 9 and (1,2,3,4,5).

// What is the largest 1 to 9 pandigital 9-digit number that
// can be formed as the concatenated product of an integer
// with (1,2, ... , n) where n > 1?

/**
 *
 * @param {number[]} numbers products that concatenated could
 *  be a  pandigital number
 * @returns true if the concatenated number is pandigital
 */
function is_pandigital(numbers) {
  let digits = "123456789";
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    let current_digit = 0;
    let number = numbers[i];
    while (number > 0) {
      count++;
      current_digit = number % 10;
      digits = digits.replace(current_digit, "");
      number = Math.floor(number / 10);
    }
    //the concatenated number has more than 10 digits
    if (count > 9) return false;
  }
  return digits.length == 0;
}

/**
 *
 * @param {number} number
 * @returns the number of digits of number.
 */
function digit_count(number) {
  let count = 0;
  while (number > 0) {
    count++;
    number = Math.floor(number / 10);
  }
  return count;
}

/**
 *
 */
function find_concatenated_product() {
  let current_number = 2;
  let greatest_pandigital = "";
  // Products greater than 10000 gets numbers with 10 digits
  while (current_number < 10000) {
    let products = [];
    let count = 0;
    //The largest consecutive factor is 5
    for (let i = 1; i <= 5; i++) {
      let prod = current_number * i;
      count += digit_count(prod);
      products.push(prod);
      if (count > 9) break;
      if (count === 9 && is_pandigital(products)) {
        // console.log(">> ", products);
        let max = "";
        for (let j = 0; j < products.length; j++) {
          max += products[j];
        }
        if (greatest_pandigital < max) greatest_pandigital = max;
        break;
      }
    }
    current_number++;
  }

  return greatest_pandigital;
}

get_answer(find_concatenated_product());
