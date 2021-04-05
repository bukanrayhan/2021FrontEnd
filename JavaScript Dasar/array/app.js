// declare array
let arr = ["iwan", "jajang"];
let arrNum = [1, 2, 3, 4, 5, 6];

// forEach
// let hmm = arr.forEach(function (e, i) {
//     console.log(`Mahasiswa ke-${e + 1}: ${i}`);
// });
let hmm = arr.forEach((e, i) => {
  console.log(`Mahasiswa ke-${i + 1}: ${e}`);
}); // bentuk ke 2

let funcF = (arr) =>
  arr.forEach((e, i) => {
    console.log(`Mahasiswa ke-${i + 1}: ${e}`);
  });

// funcF(arr);

// map
let m = arr.map((b) => console.log(b));

let funcM = (x) =>
  x.map((e) => {
    return e * 2;
  });

let y = funcM(arrNum);

console.log(y);
