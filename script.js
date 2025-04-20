// Dark Mode Toggle
const modeBtn = document.getElementById("modeBtn");
modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  modeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) el.classList.add("visible");
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// "Nach oben"-Button
const toTopBtn = document.getElementById("toTop");
window.addEventListener("scroll", () => {
  toTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

toTopBtn.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);

// Zähler (Stats) animieren
const counters = document.querySelectorAll(".num");
const runCounter = () => {
  counters.forEach(counter => {
    const update = () => {
      const target = +counter.dataset.target;
      const current = +counter.innerText;
      const increment = target / 50;
      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(update, 40);
      } else {
        counter.innerText = target;
      }
    };
    update();
  });
};
window.addEventListener("load", runCounter);
