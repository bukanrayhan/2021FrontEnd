// program pengelolaan penumpang angkot

// declare angkot
const angkot = [];

// fungsi tambah penumpang
let addPenumpang = (nama, angkot) => {
  // kalo angkot kosong
  if (angkot.length == 0) {
    angkot.push(nama);
    console.log(`${nama} berhasil menaiki angkot`);
    return angkot;

    // kalo angkot tidak kosong
  } else {
    // kalo ada nama yang sama
    if (angkot.includes(nama)) {
      console.log(`${nama} sudah ada di dalam angkot`);
      return angkot;

      // kalo tidak ada penumpang yang sama
    } else {
      // kalo ada kursi yang kosong secara tidak berurutan
      if (angkot.includes(undefined)) {
        let i = angkot.indexOf(undefined);
        angkot[i] = nama;
        console.log(`${nama} berhasil menaiki angkot`);
        return angkot;

        // kalo kursi diduduki secara berurutan.
      } else {
        angkot.push(nama);
        console.log(`${nama} berhasil menaiki angkot`);
        return angkot;
      }
    }
  }
};

// fungsi penumpang turun
let delPenumpang = (nama, angkot) => {
  if (angkot.includes(nama)) {
    let i = angkot.indexOf(nama);
    angkot[i] = undefined;
    console.log(`${nama} telah turun dari angkot`);
    return angkot;
  } else {
    console.log(`${nama} tidak ada di dalam angkot`);
    return angkot;
  }
};
