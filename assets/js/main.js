document.documentElement.classList.add("js");

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
if (reduceMotion.matches) {
  document.querySelectorAll(".brand, .hero h1, .lede, .cta").forEach((el) => {
    el.style.animation = "none";
    el.style.opacity = "1";
    el.style.transform = "none";
  });
}
