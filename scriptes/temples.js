// Set current year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Set last modified date
document.getElementById('lastModified').textContent = document.lastModified;

// Mobile menu functionality
const hamburger = document.querySelector('.hamburger-menu');
const nav = document.querySelector('nav');
const closeMenu = document.querySelector('.close-menu');
hamburger.addEventListener('click', function() {
  nav.classList.add('active');
  hamburger.style.display = 'none';
  closeMenu.style.display = 'block';
});

closeMenu.addEventListener('click', function() {
  nav.classList.remove('active');
  hamburger.style.display = 'block';
  closeMenu.style.display = 'none';
});

// Close menu when clicking on a link (mobile)
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function() {
    if (window.innerWidth <= 768) {
      nav.classList.remove('active');
      hamburger.style.display = 'block';
      closeMenu.style.display = 'none';
    }
  });
});

// Section navigation functionality
function showSection(section) {
  const h2 = document.querySelector('main h2');
  switch(section) {
    case 'home':
      h2.textContent = 'Sacred Architecture Collection';
      break;
    case 'old':
      h2.textContent = 'Historic Temples';
      break;
    case 'new':
      h2.textContent = 'Modern Temples';
      break;
    case 'large':
      h2.textContent = 'Large Temples';
      break;
    case 'small':
      h2.textContent = 'Small Temples';
      break;
  }
}