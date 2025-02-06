// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navUl = document.querySelector('header nav ul');

mobileMenu.addEventListener('click', () => {
  navUl.classList.toggle('active');
});

// Newsletter Form Submission
const newsletterForm = document.getElementById('newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for subscribing!');
});

// Contact Form Submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Your message has been sent!');
});