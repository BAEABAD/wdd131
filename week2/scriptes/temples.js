// DOM Elements
const hamburgerMenu = document.querySelector('.hamburger-menu');
const closeMenu = document.querySelector('.close-menu');
const nav = document.querySelector('nav');
const currentYearEl = document.getElementById('currentYear');
const lastModifiedEl = document.getElementById('lastModified');

// Toggle navigation menu
function toggleMenu() {
  if (nav.classList.contains('active')) {
    nav.classList.remove('active');
    hamburgerMenu.style.display = 'flex';
    closeMenu.style.display = 'none';
  } else {
    nav.classList.add('active');
    hamburgerMenu.style.display = 'none';
    closeMenu.style.display = 'block';
  }
}

// Event listeners for menu toggle
hamburgerMenu.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);

// Close menu when clicking outside of it
document.addEventListener('click', function(event) {
  const isClickInsideNav = nav.contains(event.target);
  const isClickOnHamburger = hamburgerMenu.contains(event.target);
  const isClickOnClose = closeMenu.contains(event.target);
  
  if (nav.classList.contains('active') && !isClickInsideNav && !isClickOnHamburger && !isClickOnClose) {
    toggleMenu();
  }
});

// Close menu when window is resized to desktop size
window.addEventListener('resize', function() {
  if (window.innerWidth >= 768 && nav.classList.contains('active')) {
    nav.classList.remove('active');
    hamburgerMenu.style.display = 'flex';
    closeMenu.style.display = 'none';
  }
});

// Update current year
function updateYear() {
  const currentYear = new Date().getFullYear();
  currentYearEl.textContent = currentYear;
}

// Update last modified date
function updateLastModified() {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  
  const lastModified = new Date(document.lastModified);
  lastModifiedEl.textContent = lastModified.toLocaleDateString('en-US', options);
}

// Initialize date elements
updateYear();
updateLastModified();

// Add smooth scrolling for better user experience
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Close the mobile menu if it's open
      if (nav.classList.contains('active')) {
        toggleMenu();
      }
    }
  });
});

// Add loading animation for images
const templeImages = document.querySelectorAll('figure img');

templeImages.forEach(img => {
  // Set initial opacity
  img.style.opacity = '0';
  img.style.transition = 'opacity 0.5s ease';
  
  // When image loads, fade it in
  img.addEventListener('load', function() {
    img.style.opacity = '1';
  });
  
  // If image is already cached and loaded
  if (img.complete) {
    img.style.opacity = '1';
  }
});