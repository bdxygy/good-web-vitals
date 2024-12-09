document.addEventListener("DOMContentLoaded", function () {
  // Bad Practice: Inline blocking script
  let currentIndex = 0;
  const slides = document.querySelectorAll(".carousel-slide");
  setInterval(() => {
    slides.forEach((slide, index) => {
      slide.style.display = index === currentIndex ? "block" : "none";
    });
    currentIndex = (currentIndex + 1) % slides.length;
  }, 3000); // Switch slides every 3 seconds
});
