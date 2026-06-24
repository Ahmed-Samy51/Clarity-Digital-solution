const track = document.getElementById('track');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let autoplayTimer;

function goToSlide(index) {
  currentIndex = index;
  track.style.transform = `translateX(-${index * 100}%)`; // RTL؟ خليها + بدل -
  dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    goToSlide(i);
    resetAutoplay();
  });
});

function startAutoplay() {
  autoplayTimer = setInterval(() => {
    const next = (currentIndex + 1) % dots.length;
    goToSlide(next);
  }, 4000);
}

function resetAutoplay() {
  clearInterval(autoplayTimer);
  startAutoplay();
}

startAutoplay();