// const arr = [-1, 90, 78, 6, 9, -3, -5, -8, 8, 2, 4, 8, 13];
const arr = [1, 2, 3];

// filtering using for loop
// const ner = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] >= 1) {
//     ner.push(arr[i]);
//   }
// }
// console.log(ner);

// filtering using filter
// const newArr = arr.filter((e) => e <= -1);

// console.log(newArr);

// filtering using map
// const newArr = arr.map((e) => e * 2);

// console.log(newArr);

// filtering using reduce
// const newArr = arr.reduce((pV, cV, cI) => pV + cV ** 2);

// console.log(newArr);

// chaining manual
// const newArr = arr.map((e) => e ** 2).reduce((pV, cV) => pV + cV);

// console.log(newArr);

// chaining ala reduce advance || kaya sigma nich wkwkwk
// rumus nya sigma (n1 * 4) / 2
const newArr = arr.reduce((pV, cV) => pV + (cV * 4) / 2);
console.log(newArr);

// // cari rata"
// const xBar = arr.reduce((prev, curr) => prev + curr) / arr.length;
// console.log(xBar);
