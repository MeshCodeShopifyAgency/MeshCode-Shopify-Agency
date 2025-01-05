// Page Load Fade-In
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Scroll Animation
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.hidden');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 100) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});

// Smooth Scroll Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Testimonials Slider
$(document).ready(function() {
    let currentIndex = 0;
    const slides = $('.testimonial-slide');
    const totalSlides = slides.length;

    // Show the first slide
    $(slides[currentIndex]).show();

    // Show next slide
    $('.next').click(function() {
        $(slides[currentIndex]).hide();
        currentIndex = (currentIndex + 1) % totalSlides;
        $(slides[currentIndex]).fadeIn();
    });

    // Show previous slide
    $('.prev').click(function() {
        $(slides[currentIndex]).hide();
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        $(slides[currentIndex]).fadeIn();
    });
});

// Form Submission with Formspree Integration
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const form = event.target;
    const formMessage = document.getElementById('form-message');

    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
    })
    .then(response => {
        if (response.ok) {
            formMessage.textContent = 'Thank you for your message! We will get back to you shortly.';
            form.reset(); // Reset form fields
        } else {
            formMessage.textContent = 'Oops! Something went wrong. Please try again.';
        }
    })
    .catch(error => {
        formMessage.textContent = 'Thank you for your message! We will get back to you shortly.';
        form.reset();
    });
});

const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");

hamburger.addEventListener("click", () =>{
    navbar.classList.toggle("active");
});