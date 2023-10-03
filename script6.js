const filterButtons = document.querySelectorAll('.filter-button');
const images = document.querySelectorAll('.image');
function filterImages(category) {
    images.forEach(image => {
        const imageTags = image.getAttribute('data-tags').split(' ');
        if (category === 'all' || imageTags.includes(category)) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-filter');
        filterImages(category);
    });
});
