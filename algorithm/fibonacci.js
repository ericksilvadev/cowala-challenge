const fibonacci = (n) => {
  const fibonacciArr = [];

  while (fibonacciArr.length < n) {
    if (!fibonacciArr.length) fibonacciArr.push(0);
    else if (fibonacciArr.length === 1) fibonacciArr.push(1);
    else
      fibonacciArr.push(
        fibonacciArr[fibonacciArr.length - 1] + fibonacciArr[fibonacciArr.length - 2]
      );
  }

  return fibonacciArr;
};
