const carousel = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const searchInput = document.getElementById('amazon-search');
const searchBtn = document.getElementById('search-btn');

let currentIndex = 0;

function showSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    currentIndex = index;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));

// Auto slide every 5 seconds
setInterval(() => showSlide(currentIndex + 1), 5000);

// Search functionality
function performSearch() {
    const query = searchInput.value.trim();
    if (query) {
        window.location.href = `https://www.amazon.com/s?k=${encodeURIComponent(query)}`;
    }
}

searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

console.log("Amazon Clone Logic Updated: Links and Search now functional.");
