const { get_answer } = require("./utils");

// The fraction 49/98 is a curious fraction, as an inexperienced
// mathematician in attempting to simplify it may incorrectly believe
// that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.

// We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

// There are exactly four non-trivial examples of this type of fraction,
// less than one in value, and containing two digits in the numerator
// and denominator.

// If the product of these four fractions is given in its lowest common
// terms, find the value of the denominator.

function get_non_trivial_fractions() {
  let res_num = 1,
    res_den = 1;
  for (let numerator = 10; numerator < 99; numerator++)
    for (let denominator = 10; denominator < 99; denominator++) {
      for (let digit = 1; digit < 10; digit++) {
        if (numerator >= denominator) break;
        let num = parseInt(`${numerator}`.replace(`${digit}`, "")),
          den = parseInt(`${denominator}`.replace(`${digit}`, ""));
        if (den === 0 || num === numerator || den === denominator) continue;
        else if (num / den === numerator / denominator) {
          res_num *= num;
          res_den *= den;
        }
      }
    }
  let gcd = 1;
  for (let i = 2; i <= res_num; i++) {
    if (res_num % i === 0 && res_den % i === 0) gcd = i;
  }
  return res_den / gcd;
}

get_answer(get_non_trivial_fractions());
