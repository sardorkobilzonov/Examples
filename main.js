// 1-MISOL
// const isPrime = (num) => {
//   if (num <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(isPrime(7)); // true
// console.log(isPrime(10)); // false

// 2-MISOL

// const isPerfect = function (num) {
//   if (num <= 1) {
//     return false;
//   }

//   let sum = 1;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       sum += i;
//       if (i !== num / i) {
//         sum += num / i;
//       }
//     }
//   }

//   return sum === num;
// };

// // Test
// console.log(isPerfect(28)); // true
// console.log(isPerfect(12)); // false

// 3-MISOL
// const countVowelsAndConsonants = (word) => {
//   let vowels = 0;
//   let consonants = 0;

//   let index = 0;
//   while (index < word.length) {
//     const letter = word[index].toLowerCase();

//     if ("aeiou".includes(letter)) {
//       vowels++;
//     } else if (letter >= "a" && letter <= "z") {
//       consonants++;
//     }

//     index++;
//   }

//   return { vowels, consonants };
// };

// const word = "Hello world";
// const result = countVowelsAndConsonants(word);
// console.log(`Unli harflar soni: ${result.vowels}`);
// console.log(`Undosh harflar soni: ${result.consonants}`);

// 4-MISOL
// const closestToFive = function (num1, num2) {
//   const diff1 = Math.abs(5 - num1);
//   const diff2 = Math.abs(5 - num2);

//   if (diff1 < diff2) {
//     return num1;
//   } else if (diff2 < diff1) {
//     return num2;
//   } else {
//     return `${num1} va ${num2} sonlar bir xil masofada 5 ga yaqin`;
//   }
// };

// console.log(closestToFive(3, 7));
// console.log(closestToFive(4, 6));
// console.log(closestToFive(5, 5));

// 5-MISOL
// const rectangle = (a, b) => {
//   const area = a * b;
//   const perimeter = 2 * (a + b);
//   return { area: area, perimeter: perimeter };
// };

// // Test
// const result = rectangle(5, 5);
// console.log("Yuzasi:", result.area);
// console.log("Perimetri:", result.perimeter);

// 6-MISOL
// const power = (a, n) => {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= a;
//   }

//   return result;
// };

// console.log(power(2, 3));
// console.log(power(5, 2));
// console.log(power(3, 4));

// 7-MISOL
// const sign = (n) => {
//   if (n === 0) {
//     return 0;
//   } else if (n > 0) {
//     return 1;
//   } else {
//     return -1;
//   }
// };

// // Test
// console.log(sign(-5));
// console.log(sign(0));
// console.log(sign(10));
