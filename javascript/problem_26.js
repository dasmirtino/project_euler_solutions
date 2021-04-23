const { test, get_answer } = require("./utils");

// A unit fraction contains 1 in the numerator. The decimal representation
// of the unit fractions with denominators 2 to 10 are given:

//   1/2	= 	0.5
//   1/3	= 	0.(3)
//   1/4	= 	0.25
//   1/5	= 	0.2
//   1/6	= 	0.1(6)
//   1/7	= 	0.(142857)
//   1/8	= 	0.125
//   1/9	= 	0.(1)
//   1/10	= 	0.1
// Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle.
// It can be seen that 1/7 has a 6-digit recurring cycle.
// Find the value of d < 1000 for which 1/d contains the
// longest recurring cycle in its decimal fraction part.

/**
 *
 * Returns a String representation of a / b
 * @param {String} a String representation of the numerator
 * @param {String} b String representation of the divisor
 */
function div(a, b) {
  const MAX_NUM_DIGITS = 100;
  let zeros_count = 0;
  let res = "";
  while (parseInt(a) < parseInt(b)) {
    a *= 10;
    if (res === "") {
      res += "0.";
      continue;
    }
    res += "0";
  }
  let remaining = parseInt(a),
    remainings = [remaining];
  // for (let i = 0; i < MAX_NUM_DIGITS; i++) {

  while (true) {
    res += "" + Math.floor(remaining / b);
    remaining = (remaining % b) * 10;

    if (remainings.indexOf(remaining) === -1) {
      remainings.push(remaining);
    } else break;
    if (remaining === 0) break;
  }
  return res;
}

/**
 * Finds the value of d < 1000 for which 1/d contains the
 * longest recurring cycle in its decimal fraction part.
 */
function get_longest_cycle() {
  let cycle = "",
    max_long_cycle = 0;
  for (let d = 999; d > 1; d--) {
    let div_ans = div("1", `${d}`);
    if (div_ans.length > cycle.length) {
      cycle = div_ans;
      max_long_cycle = d;
    }
  }
  return max_long_cycle;
}

for (let d = 2; d <= 10; d++) {
  test([`1/${d} = `, div(1, d)]);
}

get_answer(get_longest_cycle());
