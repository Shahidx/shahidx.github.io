document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Set active nav link based on current path
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    // If we're at the root, treat it as index.html
    const isRoot = currentPath.endsWith('/') || currentPath === '';
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentPath.endsWith(linkPath) || (isRoot && linkPath === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Simple contact form submission (prevent default for demo if using formspree, let it submit naturally)
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            // No custom logic needed if using formspree, it handles it
        });
    }
});
