export function simplifyFraction(str: string) {
  const data = str.split('/');
  let numOne = Number(data[0]);
  let numTwo = Number(data[1]);
  for (let i = Math.max(numOne, numTwo); i > 1; i--) {
    if (numOne % i == 0 && numTwo % i == 0) {
      numOne /= i;
      numTwo /= i;
    }
  }
  if (numTwo === 1) {
    return numOne.toString();
  }
  return numOne.toString() + '/' + numTwo.toString();
}
