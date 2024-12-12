// script.js
const slider = document.querySelector('.slider');
const prevSlideBtn = document.querySelector('.prev-slide');
const nextSlideBtn = document.querySelector('.next-slide');

let slideIndex = 0;

prevSlideBtn.addEventListener('click', () => {
    if (slideIndex > 0) {
        slideIndex--;
    } else {
        slideIndex = slider.children.length - 1;
    }
    updateSlider();
});

nextSlideBtn.addEventListener('click', () => {
    if (slideIndex < slider.children.length - 1) {
        slideIndex++;
    } else {
        slideIndex = 0;
    }
    updateSlider();
});

function updateSlider() {
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Automatically advance slides every 5 seconds
setInterval(() => {
    if (slideIndex < slider.children.length - 1) {
        slideIndex++;
    } else {
        slideIndex = 0;
    }
    updateSlider();
}, 5000);
