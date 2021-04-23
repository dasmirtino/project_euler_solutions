const { get_answer } = require("./utils");
// If p is the perimeter of a right angle triangle with
// integral length sides, {a,b,c}, there are exactly
// three solutions for p = 120.

// {20,48,52}, {24,45,51}, {30,40,50}

// For which value of p ≤ 1000, is the number of solutions maximised?

function calc_solution() {
  let base_perimeter = 5;
  let max_solutions_count = 0;
  let p_maximised = base_perimeter;
  while (base_perimeter <= 1000) {
    let solutions_count = 0;
    for (let a = 1; a < base_perimeter / 2; a++) {
      for (let b = 1; b <= a; b++) {
        let c = base_perimeter - a - b;
        if (c <= 0) continue;
        if (Math.sqrt(a ** 2 + b ** 2) === c) solutions_count++;
      }
    }
    if (solutions_count > 0 && max_solutions_count < solutions_count) {
      max_solutions_count = solutions_count;
      p_maximised = base_perimeter;
    }
    base_perimeter++;
  }
  return p_maximised;
}

get_answer(calc_solution());
