module.exports = { test, get_answer };
/**
 * Logs the test args.
 * @param {*} args
 */
function test(args) {
  if (!args) {
    console.log("NO TEST PROVIDES!");
    return;
  }
  console.log("TEST = ", args);
}

/**
 * Logs the answer.
 * @param {*} args
 */
function get_answer(args) {
  console.log("ANSWER = ", args);
}
