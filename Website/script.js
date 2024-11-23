const slides = document.querySelector('.slides');
const slideElements = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;



function updateSlidePosition() {
    console.log(`Current Index: ${currentIndex}`);
    console.log(`TranslateX: -${currentIndex * 100}%`);
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    console.log(slides.style.transform); // Log the applied style
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlidePosition();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < slideElements.length - 1) {
        currentIndex++;
        updateSlidePosition();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    currentIndex = 0;
    updateSlidePosition();
});
