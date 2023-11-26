//2. Do the below program in arrow function:
//a. Print odd number in an arry :
var odd =(a) => {
  for(var i=0;i<=a.length;i++)
  {
    if(a[i] % 2 !==0)
    {
      console.log(a[i]);
    }
  }
};
var numbers = [1, 2, 3, 4];
odd(numbers);
//b. Converting all string to title caps in a string array:

var stg = ["sanjai", "gowsalya", "melina"];

(() => {
  var upperCaseArray = stg.map(str => str.toUpperCase());

  console.log(upperCaseArray);
})();
//c.sum OF all numbers in an array:

var add = arr => {
  var sum = 0;
  for (var i = 0; i < arr.length; i++)
    sum = sum + arr[i];
  return sum;
};
console.log(add([1, 2, 3, 4]));
//d. Return all the prime numbers in an array:
var numArray = [1,2,3,4,5];

(() => {
  numArray = numArray.filter(number => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });
})();

console.log(numArray);
//e. Return all the palindome in an array:

var inputArray = [121, 123, 1331, 454, 78987];
var palindromesInArray = [];

const isPalindrome = num => {
  const numStr = num.toString();
  return numStr === numStr.split('').reverse().join('');
};

for (const currentNumber of inputArray) {
  if (isPalindrome(currentNumber)) {
    palindromesInArray.push(currentNumber);
  }
}

console.log("Palindromes in the array:", palindromesInArray);


