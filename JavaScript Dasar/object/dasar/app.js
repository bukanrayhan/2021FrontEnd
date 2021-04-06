// Cara membuat object di Javascript
// 1. Object literal
// const Mhs = {}
const Mhs = {
  isHuman: true,
};

// 2. dengan fungsi tanpa constructor
function CreateMhs(nama) {
  const mhs = {};
  mhs.nama = nama;
  return mhs;
}

// 3. dengan fungsi constructor => perlu di-ingat kalo ingin buat function constructor itu tidak bisa memakai arrow function.
const FuncMhs = function (nama) {
  this.nama = nama;
};

// 4. dengan Class constructor
class ObjMhs {
  constructor() {
    this.isHuman = true;
  }
  sapa(nama = this.nama) {
    this.nama = nama;
    console.log(`apakah ${this.nama} manusia? ${this.isHuman}`);
  }
}

// 5. dengan Object.create(proto) => proto itu contoh object-nya. Jadi mirip inherit, jadi dia ngambil sifat si proto gitu dah
const ehan = Object.create(Mhs);

// console.log(ehan.isHuman);

const jajang = new ObjMhs();
