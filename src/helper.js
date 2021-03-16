function isLetter(char) {
  let regex = /[a-z]/;
  return regex.test(char);
}
function isNumber(char) {
  let regex = /\d/;
  return regex.test(char);
}
module.exports = { isLetter, isNumber };
