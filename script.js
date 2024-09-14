const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const closeBtn = document.querySelector('.nav-links .close-btn');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    closeBtn.style.display = navLinks.classList.contains('show') ? 'block' : 'none';
});

closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('show');
    closeBtn.style.display = 'none';
});

const userData = {
    homeImage: 'images/employe1.png',
    homeTitle: 'Hello there, <span class="color">I`m</span>',
    homeName: 'Mehria Saqibi',
    homeRole: 'I`m a <span class="color">Junior web developer</span>',
    homeDescription: 'I`m Mehria Saqibi, a passionate junior web developer with a computer science degree. I thrive on turning complex problems into elegant web solutions.',
    aboutImage: 'images/undraw_portfolio_update_re_jqnp 1.png',
    aboutTitle: 'About <span class="color">Me</span>',
    aboutRole: '<span class="color">Junior Developer</span>',
    aboutDescription: "I'm Mehria Saqibi, a junior web developer with a Computer Science degree. With two years of teaching experience, one year as a consultant in an NGO, and a year as a translator for RumieBuilD VOLUNTEER, I bring a diverse skill set including web development, problem-solving, and communication. I thrive on creating elegant web solutions and contributing to meaningful projects.",
    socialIcons: [
        { url: 'https://www.linkedin.com/in/mehria-saqibi-a386a41a1', icon: 'fab fa-linkedin' },
        { url: 'https://github.com/Saqibi4213', icon: 'fab fa-github' },
        { url: 'https://www.facebook.com/mehria.1377', icon: 'fab fa-facebook' },
        { url: 'https://wa.me/93704079290', icon: 'fab fa-whatsapp' }
    ],
    skillIcons: ['images/html-5 2.png', 'images/css-3 2.png', 'images/java-script 2.png'],
};

const homeSection = document.getElementById('home');
const aboutSection = document.getElementById('about');

homeSection.querySelector('#home-image').src = userData.homeImage;
homeSection.querySelector('#home-title').innerHTML = userData.homeTitle;
homeSection.querySelector('#home-name').textContent = userData.homeName;
homeSection.querySelector('#home-role').innerHTML = userData.homeRole;
homeSection.querySelector('#home-description').textContent = userData.homeDescription;

const socialIconsContainer = homeSection.querySelector('.social-icons');
socialIconsContainer.innerHTML = '';

userData.socialIcons.forEach(({ url, icon }) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.innerHTML = `<i class="${icon}" aria-hidden="true"></i>`;
    li.appendChild(a);
    socialIconsContainer.appendChild(li);
});

aboutSection.querySelector('#about-image').src = userData.aboutImage;
aboutSection.querySelector('#about-title').innerHTML = userData.aboutTitle;
aboutSection.querySelector('#about-role').innerHTML = userData.aboutRole;
aboutSection.querySelector('#about-description').textContent = userData.aboutDescription;

const skillIcons = aboutSection.querySelectorAll('.about-skills li img');
skillIcons.forEach((icon, index) => {
    icon.src = `${userData.skillIcons[index]}`;
});
const projects = [
  {
    title: '1: Coffee shop:',
    description: 'The Coffee Shop Website project is a virtual café built with HTML and CSS. It features a stylish design highlighting coffee varieties and menu options.',
    images: ['images/CO1.png'],
    longDescription: 'The Coffee Shop Website project creates a virtual café experience with HTML and CSS, showcasing coffee varieties and menu options.',
    technologies: ['HTML', 'CSS'],
    liveLink: 'https://saqibi4213.github.io/product-landing-page/',
    sourceLink: 'https://github.com/Saqibi4213/product-landing-page.git',
  },
  {
    title: '2: Portfolio:',
    description: 'This portfolio, built with HTML and CSS, showcases my projects and skills. It features a clean and professional design to highlight my work.',
    images: ['images/mehr1.png'],
    longDescription: 'My portfolio highlights my projects and skills with a clean, professional HTML and CSS design.',
    technologies: ['HTML', 'CSS'],
    liveLink: 'https://saqibi4213.github.io/my-portfolio/',
    sourceLink: 'https://github.com/Saqibi4213/my-portfolio',
  },
  {
    title: '3: Cash-register:',
    description: 'This project is a basic Cash Register application created with HTML, CSS, and JavaScript. It allows users to manage transactions and generate receipts.',
    images: ['images/cash reg.png'],
    longDescription: 'The Cash Register project is a web app that simulates a basic cash register, letting users calculate totals, manage transactions, and generate receipts.',
    technologies: ['HTML', 'CSS', 'JS'],
    liveLink: 'https://saqibi4213.github.io/Cash-register/',
    sourceLink: 'https://github.com/Saqibi4213/Cash-register',
  },
  {
    title: '4: Pokemon-search-App:',
    description: 'The Pokemon Search App is a web application that allows users to search for and view detailed information about various Pokemon. Built with HTML, CSS, and JavaScript.',
    images: ['images/pokemn.png'],
    longDescription: 'The Pokémon Search App lets users explore and learn about various Pokémon creatures.',
    technologies: ['HTML', 'CSS', 'JS'],
    liveLink: 'https://saqibi4213.github.io/Pokemon-search-App/',
    sourceLink: 'https://github.com/Saqibi4213/Pokemon-search-App',
  },
];
const projectPopup = document.querySelector('.project-popup');
const closeButton = document.querySelector('.project-popup .close-button');
const screenshotSlider = document.querySelector('.project-popup .screenshot-slider');

function showProjectPopup(screenshots, longDescription, technologies, liveLink, sourceLink) {
  projectPopup.style.display = 'flex';
  screenshotSlider.innerHTML = '';
  screenshots.forEach((screenshot) => {
    const screenshotElement = document.createElement('img');
    screenshotElement.src = screenshot;
    screenshotSlider.appendChild(screenshotElement);
  });

  const longDescriptionElement = document.createElement('p');
  longDescriptionElement.textContent = longDescription;
  screenshotSlider.appendChild(longDescriptionElement);

  const technologiesElement = document.createElement('div');
  technologiesElement.classList.add('technologies');
  technologies.forEach((tech) => {
    const techElement = document.createElement('span');
    techElement.textContent = tech;
    technologiesElement.appendChild(techElement);
  });
  screenshotSlider.appendChild(technologiesElement);

  const liveLink2 = document.createElement('a');
  liveLink2.classList.add('live-link');
  liveLink2.href = liveLink;
  liveLink2.target = '_blank';
  // eslint-disable-next-line quotes
  liveLink2.innerHTML = `<i class="fas fa-external-link-alt"></i> Live Link`;
  liveLink2.style.borderBottom = 'none';
  liveLink2.style.textDecoration = 'none';

  const sourceLink2 = document.createElement('a');
  sourceLink2.classList.add('source-link');
  sourceLink2.href = sourceLink;
  sourceLink2.target = '_blank';
  // eslint-disable-next-line quotes
  sourceLink2.innerHTML = `<i class="fab fa-github"></i> Source Code`;
  sourceLink2.style.borderBottom = 'none';
  sourceLink2.style.textDecoration = 'none';

  const linkContainer = document.createElement('div');
  linkContainer.classList.add('link-container');
  linkContainer.style.border = 'none';
  linkContainer.appendChild(liveLink2);
  linkContainer.appendChild(sourceLink2);
  screenshotSlider.appendChild(linkContainer);
}

const projectsContainer = document.getElementById('projects');
projects.forEach((project) => {
  // eslint-disable-next-line prefer-destructuring
  const projectElement = document.createElement('div');
  projectElement.classList.add('project');

  const titleElement = document.createElement('h2');
  titleElement.classList.add('color');
  titleElement.textContent = project.title;

  const descriptionElement = document.createElement('div');
  descriptionElement.classList.add('description');
  descriptionElement.textContent = project.description;

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image-container');
  const image = document.createElement('img');
  // eslint-disable-next-line prefer-destructuring
  image.src = project.images[0];

  const viewScreenshotsButton = document.createElement('button');
  viewScreenshotsButton.classList.add('view-screenshots');
  viewScreenshotsButton.textContent = 'See More';
  viewScreenshotsButton.addEventListener('click', () => {
    showProjectPopup(
      project.images,
      project.longDescription,
      project.technologies,
      project.liveLink,
      project.sourceLink,
    );
  });

  imageContainer.appendChild(image);
  imageContainer.appendChild(viewScreenshotsButton);
  projectElement.appendChild(titleElement);
  projectElement.appendChild(descriptionElement);
  projectElement.appendChild(imageContainer);
  projectsContainer.appendChild(projectElement);
});

closeButton.addEventListener('click', () => {
  projectPopup.style.display = 'none';
});

const certificateData = [
  {
    title: 'Responsive Web Design',
    url: 'https://www.freecodecamp.org/certification/Mehria-Saqibi/responsive-web-design',
    imageSrc: 'images/responsive.png',
  },
  {
    title: 'JavaScript Algorithms',
    url: 'https://www.freecodecamp.org/certification/Mehria-Saqibi/javascript-algorithms-and-data-structures-v8',
    imageSrc: 'images/js.png',
  },
];

function generateCertificateItems() {
  const certificateDescriptionElement = document.querySelector('.certificate-description');
  const certificateGridElement = document.querySelector('.certificate-grid');

  certificateDescriptionElement.textContent = "I'm Mehria Saqibi, a junior web developer with a computer science degree and two years of teaching experience, one year as a consultant in an NGO, and 6 months as a volunteer for BUILD VOLUNTEER. I bring a diverse skill set including web development, problem-solving, and communication. I thrive on creating elegant web solutions and contributing to meaningful projects.";

  certificateData.forEach((certificate) => {
    const certificateItem = document.createElement('a');
    certificateItem.href = certificate.url;
    certificateItem.target = '_blank';
    certificateItem.classList.add('certificate-item');

    const certificateImage = document.createElement('img');
    certificateImage.src = certificate.imageSrc;
    certificateImage.alt = certificate.title;

    const certificateTitle = document.createElement('h3');
    certificateTitle.textContent = certificate.title;

    certificateItem.appendChild(certificateImage);
    certificateItem.appendChild(certificateTitle);
    certificateGridElement.appendChild(certificateItem);
  });
}

generateCertificateItems();
const form = document.querySelector('.contact-form');
const emailMessage = document.querySelector('.email-message');
const formspreeUrl = 'https://formspree.io/f/xrbzqrra';

function saveFormData() {
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const formData = {
    name, phone, email, message,
  };
  localStorage.setItem('contactFormData', JSON.stringify(formData));
}

function populateFormData() {
  const savedData = localStorage.getItem('contactFormData');
  if (savedData) {
    const formData = JSON.parse(savedData);
    document.getElementById('name').value = formData.name;
    document.getElementById('phone').value = formData.phone;
    document.getElementById('email').value = formData.email;
    document.getElementById('message').value = formData.message;
  }
}

populateFormData();

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value;

  if (email !== email.toLowerCase()) {
    emailMessage.textContent = 'Email must be in lowercase';
    emailMessage.classList.add('error');
    emailMessage.classList.remove('sent');
  } else {
    saveFormData();

    const formData = new FormData(form);

    try {
      const response = await fetch(formspreeUrl, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        emailMessage.textContent = 'Message sent successfully';
        emailMessage.classList.add('sent');
        emailMessage.classList.remove('error');
        form.reset();
        localStorage.removeItem('contactFormData');
      } else {
        emailMessage.textContent = 'Failed to send message';
        emailMessage.classList.add('error');
        emailMessage.classList.remove('sent');
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Fetch error:', error);
      emailMessage.textContent = 'Error sending message';
      emailMessage.classList.add('error');
      emailMessage.classList.remove('sent');
    }
  }
});