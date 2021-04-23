const { test, get_answer } = require("./utils");

// You are given the following information, but you may prefer
// to do some research for yourself.

// 1 Jan 1900 was a Monday.
// Thirty days has September, April, June and November.
// All the rest have thirty-one,
// Saving February alone,
// Which has twenty-eight, rain or shine.
// And on leap years, twenty-nine.
// A leap year occurs on any year evenly divisible by 4, but not
// on a century unless it is divisible by 400.

// How many Sundays fell on the first of the month during the
// twentieth century (1 Jan 1901 to 31 Dec 2000)?

/**
 *
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @returns a object that contains the name of the date priveded.
 */
function get_day_str(day, month, year) {
  let month_num_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let year_days_sum = 0,
    curr_year = 1900,
    i;
  for (i = 0; i < year - 1900; i++) {
    year_days_sum += is_leap_year(curr_year) ? 366 : 365;
    curr_year++;
  }

  if (is_leap_year(year)) {
    month_num_days[1] += 1;
  }

  let sum_days = 0;
  for (let i = 0; i < month; i++) {
    sum_days += month_num_days[i];
  }

  return {
    day_str: days[(year_days_sum + sum_days + day - 1) % 7],
    date: `${day}-${months[month]}-${year}`,
    day_passed_since_1900: year_days_sum + sum_days + day - 1,
    is_leap_year: is_leap_year(year),
  };
}

/**
 *
 * @param {number} year
 * @returns true if year is a leap year.
 */
function is_leap_year(year) {
  if (year % 4 !== 0) {
    return false;
  } else if (year % 100 !== 0) {
    return true;
  } else if (year % 400 !== 0) {
    return false;
  }
  return true;
}

/**
 *
 * @returns How many Sundays fell on the first of the month
 * during the twentieth century
 */
function count_sundays() {
  let count = 0;
  for (let year = 1901; year <= 2000; year += 1) {
    for (let month = 0; month < 12; month++) {
      if (get_day_str(1, month, year).day_str === "Sunday") count++;
    }
  }
  return count;
}

let year = 1900;
for (let i = 0; i <= 4; i++) {
  test(get_day_str(1, 0, year));
  test(get_day_str(31, 11, year));
  year++;
}

get_answer(count_sundays());
