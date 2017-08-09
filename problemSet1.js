function max(numbers) {
  let currentMax = numbers[0];
  let i=0;
  while(i<=numbers.length) {
    if (numbers[i] > currentMax) {
       currentMax = numbers[i];
    }
    i+=1;
  }
  return currentMax;
}

function min(numbers) {
  // your code here
  let i = 0;
  let currentMin = numbers[0];
  while (i <= numbers.length) {
    if (numbers[i] < currentMin) {
      currentMin = numbers[i];
    }
    i++;
  }
  return currentMin;
}

function min(numbers) {
  // we set `currentMin` to the value
  // of first item in `numbers`,
  // then we loop through `numbers`,
  // comparing each item to `currentMin`.
  // if the item is less than `currentMin`,
  // we set `currentMin` to that number.
  let currentMin = numbers[0];
  for (let i=0; i <= numbers.length; i++) {
    if (numbers[i] < currentMin) {
       currentMin = numbers[i];
    }
  }
  return currentMin;
}

function testFunctionWorks(fn, input, expected) {
  if (fn(input) === expected) {
    console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
    return true;
  }
  else {
    console.log(
      'FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
      ' but was ' + fn(input)
    );
    return false;
  }
}

(function runTests() {
  // we'll use the variables in our test cases
  var numList1 = [-5, 28, 98, -20013, 0.7878, 22, 115];
  var realMin1 = numList1[3];
  var realMax1 = numList1[6];
  var numList2 = [0, 1, 2, 3, 4];
  var realMin2 = numList2[0];
  var realMax2 = numList2[4];
  
  var testResults = [
    testFunctionWorks(max, numList1, realMax1),
    testFunctionWorks(max, numList2, realMax2),
    testFunctionWorks(min, numList1, realMin1),
    testFunctionWorks(min, numList2, realMin2),
  ];
  
  var numPassing = testResults.filter(function(result){ return result; }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
})();

function average(numbers) {
  let result=0;
  numbers.forEach(el =>
    result += el
  )
  return result/numbers.length;
}

function averageAlt(numbers) {
    return numbers.reduce(function(a, b) {return a + b;})/numbers.length;
}

function testFunctionWorks(fn, input, expected) {
  if (fn(input) === expected) {
    console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
    return true;
  }
  else {
    console.log(
      'FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
      ' but was ' + fn(input)
    );
    return false;
  }
}

(function runTests() {
  const numList1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const correctAns1 = 5.5;
  const numList2 = [0, -1, 1];
  const correctAns2 = 0;
  
  const testResults = [
    testFunctionWorks(average, numList1, correctAns1),
    testFunctionWorks(average, numList2, correctAns2)
  ];
  const numPassing = testResults.filter(function(result){ return result; }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.')
})();

function fizzBuzz(countTo) {
  const result = [];
  for (let i=1; i <= countTo; i++) {
    switch (true){
      case i%15===0:
      result.push('fizzbuzz'); 
      break;

      case i%5===0:
      result.push('buzz');
      break; 

      case i%3 === 0:
      result.push('fizz');
      break;

      default:
      result.push(i);
      break;
    }
  }
  return result;
}

(function testFizzBuzz() {
  // we'll use the variables in our test cases
  const countTo = 16;
  const expected = [
    1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz',
    'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16
  ];

  const actual = fizzBuzz(countTo) || [];
  
  if (
    expected.length === actual.length &&
    expected.every(function(item, index) {
      return actual[index] === item;}) ) {
    
      console.log('SUCCESS: fizzBuzz is working');
  }
  else {
    console.log('FAILURE: fizzBuzz is not working');
  }  
})();

