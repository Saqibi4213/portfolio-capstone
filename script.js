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
  socialIcons: ['images/linkedin.png', 'images/GitHub.png', 'images/fb.png', 'images/WhatsApp.png'],
  skillIcons: ['images/html-5 2.png', 'images/css-3 2.png', 'images/java-script 2.png'],
};
const homeSection = document.getElementById('home');
const aboutSection = document.getElementById('about');
homeSection.querySelector('#home-image').src = userData.homeImage;
homeSection.querySelector('#home-title').innerHTML = userData.homeTitle;
homeSection.querySelector('#home-name').textContent = userData.homeName;
homeSection.querySelector('#home-role').innerHTML = userData.homeRole;
homeSection.querySelector('#home-description').textContent = userData.homeDescription;

aboutSection.querySelector('#about-image').src = userData.aboutImage;
aboutSection.querySelector('#about-title').innerHTML = userData.aboutTitle;
aboutSection.querySelector('#about-role').innerHTML = userData.aboutRole;
aboutSection.querySelector('#about-description').textContent = userData.aboutDescription;

const socialIcons = homeSection.querySelectorAll('.social-icons img');
socialIcons.forEach((icon, index) => {
  icon.src = `${userData.socialIcons[index]}`;
});

const skillIcons = aboutSection.querySelectorAll('.about-skills li img');
skillIcons.forEach((icon, index) => {
  icon.src = `${userData.skillIcons[index]}`;
});

const skillNames = aboutSection.querySelectorAll('.about-skills li span.yellow-text');
skillNames.forEach((skill, index) => {
  skill.textContent = userData.skillNames[index];
  skill.style.color = '#ffcc00';
});

const coloredElements = document.querySelectorAll('.color');
coloredElements.forEach((element) => {
  element.style.color = '#ffcc00';
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
  const liveLinkIcon = document.createElement('i');
  liveLinkIcon.classList.add('fas', 'fa-external-link-alt');
  liveLink2.appendChild(liveLinkIcon);
  liveLink2.appendChild(document.createTextNode(''));
  screenshotSlider.appendChild(liveLink2);

const sourceLink2 = document.createElement('a');
  sourceLink2.classList.add('source-link');
  sourceLink2.href = sourceLink;
  sourceLink2.target = '_blank';
  const sourceLinkIcon = document.createElement('i');
  sourceLinkIcon.classList.add('fab', 'fa-github');
  sourceLink2.appendChild(sourceLinkIcon);
  sourceLink2.appendChild(document.createTextNode(''));
  screenshotSlider.appendChild(sourceLink2);
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
      project.sourceLink
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
    url: 'https://link-to-certificate1',
    imageSrc:'images/responsive.png'
  },
  {
    title: 'JavaScript Algorithms',
    url: 'https://link-to-certificate2',
    imageSrc: 'images/js.png'
  }
];

function generateCertificateItems() {
  const certificateDescriptionElement = document.querySelector('.certificate-description');
  const certificateGridElement = document.querySelector('.certificate-grid');
  certificateDescriptionElement.textContent = "I'm mehria asaibi, a junior web developer with a computer science degree with two years of teaching experience, one year as a consultant in an NGO, and 6 months as a volunteer for BUILD VOLUNTEER. I bring a diverse skill set including web development, problem-solving, and communication. I thrive on creating elegant web solutions and contributing to meaningful projects.";
  certificateData.forEach(certificate => {
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
const style = document.createElement('style');
style.textContent = `
  .sent { color: green; }
  .error { color: red; }
`;
document.head.appendChild(style);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (email !== email.toLowerCase()) {
    emailMessage.textContent = 'Email must be in lowercase';
    emailMessage.classList.add('error');
    emailMessage.classList.remove('sent');
  } else {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('email', email);
    formData.append('message', message);

    fetch(formspreeUrl, {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        emailMessage.textContent = 'Message sent successfully';
        emailMessage.classList.add('sent');
        emailMessage.classList.remove('error');
        console.log(`Name: ${name}, Phone: ${phone}, Email: ${email}, Message: ${message}`);
        alert('Message sent successfully!');
      } else {
        emailMessage.textContent = 'Message sent successfully.';
        emailMessage.classList.add('error');
        emailMessage.classList.remove('sent');
      }
    })
    .catch(error => {
      emailMessage.textContent = 'Message sent successfully.';
      emailMessage.classList.add('sent');
      emailMessage.classList.remove('error');
      console.error('Error:', error);
    });
  }
});
