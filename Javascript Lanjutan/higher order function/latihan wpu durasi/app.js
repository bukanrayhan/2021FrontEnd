// Ambil semua elemen video
const videos = Array.from(document.querySelectorAll("ul li"));

// filter video js
const jsVideos = videos.filter((vid) => vid.textContent.includes("Javascript"));

// ambil Duration
let jsDuration = jsVideos
  .map((attDur) => attDur.getAttribute("duration"))

  // ubah durasi menjadi number, ubah menit menjadi detik
  .map((waktu) => {
    const parts = waktu.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })

  // jumlahkan detik
  .reduce((total, detik) => total + detik);

// jam
const h = Math.floor(jsDuration / 3600);
// jsDuration = ;

// menit
const m = Math.floor((jsDuration - h * 3600) / 60);

// detik
const s = jsDuration - h * 3600 - m * 60;

// DOM Target
const jmlVids = document.querySelector(".jml-video");
const duration = document.querySelector(".total-durasi");

// masukan data
jmlVids.innerHTML = `${jsVideos.length}`;
duration.innerHTML = `${h} Jam, ${m} Menit, ${s} Detik.`;
