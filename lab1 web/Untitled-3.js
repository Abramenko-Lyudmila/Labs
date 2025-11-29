// 2
/*function min(a, b) {
  return a < b ? a : b;
}
  console.log(min(5, 10)); // 5
console.log(min(-3, 2)); // -3
console.log(min(7, 7)); // 7


// 3
const min = function(a, b) {
  return a < b ? a : b;
};
console.log(min(5, 10)); // 5
console.log(min(-3, 2)); // -3
console.log(min(7, 7)); // 7


// 4
const min = (a, b) => a < b ? a : b;
console.log(min(5, 10)); // 5
console.log(min(-3, 2)); // -3
console.log(min(7, 7)); // 7


// 5
function progression(base, count) {
  if (count <= 1) {
    return String(base);
  }

  let result = [];

  for (let i = 1; i <= count; i++) {
    result.push(base * i);
  }

  return result.join(", ");
}
  console.log(progression(7, 3)); 
console.log(progression(7, 2)); 
console.log(progression(7, 1));  
console.log(progression(7, 0));  
console.log(progression(7, -5)); 


// 6 
function operate(func, a, b) {
  return func(a, b);
}

const result = operate((x, y) => x + y, 5, 7);

console.log(result); 

// 7 
function sumAll() {
  let total = 0;

  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  return total;
}
  console.log(sumAll(1, 2, 3));        
console.log(sumAll(10, 20));          
console.log(sumAll(5, 5, 5, 5, 5));  
console.log(sumAll());              


// 8 
const sumAll = (...args) => {
  return args.reduce((total, value) => total + value, 0);
};
console.log(sumAll(1, 2, 3));       
console.log(sumAll(10, 20));         
console.log(sumAll(5, 5, 5, 5, 5));  
console.log(sumAll());              
*/

// 9 
function getProcessor(type) {
  if (type === 'jpg') {
    return function() {
      console.log('Функція опрацювання файлів jpg');
    };
  }

  if (type === 'png') {
    return function() {
      console.log('Функція опрацювання файлів png');
    };
  }

  return function() {
    console.log('Невідомий тип файлу');
  };
}
const jpgFunc = getProcessor('jpg');
jpgFunc(); 

const pngFunc = getProcessor('png');
pngFunc(); 







