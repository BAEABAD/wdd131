// Temple data array
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Additional temples
  {
    templeName: "Salt Lake City",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
  },
  {
    templeName: "Kyiv Ukraine",
    location: "Kyiv, Ukraine",
    dedicated: "2010, August, 29",
    area: 22184,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/134-Kyiv-Ukraine-Temple.jpg"
  }
];

// Function to create temple cards
function createTempleCard(temple) {
  const figure = document.createElement('figure');
  
  const img = document.createElement('img');
  img.src = temple.imageUrl;
  img.alt = temple.templeName;
  img.loading = "lazy";
  
  const figcaption = document.createElement('figcaption');
  
  const name = document.createElement('h3');
  name.textContent = temple.templeName;
  
  const location = document.createElement('p');
  location.textContent = `Location: ${temple.location}`;
  
  const dedicated = document.createElement('p');
  dedicated.textContent = `Dedicated: ${temple.dedicated}`;
  
  const area = document.createElement('p');
  area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;
  
  figcaption.appendChild(name);
  figcaption.appendChild(location);
  figcaption.appendChild(dedicated);
  figcaption.appendChild(area);
  
  figure.appendChild(img);
  figure.appendChild(figcaption);
  
  return figure;
}

// Function to display temples
function displayTemples(filteredTemples = temples) {
  const container = document.getElementById('templeContainer');
  container.innerHTML = '';
  
  filteredTemples.forEach(temple => {
    const card = createTempleCard(temple);
    container.appendChild(card);
  });
}

// Filter functions
function filterOld() {
  const oldTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(',')[0]);
    return year < 1900;
  });
  displayTemples(oldTemples);
}

function filterNew() {
  const newTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(',')[0]);
    return year >= 2000;
  });
  displayTemples(newTemples);
}

function filterLarge() {
  const largeTemples = temples.filter(temple => temple.area > 90000);
  displayTemples(largeTemples);
}

function filterSmall() {
  const smallTemples = temples.filter(temple => temple.area < 10000);
  displayTemples(smallTemples);
}

// Navigation functions
function showSection(section) {
  switch(section) {
    case 'old':
      filterOld();
      break;
    case 'new':
      filterNew();
      break;
    case 'large':
      filterLarge();
      break;
    case 'small':
      filterSmall();
      break;
    case 'home':
    default:
      displayTemples();
  }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  // Display all temples initially
  displayTemples();
  
  // Set current year and last modified date
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent = document.lastModified;
  
  // Hamburger menu functionality
  const hamburger = document.querySelector('.hamburger-menu');
  const closeMenu = document.querySelector('.close-menu');
  const navMenu = document.getElementById('nav-menu');
  
  hamburger.addEventListener('click', () => {
    navMenu.style.display = 'block';
    hamburger.style.display = 'none';
    closeMenu.style.display = 'block';
  });
  
  closeMenu.addEventListener('click', () => {
    navMenu.style.display = 'none';
    closeMenu.style.display = 'none';
    hamburger.style.display = 'flex';
  });
});