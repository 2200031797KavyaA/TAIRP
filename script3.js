const slider = document.querySelector('.slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const images = document.querySelectorAll('.slider img');
let currentIndex = 0;
function showImage(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
}
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}
prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);
showImage(currentIndex);
