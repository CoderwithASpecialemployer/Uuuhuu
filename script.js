// Dark‑Mode Toggle mit Speicherung
const modeBtn = document.getElementById("modeBtn");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const stored = localStorage.getItem("theme");
if (stored === "dark" || (!stored && prefersDark)) {
  enableDark();
} else {
  disableDark();
}
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

// Scroll‑Reveal Animation
const els = document.querySelectorAll(".reveal");
function revealOnScroll() {
  const h = window.innerHeight;
  els.forEach(e => {
    if (e.getBoundingClientRect().top < h - 100) {
      e.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Back‑to‑Top Button
const toTop = document.getElementById("toTop");
window.addEventListener("scroll", () => {
  toTop.style.display = window.scrollY > 300 ? "flex" : "none";
});
toTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Stats Counter Animation
window.addEventListener("load", () => {
  document.querySelectorAll(".num").forEach(c => {
    const target = +c.dataset.target;
    const step = target / 50;
    (function update() {
      let current = +c.innerText;
      if (current < target) {
        c.innerText = Math.ceil(current + step);
        setTimeout(update, 40);
      } else {
        c.innerText = target;
      }
    })();
  });
});
