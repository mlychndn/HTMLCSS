function fibnocci(input) {
  const n1 = 0,
    n2 = 1;

  let output = [];

  if (input === 1) {
    output = [n1, n2];
    return output;
  } else if (input === 2) {
    output = [n1, n2, n2];
    return output;
  } else {
    output.push(n1);
    output.push(n2);

    for (let i = 0; i <= output.length; i++) {
      const val = output[i] + output[i + 1];

      if (val < input) {
        output.push(val);
      } else if (val === input) {
        output.push(val);
        break;
      }
    }
  }

  return output;
}

console.log(fibnocci(9));
