// Слайдер
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function showSlide(index) {
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;
    
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    slides[slideIndex].classList.add('active');
}

prevBtn.addEventListener('click', () => {
    slideIndex--;
    showSlide(slideIndex);
});

nextBtn.addEventListener('click', () => {
    slideIndex++;
    showSlide(slideIndex);
});

// Автосмена слайдов каждые 5 секунд
setInterval(() => {
    slideIndex++;
    showSlide(slideIndex);
}, 5000);

// Плавная прокрутка
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Лайтбокс для галереи
document.querySelectorAll('.gallery-grid img').forEach(img => {
    img.addEventListener('click', function() {
        const lightbox = document.createElement('div');
        lightbox.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2000;
            cursor: pointer;
        `;
        
        const fullImg = document.createElement('img');
        fullImg.src = this.src;
        fullImg.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            object-fit: contain;
            border-radius: 10px;
        `;
        
        lightbox.appendChild(fullImg);
        document.body.appendChild(lightbox);
        
        lightbox.addEventListener('click', () => {
            document.body.removeChild(lightbox);
        });
    });
});