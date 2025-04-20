/* ========== DARK MODE ================================================= */
const modeBtn       = document.getElementById("modeBtn");
const prefersDark   = window.matchMedia("(prefers-color-scheme: dark)").matches;
const storedTheme   = localStorage.getItem("theme");

/* Start‑Zustand */
if (storedTheme === "dark" || (!storedTheme && prefersDark)) enableDark();
else disableDark();

/* Klick‑Schalter */
modeBtn.addEventListener("click", () => {
  document.body.classList.contains("dark") ? disableDark() : enableDark();
});

function enableDark() {
  document.body.classList.add("dark");
  modeBtn.textContent = "☀️";
  localStorage.setItem("theme", "dark");
}
function disableDark() {
  document.body.classList.remove("dark");
  modeBtn.textContent = "🌙";
  localStorage.setItem("theme", "light");
}

/* ========== REVEAL ANIMATION ========================================= */
const revealEls = document.querySelectorAll(".reveal");
function handleReveal() {
  const winH = window.innerHeight;
  revealEls.forEach(el => {
    if (el.getBoundingClientRect().top < winH - 100) el.classList.add("visible");
  });
}
window.addEventListener("scroll", handleReveal);
window.addEventListener("load",  handleReveal);

/* ========== BACK‑TO‑TOP BUTTON ======================================= */
const toTop = document.getElementById("toTop");
window.addEventListener("scroll", () => {
  toTop.style.display = window.scrollY > 300 ? "block" : "none";
});
toTop.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);

/* ========== COUNTER (Stats) ========================================== */
window.addEventListener("load", () => {
  document.querySelectorAll(".num").forEach(counter => {
    const target = +counter.dataset.target;
    const step   = target / 50;
    const update = () => {
      const current = +counter.innerText;
      if (current < target) {
        counter.innerText = Math.ceil(current + step);
        setTimeout(update, 40);
      } else counter.innerText = target;
    };
    update();
  });
});
