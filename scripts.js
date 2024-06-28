const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < carousel.children.length - 2) {
        currentIndex++;
        updateCarousel();
    }
});

function updateCarousel() {
    const offset = currentIndex * 50; // 50% is the width of each item
    carousel.style.transform = `translateX(-${offset}%)`;
}

