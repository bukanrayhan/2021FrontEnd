// const data = [172, 167, 180, 171, 169, 160, 175, 173, 170, 165];
// const data = [5, 6, 7, 3, 2];
const data = [172, 167, 180, 170, 169, 160, 175, 165, 173, 170];
// const data = [70, 72, 69, 67, 54, 60, 49, 75, 59, 63];
console.log(data);
console.log(data.sort());

// mencari median
const median = data.sort().length % 2 === 0 ? `( ${data[data.length / 2 - 1]} + ${data[data.length / 2]} ) / 2 : ${(data[data.length / 2 - 1] + data[data.length / 2]) / 2}` : data[(data.length + 1) / 2 - 1];

console.log(median);

// rata - rata
const xˉ = data.sort().reduce((pre, curr) => pre + curr) / data.length;

console.log(`rata - rata
xˉ : ${xˉ}`);

// modus || masih dipelajari, soon!

// Jangkauan
const range = data.sort().slice(-1) - data.sort().slice(0, 1);
console.log(`range : ${range}`);

// Simpangan Rata - rata
const SR = data.map((curr) => Number(Math.abs(curr - xˉ).toFixed(1))).reduce((prev, curr) => prev + curr);
console.log(`Simpangan Rata - rata 
SR: ${SR}`);

// Simpangan Baku
// varian
const SS = Number(((data.length * data.map((e) => e ** 2).reduce((prev, curr) => prev + curr) - (xˉ * data.length) ** 2) / (data.length * (data.length - 1))).toFixed(2));
console.log(`Varian
s^2 : ${SS}`);

// Standar Deviasi / simpangan baku
const SD = Number(Math.sqrt(SS).toFixed(2));
console.log(`Standar Deviasi
s : ${SD}`);
