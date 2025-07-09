document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const navbar = document.querySelector('.navbar');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarMenu = document.querySelector('.navbar-menu');
    const navbarLinks = document.querySelectorAll('.navbar-link');
    
    // Change navbar style on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    navbarToggler.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        navbarMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    navbarLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navbarMenu.classList.contains('active')) {
                navbarToggler.setAttribute('aria-expanded', 'false');
                navbarMenu.classList.remove('active');
            }
        });
    });
    
    // Smooth scrolling for anchor links
    navbarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
});