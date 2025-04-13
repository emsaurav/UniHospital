// Toggle mobile menu
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Slideshow functionality
document.addEventListener('DOMContentLoaded', function() {
    // Slideshow
    const slideshowImages = document.querySelectorAll('.slideshow-container img');
    if (slideshowImages.length > 0) {
        let currentSlide = 0;
        
        function showNextSlide() {
            slideshowImages[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slideshowImages.length;
            slideshowImages[currentSlide].classList.add('active');
        }
        
        // Change slide every 5 seconds
        setInterval(showNextSlide, 5000);
    }
    
    // FAQ accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const faqItem = question.parentElement;
                faqItem.classList.toggle('active');
                
                // Update icon
                const icon = question.querySelector('i');
                if (faqItem.classList.contains('active')) {
                    icon.classList.remove('fa-chevron-down');
                    icon.classList.add('fa-chevron-up');
                } else {
                    icon.classList.remove('fa-chevron-up');
                    icon.classList.add('fa-chevron-down');
                }
            });
        });
    }
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message. We will get back to you soon!');
            contactForm.reset();
        });
    }
    
    const appointmentForm = document.querySelector('.appointment-form');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for scheduling an appointment. We will confirm your appointment soon!');
            appointmentForm.reset();
        });
    }
});
