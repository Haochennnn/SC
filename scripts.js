var swiper = new Swiper('.Slider' , {
    autoplay:true,
    speed:2500,
    loop:true,
    parallax:true,

    navigation:{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },
});

        document.addEventListener('DOMContentLoaded', () => {
            const toggleButton = document.querySelector('.navbar-toggle');
            const menu = document.querySelector('.navbar-menu');
        
            toggleButton.addEventListener('click', () => {
                menu.classList.toggle('active');
            });
        });
        
        function changeImage(imageSrc) {
            const displayedImage = document.getElementById('displayedImage');
            displayedImage.style.opacity = 0;
        
            setTimeout(() => {
                displayedImage.src = imageSrc;
                displayedImage.style.opacity = 1;
            }, 500);
        }
        function changeImage(element, imageSrc) {
            const displayedImage = document.getElementById('displayedImage');
            const thumbnails = document.querySelectorAll('.thumbnail');
            
            // Remove 'active' class from all thumbnails
            thumbnails.forEach(thumbnail => {
                thumbnail.classList.remove('active');
            });
        
            // Add 'active' class to the clicked thumbnail
            element.classList.add('active');
        
            // Change main image with a smooth transition
            displayedImage.style.opacity = 0;
        
            setTimeout(() => {
                displayedImage.src = imageSrc;
                displayedImage.style.opacity = 1;
            }, 500);
        }
        let currentIndex = 0;

        function moveSlide(direction) {
            const slides = document.querySelector('.slider');
            const totalSlides = document.querySelectorAll('.image-box').length;
            const visibleSlides = 3; // Number of visible slides
        
            // Update current index based on direction
            currentIndex += direction;
        
            // Loop around slides
            if (currentIndex < 0) currentIndex = totalSlides - visibleSlides;
            if (currentIndex > totalSlides - visibleSlides) currentIndex = 0;
        
            // Move slider
            const offset = -currentIndex * (200 + 20); // 200px (width) + 20px (gap)
            slides.style.transform = `translateX(${offset}px)`;
        }   