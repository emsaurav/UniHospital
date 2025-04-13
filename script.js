// Toggle Menu Function
function toggleMenu() {
    const navLinks = document.getElementById("navLinks")
    navLinks.classList.toggle("show")
}

// Slideshow Functionality
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".hero img")
    let currentSlide = 0

    function showSlide(index) {
        slides.forEach((slide) => slide.classList.remove("active"))
        slides[index].classList.add("active")
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length
        showSlide(currentSlide)
    }

    // Change slide every 5 seconds
    setInterval(nextSlide, 5000)

    // Active Navigation Link
    const sections = document.querySelectorAll("section")
    const navLinks = document.querySelectorAll(".nav-links a")

    window.addEventListener("scroll", () => {
        let current = ""

        sections.forEach((section) => {
            const sectionTop = section.offsetTop
            const sectionHeight = section.clientHeight
            if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id")
            }
        })

        navLinks.forEach((link) => {
            link.classList.remove("active")
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active")
            }
        })
    })

    // Implement Lazy Loading for Images
    const lazyImages = document.querySelectorAll("img[data-src]")

    if ("IntersectionObserver" in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const img = entry.target
                    img.src = img.dataset.src
                    img.classList.add("loaded")
                    imageObserver.unobserve(img)
                }
            })
        })

        lazyImages.forEach((img) => {
            imageObserver.observe(img)
        })
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        lazyImages.forEach((img) => {
            img.src = img.dataset.src
        })
    }

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
        const navLinks = document.getElementById("navLinks")
        const menuToggle = document.querySelector(".menu-toggle")

        const isClickInsideNav = navLinks.contains(event.target)
        const isClickOnToggle = menuToggle.contains(event.target)

        if (!isClickInsideNav && !isClickOnToggle && navLinks.classList.contains("show")) {
            navLinks.classList.remove("show")
        }
    })
})

// Function to show the contact form
function openContactForm() {
    document.getElementById("contactForm").style.display = "flex";
}

// Function to hide the contact form
function closeContactForm() {
    document.getElementById("contactForm").style.display = "none";
}

// Attach event listener to the "Contact Now" button
document.addEventListener("DOMContentLoaded", function () {
    const contactButton = document.querySelector(".btn");
    if (contactButton) {
        contactButton.addEventListener("click", openContactForm);
    }
});
