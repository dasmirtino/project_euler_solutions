const { test, get_answer } = require("./utils.js");

// The following iterative sequence is defined for the set of positive integers:

//					 n → n/2 (n is even)
//					 n → 3n + 1 (n is odd)

// Using the rule above and starting with 13, we generate the following sequence:

// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains
// 10 terms. Although it has not been proved yet (Collatz Problem), it is thought
// that all starting numbers finish at 1.

// Which starting number, under one million, produces the longest chain?

// NOTE: Once the chain starts the terms are allowed to go above one million.

/**
 *
 * @param {number} start_num
 * @returns the number of chain starting from start_num.
 */
function get_num_chains(start_num) {
  let chains = 1;
  while (start_num !== 1) {
    start_num = start_num % 2 === 0 ? start_num / 2 : 3 * start_num + 1;
    chains++;
  }
  return chains;
}
/**
 *
 * @param {number} num
 * @returns the number that produces the longest chain under num.
 */
function get_longest_chain_under(num) {
  let longest_chain = 0,
    ans;
  for (let i = num - 1; i > 0; i--) {
    let num_chains = get_num_chains(i);
    if (longest_chain < num_chains) {
      longest_chain = num_chains;
      ans = i;
      //console.log(i, "==>", num_chains);
    }
  }
  return ans;
}

test(get_num_chains(13));

get_answer(get_longest_chain_under(1000000));
