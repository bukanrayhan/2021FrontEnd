//  match
const match = [];

// func
function suit() {
  let p = prompt("pilih gajah, orang atau semut?");
  let comp = Math.random();
  let hasil;

  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 34 && comp < 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }

  if (p == comp) {
    hasil = "Seri!";
  } else if (p === "gajah") {
    hasil = comp === "orang" ? "Kamu Menang" : "Kamu Kalah";
  } else if (p === "orang") {
    hasil = comp === "gajah" ? "Kamu Kalah" : "Kamu Menang";
  } else if (p === "semut") {
    hasil = comp === "gajah" ? "Kamu Menang" : "Kamu Kalah";
  } else {
    hasil = "Pilihan yang kamu masukan salah!";
  }

  alert(`Kamu: ${p} vs Comp: ${comp}\n\n${hasil}`);

  // pushing the match
  const newMatch = {
    person: p,
    computer: comp,
    result: hasil,
  };
  match.push(newMatch);
}

// suit Game
function suitGame() {
  let main = true;
  while (main) {
    suit();

    main = confirm("Main lagi?");
  }

  alert("Terima kasih sudah bermain.");
}

suitGame();

console.log(match);
// console.log(JSON.stringify(match));
