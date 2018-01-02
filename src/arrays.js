export default () => {
  console.log('Arrays');

  var fibonacci = [];

  fibonacci[0] = 1;
  fibonacci[1] = 1;

  for (var i = 2; i < 20; i++) {
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
  }
  for (var j = 0; j < fibonacci.length; j++) {
    console.log(fibonacci[j]);
  }

  var numbers = [0, 1, 2, 3, 4, 5];
  numbers[numbers.length] = 6;

  numbers.push(7);
  numbers.push(8, 9);

  numbers.unshift(-1);
  numbers.unshift(-3, -2);

  console.log(numbers);
};
