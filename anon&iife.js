//1. Do the below program in anonymous function and IIFE:
//a. Print odd number in an arry :

//var a=[1,2,3,4];
//for (var i=0;i<=a.length;i++)
//if(a[i] % 2 == 0)
//{
  //console.log(a[i]);
//}


// ANOYMOUS:
var printOddNumbers = function(odd) {
    for (var i = 0; i < odd.length; i++) {
      if (odd[i] % 2 !== 0) {
        console.log(odd[i]);
      }
    }
  };
  printOddNumbers([1, 2, 3, 4]);
  
    //IIFE:
    (function(odd){
      for(var i=0;i<=odd.length;i++)
      {
        if(odd[i] % 2 !== 0)
        {
         console.log(odd[i]);
       }
      }
    })([1,2,3,4]);
//b. Converting all string to title caps in a string array:
//var name= ["gowsalya","sanjai","melina"];
//var upperCase = name.map(item => item.toUpperCase());
//console.log(upperCase);

// ANOYMOUS:
var strings = ["sanjai", "gowsalya", "melina"];
let uppercasedStrings = strings.map(function(str) {
    return str.toUpperCase();
});
console.log(uppercasedStrings);

//IIFE:
var stg = ["sanjai", "gowsalya", "melina"];

(function(arr) {
  var upperCaseArray = arr.map(function(str) {
    return str.toUpperCase();
  });

  console.log(upperCaseArray);
})(stg);
//c.sum OF all numbers in an array:
//var a = [1, 2, 3, 4];
//var sum = 0;
//for (var i = 0; i < a.length; i++) {
  //sum = sum + a[i];
//}
//console.log(sum);

//ANOYMOUS:

var add = function(arr){
    var sum=0;
    for (var i=0;i<arr.length;i++)
    sum=sum + arr[i];
  return sum;
  };
  console.log(add([1,2,3,4]));
   
  //IIFE:
  (function(array){
  var sum = 0;
  for(var i = 0 ; i< array.length ; i++){
     sum = sum + array[i];
     }
   return sum;
   })([1,2,3,4])
   //d. Return all the prime numbers in an array:
//var numArray = [/* Your array of numbers here */];
//numArray = numArray.filter((number) => {
  //for (var i = 2; i <= Math.sqrt(number); i++) {
   // if (number % i === 0) return false;
 // }
 // return true;
//});
//console.log(numArray);

//ANONYMOUS
var numArray = [1,2,3,4,5];
numArray = numArray.filter(function(number) {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});
console.log(numArray);

//IIFE
var numArray = [1,2,3,4,5];

(function() {
  numArray = numArray.filter(function(number) {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });
})();

console.log(numArray);
//e. Return all the palindome in an array:
//const inputArray = [121, 123, 1331, 454, 78987];
//const palindromesInArray = [];

//for (let i = 0; i < inputArray.length; i++) {
  //const currentNumber = inputArray[i];
  //const numberStr = currentNumber.toString();
  //let reversedNumberStr = "";

  //for (let j = numberStr.length - 1; j >= 0; j--) {
    //reversedNumberStr += numberStr[j];
  //}

  //if (numberStr === reversedNumberStr) {
    //palindromesInArray.push(currentNumber);
  //}
//}

//console.log("Palindromes in the array:", palindromesInArray);

//ANONYMOUS:

var inputArray = [121, 123, 1331, 454, 78987];
var palindromesInArray = [];

var isPalindrome = function(num) {
  const numStr = num.toString();
  return numStr === numStr.split('').reverse().join('');
};

for (let i = 0; i < inputArray.length; i++) {
  const currentNumber = inputArray[i];

  if (isPalindrome(currentNumber)) {
    palindromesInArray.push(currentNumber);
  }
}

console.log("Palindromes in the array:", palindromesInArray);

//IIFE
const inputArray = [121, 123, 1331, 454, 78987];
const palindromesInArray = [];

(function() {
  const isPalindrome = function(num) {
    const numStr = num.toString();
    return numStr === numStr.split('').reverse().join('');
  };

  for (let i = 0; i < inputArray.length; i++) {
    const currentNumber = inputArray[i];

    if (isPalindrome(currentNumber)) {
      palindromesInArray.push(currentNumber);
    }
  }
})();

console.log("Palindromes in the array:", palindromesInArray);
//f.Return median of two sorted arrays of same size
//ANOYMOUS:
let median = function(a, b) {

    let c = [...a, ...b].sort((a, b) => a - b);
  
    const half = c.length / 2 | 0;
    
  if (c.length % 2) {
    return c[half];
  } else {
    
    return (c[half] + c[half - 1]) / 2;
  }
  }
  let arr1 = [1, 12, 15, 26, 38,24];
  let arr2 = [2, 13, 17, 30, 45, 47];
  console.log(median(arr1, arr2));
  
  //IIFE :
  ( function() {
    let arr1 = [1, 12, 15, 26, 38,24];
    let arr2 = [2, 13, 17, 30, 45, 47];
    
      let c = [...arr1, ...arr2].sort((arr1, arr2) => arr1 - arr2);
    
      const half = c.length / 2 | 0;
      
    if (c.length % 2) {
    console.log(c[half]);
    } else {
      
    console.log((c[half] + c[half - 1]) / 2);
    }
    
    })()
 //g.Remove duplicates from an Array
 
//var arr = [1, 2, 3, 4, 2, 5, 6, 1];

//for (var i = 0; i < arr.length; i++) {
  //  var currentElement = arr[i];
    
    //if (arr.indexOf(currentElement) !== i) {
     //arr.splice(i, 1);
       //  i--;
    //}
//}

console.log(arr); 

//Anonymous :

var arr = [1, 2, 3, 4, 2, 5, 6, 1];

(function() {
    for (var i = 0; i < arr.length; i++) {
        var currentElement = arr[i];
        if (arr.indexOf(currentElement) !== i) {  
            arr.splice(i, 1);  
            i--;
        }
    }
})();

console.log(arr);

//IIFE:
var arr = [1, 2, 3, 4, 2, 5, 6, 1];

(function() {
    for (var i = 0; i < arr.length; i++) {
        var currentElement = arr[i];
        if (arr.indexOf(currentElement) !== i) {
              arr.splice(i, 1);
            i--;
        }
    }
})();

console.log(arr);

//h.Rotate an array by K times

//ANONMOUS:
var removeDuplicates = function(array) {
  let dup = [...new Set(array)];
  console.log(dup);
};

var arr = [1, 2, 3, 4, 2, 5, 6, 1];
removeDuplicates(arr);

//IIFE:
var arr = [1, 2, 3, 4, 2, 5, 6, 1];

(function(array) {
    let dup = [...new Set(array)];
    console.log(dup);
})(arr);

