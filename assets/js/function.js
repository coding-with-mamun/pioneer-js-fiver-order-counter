// format numbers as two digits
function formatTwoDigits(number) {
  return number < 10 ? ["0", number.toString()] : number.toString().split("");
}
