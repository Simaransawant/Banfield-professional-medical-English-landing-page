// Toggle FAQ answers
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question) => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});document.addEventListener('DOMContentLoaded', () => {
    const enrollButtons = document.querySelectorAll('.cta-btn, .cta-btn-secondary');
    const modal = document.getElementById('enroll-modal'); // Ensure this matches your HTML
    const closeBtn = document.querySelector('.modal-close');

    enrollButtons.forEach(button => {
        button.addEventListener('click', () => {
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.course-carousel');
    const cards = document.querySelectorAll('.course-card');
    const cardWidth = cards[0].offsetWidth + 30; // Including margin
    const totalCards = cards.length;
    const totalWidth = cardWidth * totalCards;
    
    // Clone first set of cards to create the looping effect
    const carouselClone = carousel.cloneNode(true);
    carousel.appendChild(carouselClone);
    carousel.style.width = `${totalWidth * 2}px`;

    let currentPosition = 0;
    const slideDuration = 3000; // Slide every 3 seconds

    const moveCarousel = () => {
        currentPosition -= cardWidth;
        if (Math.abs(currentPosition) >= totalWidth) {
            // Reset position to start after moving past the original width
            carousel.style.transition = 'none'; // Disable transition for reset
            carousel.style.transform = `translateX(0)`;
            currentPosition = 0;
            setTimeout(() => {
                carousel.style.transition = `transform 0.5s ease-in-out`; // Re-enable transition
                currentPosition -= cardWidth;
                carousel.style.transform = `translateX(${currentPosition}px)`;
            }, 50); // Small delay to ensure smooth transition
        } else {
            carousel.style.transform = `translateX(${currentPosition}px)`;
        }
    };

    setInterval(moveCarousel, slideDuration); // Change slide every 3 seconds

    // Pause animation on hover
    document.querySelector('.course-carousel-wrapper').addEventListener('mouseover', () => {
        carousel.style.transition = 'none'; // Disable transition on hover
    });

    document.querySelector('.course-carousel-wrapper').addEventListener('mouseout', () => {
        carousel.style.transition = `transform 0.5s ease-in-out`; // Re-enable transition
    });
});
