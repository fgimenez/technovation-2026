// Sistema de navegación para presentaciones
let currentSlide = 1;
let totalSlides = 0;

function initPresentation(total) {
    totalSlides = total;
    showSlide(currentSlide);

    // Keyboard navigation
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') changeSlide(-1);
        if (event.key === 'ArrowRight') changeSlide(1);
    });
}

function showSlide(n) {
    const slides = document.getElementsByClassName('slide');
    const slideNumber = document.getElementById('slideNumber');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (n > totalSlides) currentSlide = 1;
    if (n < 1) currentSlide = totalSlides;

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }

    slides[currentSlide - 1].classList.add('active');
    slideNumber.textContent = `${currentSlide} / ${totalSlides}`;

    prevBtn.disabled = currentSlide === 1;
    nextBtn.disabled = currentSlide === totalSlides;
}

function changeSlide(n) {
    currentSlide += n;
    showSlide(currentSlide);
}
