const { test, get_answer } = require("./utils");

// In the United Kingdom the currency is made up of pound (£)
//  and pence (p). There are eight coins in general circulation:

// 1p, 2p, 5p, 10p, 20p, 50p, £1 (100p), and £2 (200p).

// It is possible to make £2 in the following way:
// 1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p

// How many different ways can £2 be made using any number of coins?

/**
 * Returns the number of different ways can pounds be made
 * using any number of coins
 * @param {number} pounds
 */
function get_nums_ways(pounds) {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  let count = 0;

  for (let x1 = 0; x1 <= Math.floor(pounds / coins[0]); x1++)
    for (let x2 = 0; x2 <= Math.floor(pounds / coins[1]); x2++)
      for (let x3 = 0; x3 <= Math.floor(pounds / coins[2]); x3++)
        for (let x4 = 0; x4 <= Math.floor(pounds / coins[3]); x4++)
          for (let x5 = 0; x5 <= Math.floor(pounds / coins[4]); x5++)
            for (let x6 = 0; x6 <= Math.floor(pounds / coins[5]); x6++)
              for (let x7 = 0; x7 <= Math.floor(pounds / coins[6]); x7++)
                for (let x8 = 0; x8 <= Math.floor(pounds / coins[7]); x8++) {
                  let diff =
                    pounds -
                    x1 * coins[0] -
                    x2 * coins[1] -
                    x3 * coins[2] -
                    x4 * coins[3] -
                    x5 * coins[4] -
                    x6 * coins[5] -
                    x7 * coins[6] -
                    x8 * coins[7];
                  if (diff < 0) break;
                  if (diff === 0) count++;
                }
  return count;
}

get_answer(get_nums_ways(200));
