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
