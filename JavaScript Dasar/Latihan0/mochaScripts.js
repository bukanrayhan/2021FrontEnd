// penggunanan variables var
// var oyeah = "heyy";
// angka = 90;
// var wawan;
// wawan = [2, 8];

// console.log(oyeah);
// console.log(angka);
// console.log(wawan);

// // penggunanan variables let
// penggunaan let untuk menggantikan var
let oey = "nice";
let angkaJuga = 0.89;

console.log(oey);
console.log(angkaJuga);

// penggunanan variables const
// penggunaan const untuk nilai tetap
const text = "text";
const num = 9090;

console.log(text);
console.log(num);

// text = 90; => tidak bisa diubah nilainya
// num = "huhuy";

// console.log(text);
// console.log(num);

angkaJuga = 2;

console.log(angkaJuga);
angkaJuga **= 8;
console.log(angkaJuga);
console.log((angkaJuga /= 128));

// perbandingan > <
let nuo = angkaJuga > num;

console.log(angkaJuga + ">" + num + " = " + nuo);

// perbandingan ==
let angka = "2";
samsama = angkaJuga == angka;

console.log(angka + " == " + angkaJuga + " = " + samsama);
console.log(samsama);

// perbandingan === atau bersama tipe data
samsama = angkaJuga === angka;

console.log(angka + " === " + angkaJuga + " = " + samsama);
// console.log(samsama);

console.log(false && false);

// console
// console.info("hay");
// console.warn("warn");
// console.error("error");
// console.debug("debug");
// console.log("log");

// console.info(angka);
// console.info(angkaJuga);
// console.info(oey);
// console.info(text);
// console.info(nuo);
// console.info(num);
// console.info(samsama);

const nama = "Dwi Susanto";
let kelas = "Informatika II";
let hobby = "Nge-Game";
let alamat = "Jl. Dago Elos IV no.407";
let age = 9;

const bio = `
Nama    : ${nama}
Kelas   : ${kelas}
Hobby   : ${hobby}
Alamat  : ${alamat}
Umur    : ${age}
`;

console.info(bio);

// Parsing
const x = "290";
const y = 2;
const j = 1.0;
const q = "504Davie";
const c = NaN;
const v = undefined;

const sum = Number(x) + y;

console.info(j);
console.info(parseInt(q));
console.info(sum);

console.info(v == "undefined");

console.info("");

// Array
const arr = [];

arr.push("hey");
arr.push(0);
arr.push("mamank");
arr.push("Abah Gemink");
arr.push("Agus Jubaedah");

arr[1] = "lo";

lenArr = arr.length;

console.table(arr);
console.info(lenArr);

delete arr[0];

console.table(arr);
console.info(lenArr);

// Object
const obj = {};

obj["name"] = nama;
obj["kelas"] = kelas;
obj["hobby"] = hobby;
obj["alamat"] = alamat;
obj["umur"] = age;

console.table(obj);

delete obj["alamat"];
console.table(obj);

obj["alamat"] = alamat;
console.table(obj);

const lenObj = obj;

console.table(obj);
console.info(lenObj);

console.log("");

const person = `
    Nama    :   ${obj.name}
    Umur    :   ${obj.umur}
    Kelas   :   ${obj.kelas}
    Hobby   :   ${obj.hobby}
    Alamat  :   ${obj.alamat}
`;

// Pengkondisian
obj.umur = 15;

console.log(person);

if (27 <= obj.umur) {
  console.log(`${obj.name} itu tuek`);
} else if (18 <= obj.umur) {
  console.log(`${obj.name} itu pemuda dewasa`);
} else if (14 <= obj.umur) {
  console.log(`${obj.name} itu remaja`);
} else if (10 <= obj.umur) {
  console.log(`${obj.name} itu anak menuju remaja`);
} else if (5 <= obj.umur) {
  console.log(`${obj.name} itu anak`);
} else if (3 <= obj.umur) {
  console.log(`${obj.name} itu balita`);
} else {
  console.log(`${obj.name} itu bayi`);
}

// nyoba function
function myName(obj) {
  console.log(obj.name);
}

myName(obj);

function myHobby(obj) {
  console.log(obj.hobby);
}

myHobby(obj);

// nyoba slice and splice
arr[0] = "niu";

arr;

we = arr.slice(-4, -1);

we;

we = arr.splice();

we;

// undefined null and NaN
let u;
let w = NaN;
let b = null;

u; // undefined is special value from js, this variable is decralered but not defined->
w; // Not a Number special is value from js ->
b; // null is special value from js, null is assigned that means its empty ->

// typeOf
console.log(w, typeof w);
console.log(u, typeof u);
console.log(b, typeof b);
console.log(arr, typeof arr);
console.log(text, typeof text);

// in Operator
arr;
arr.push(9);
arr;

function inOps(arr) {
  if (3 in arr) {
    console.log(`${arr[3]} is existed`);

    if (9 in arr) {
      console.log("boom"); // in Operator untuk men verif index / property saja, tidak untuk mencari value.
    } else {
      console.log("index ke 9 tidak ada.");
    }
  } else {
    console.log("what?");
  }
}

inOps(arr);

// Ternary Operator
const nilai = 70;

const ucapan = nilai >= 80 ? "Selamat anda lulus, dengan nilai A" : "Selamat anda lulus dengan nilai B";

ucapan;

// function with return value
function tambah(a, b) {
  let sum = a + b;
  return sum;
}

let nilaii = tambah(5, 90);

nilaii;
