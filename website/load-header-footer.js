// Load header and footer into pages
document.addEventListener('DOMContentLoaded', function() {
    // Load header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            initNavigation();
        })
        .catch(error => console.error('Error loading header:', error));

    // Load footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
});

// Initialize navigation (active page highlighting and mobile menu)
function initNavigation() {
    // Get current page name from URL
    let currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    // Handle index page
    if (currentPage === '' || currentPage === 'index') {
        currentPage = 'index';
    }
    
    // Highlight active page in desktop navigation
    const navLinks = document.querySelectorAll('.nav-link[data-page]');
    navLinks.forEach(link => {
        if (link.getAttribute('data-page') === currentPage) {
            link.classList.add('text-lff-blue', 'font-semibold', 'active');
            link.classList.remove('text-gray-700');
        }
    });
    
    // Highlight active page in mobile navigation
    const mobileLinks = document.querySelectorAll('#mobile-menu a[data-page]');
    mobileLinks.forEach(link => {
        if (link.getAttribute('data-page') === currentPage) {
            link.classList.add('text-lff-blue', 'font-semibold');
            link.classList.remove('text-gray-700');
        }
    });
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
}
