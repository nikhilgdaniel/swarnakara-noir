const header = document.querySelector("[data-header]");

window.addEventListener("scroll", () => {
  header.classList.toggle("active", window.scrollY > 30);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.animate(
      [
        { opacity: 0, transform: "translateY(22px)" },
        { opacity: 1, transform: "translateY(0)" }
      ],
      { duration: 700, easing: "cubic-bezier(.2,.8,.2,1)", fill: "forwards" }
    );
    observer.unobserve(entry.target);
  });
}, { threshold: 0.18 });

document.querySelectorAll(".article-section, .founder-letter, .award-card, .media-links, .plans article, .promise, .contact, .hero-panel").forEach((el) => {
  el.style.opacity = "0";
  observer.observe(el);
});
