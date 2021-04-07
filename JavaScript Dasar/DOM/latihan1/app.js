// DOM Selector
const btn = document.querySelector(".btnColor");
btn.addEventListener("click", () => {
  // Random Color Generator
  const r = Math.round(Math.random() * 256);
  const g = Math.round(Math.random() * 256);
  const b = Math.round(Math.random() * 256);

  //   console.log(`rgb(${r},${g}, ${b})`);
  document.body.style.backgroundColor = `rgb(${r},${g}, ${b})`;
});

// declare slider
const r = document.querySelector("input[name=r]");
const g = document.querySelector("input[name=g]");
const b = document.querySelector("input[name=b]");

// red slider
r.addEventListener("input", () => {
  document.body.style.backgroundColor = `rgb(${r.value}, ${g.value}, ${b.value})`;
});

// green slider
g.addEventListener("input", () => {
  document.body.style.backgroundColor = `rgb(${r.value}, ${g.value}, ${b.value})`;
});

// blue slider
b.addEventListener("input", () => {
  document.body.style.backgroundColor = `rgb(${r.value}, ${g.value}, ${b.value})`;
});
