const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
  const userData = {
    homeImage: 'images/Employee.png',
    homeImage: 'images/Ellipse 45.png',
    homeTitle: 'Hello there, I`m',
    homeName: 'Mehria Saqibi',
    homeRole: 'I`m a Junior web developer',
    homeDescription: 'I`m Mehria Saqibi, a passionate junior web developer with a computer science degree. I thrive on turning complex problems into elegant web solutions.',
    aboutImage: 'images/undraw_portfolio_update_re_jqnp 1.png',
    aboutTitle: 'About Me',
    aboutRole: 'Junior Developer',
    aboutDescription: "I'm Mehria Saqibi, a junior web developer with a Computer Science degree. With two years of teaching experience, one year as a consultant in an NGO, and a year as a translator for RumieBuilD VOLUNTEER, I bring a diverse skill set including web development, problem-solving, and communication. I thrive on creating elegant web solutions and contributing to meaningful projects.",
    socialIcons: ['images/linkedin.png', 'images/GitHub.png', 'images/fb.png', 'images/WhatsApp.png'],
    skillIcons: ['images/html-5 2.png', 'images/css-3 2.png', 'images/java-script 2.png']
  };
  document.getElementById("home-image").src = userData.homeImage;
  document.getElementById("home-title").textContent = userData.homeTitle;
  document.getElementById("home-name").textContent = userData.homeName;
  document.getElementById("home-role").textContent = userData.homeRole;
  document.getElementById("home-description").textContent = userData.homeDescription;
  document.getElementById("about-image").src = userData.aboutImage;
  document.getElementById("about-title").textContent = userData.aboutTitle;
  document.getElementById("about-role").textContent = userData.aboutRole;
  document.getElementById("about-description").textContent = userData.aboutDescription;
  const socialIcons = document.querySelectorAll(".social-icons img");
  socialIcons.forEach((icon, index) => {
    icon.src = `${userData.socialIcons[index]}`;
  });
  const skillIcons = document.querySelectorAll(".about-skills li img");
  skillIcons.forEach((icon, index) => {
    icon.src = `${userData.skillIcons[index]}`;
  });
 const projects = [
  {
    title: '1: Survey Form:',
    description: 'This is simple survey form project my first work as junior developer using html css ',
    images:['images/survey-form.png', 'images/survey-form.png'],
    longDescription: 'The Survey Form project is a pivotal milestone in my journey as a junior web developer, showcasing my foundational skills in HTML and CSS. This project represents more than just a form; its a testament to my understanding of web development principles and my ability to create user-centric interfaces',
    technologies: ['HTML', 'CSS'],
    liveLink: 'https://saqibi4213.github.io/survey-form/',
    sourceLink: 'https://github.com/Saqibi4213/survey-form.git',
  },
  {
    title: '2: Tribute Page:',
    description:'This is simple project using html and css and project is about Ahmad shah baba ',
    images: ['images/atribute-page.png',
    'images/T1.png', 'images/T2.png', 'images/T3.png'],
    longDescription: 'The Tribute Page project is an homage to Ahmad Shah Baba, a revered historical figure known for his significant contributions and leadership in Afghanistans history. Through this project, I aimed to create a visually compelling and informative web page that celebrates his life and achievements.',
    technologies: ['HTML', 'CSS'],
      liveLink: 'https://saqibi4213.github.io/tribute-page',
      sourceLink: 'https://github.com/Saqibi4213/tribute-page.git',
  },
  {
    title: '3: Product Landing page:',
    description:  'This is product landing page using html css and the project is about Skin Care',
    images: ['images/skin-care.png', 'images/S1.png', 'images/S2.png', 'images/S3.png'],
    longDescription: 'The Product Landing Page project is a dedicated platform showcasing a range of skin care products. Designed with HTML and CSS, this project aims to captivate visitors with its aesthetic appeal and functional layout.',
    technologies: ['HTML', 'CSS'],
      liveLink: 'https://saqibi4213.github.io/skin-care/',
      sourceLink: 'https://github.com/Saqibi4213/skin-care.git',
  },
  {
    title: '4: Coffee shop:',
    description: 'This is Coffee shop website using html and css',
    images: ['images/CO1.png', 'images/CO2.png', 'images/CO3.png', 'images/CO4.png'],
    longDescription:  'The Coffee Shop Website project showcases a virtual cafe experience built with HTML and CSS. It features an inviting design that highlights coffee varieties, menu options, and an easy-to-navigate layout.',
    technologies: ['HTML', 'CSS'],
    liveLink: 'https://saqibi4213.github.io/product-landing-page/',
    sourceLink: 'https://github.com/Saqibi4213/product-landing-page.git',
  },
  {
    title: '5: Portfolio:',
    description: 'This is my portfolio using html and css',
    images: ['images/mehr1.png', 'images/P1.png','images/P2.png', 'images/P3.png', 'images/P4.png',],
    longDescription:'My portfolio showcases my projects and skills using a clean and professional design. Built entirely with HTML and CSS, it highlights my work and provides a platform to showcase my capabilities as a web developer.',
    technologies: ['HTML', 'CSS'],
    liveLink: 'https://saqibi4213.github.io/my-portfolio/',
    sourceLink: 'https://github.com/Saqibi4213/my-portfolio',
  },
  {
    title: '6: Roman Numeral Converter:',
    description:  'Using this project user can convert number to roman',
    images: ['images/roman.png', 'images/R1.png'],
    longDescription: 'The Roman Numeral Converter project allows users to convert Arabic numerals into Roman numerals and vice versa. Built with HTML, CSS, and JavaScript, it provides a simple and intuitive interface for converting between the two numeral systems.',
    technologies: ['HTML', 'CSS', 'JS'],
    liveLink: 'https://saqibi4213.github.io/Roman-numeral-converter/',
    sourceLink: 'https://github.com/Saqibi4213/Roman-numeral-converter',
  },
  {
    title: '7: palindrome-checker:',
    description:  'palindrome-checker is for the help of user to search word palindrome',
    images: ['images/palindrome.png', 'images/PA1.png'],
    longDescription:  'The Palindrome Checker project is a helpful tool that allows users to determine whether a given word or phrase is a palindrome. Implemented using HTML, CSS, and JavaScript, it provides a straightforward interface where users can input text and instantly check if it reads the same backward and forward.',
    technologies: ['HTML', 'CSS', 'JS'],
    liveLink: 'https://saqibi4213.github.io/palindrome-checker/',
    sourceLink: 'https://github.com/Saqibi4213/palindrome-checker',
  },
  {
    title: '8: Phone Number Validator:',
    description:  'The Telephone Number Validator is designed to validate telephone numbers using HTML, CSS, and JavaScript. This application ensures users enter valid telephone numbers in the correct format.',
    images: ['images/phone-validator.png', 'images/N1.png', 'images/N2.png'],
    longDescription:'The Telephone Number Validator project is a web application built with HTML, CSS, and JavaScript. It validates and ensures that users enter telephone numbers in the correct format, providing instant feedback on validity.',
    technologies: ['HTML', 'CSS', 'JS'],
    liveLink: 'https://saqibi4213.github.io/Telephone-Number-Validator/',
    sourceLink: 'https://github.com/Saqibi4213/Telephone-Number-Validator',
  },
  {
    title:'9: Cash-register:',
    description: 'This project is a simple Cash Register application built with HTML, CSS, and JavaScript.',
    images: [ 'images/cash reg.png', 'images/C1.png', 'images/C2.png'],
    longDescription: 'The Cash Register project is a web application developed using HTML, CSS, and JavaScript. It simulates a basic cash register interface, allowing users to calculate totals, manage transactions, and generate receipts. Its designed for simplicity and practical use in learning basic arithmetic operations and handling transactions.',
    technologies: ['HTML', 'CSS', 'JS'],
    liveLink: 'https://saqibi4213.github.io/Cash-register/',
    sourceLink: 'https://github.com/Saqibi4213/Cash-register',
  },
  {
    title: '10: Pokemon-search-App:',
    description:   'The Pokemon Search App is a web application that allows users to search for and view detailed information about various Pokemon. Built with HTML, CSS, and JavaScript.',
    images: ['images/pokemn.png', 'images/PO1.png', 'images/PO2.png'],
    longDescription:'The Pokemon Search App is a web-based application designed for users to explore and learn about different Pokemon creatures. It offers a comprehensive search feature where users can find detailed information and statistics of their favorite Pokemon.',
    technologies: ['HTML', 'CSS', 'JS'],
    liveLink: 'https://saqibi4213.github.io/Pokemon-search-App/',
    sourceLink: 'https://github.com/Saqibi4213/Pokemon-search-App',
  },
];

const projectsContainer = document.getElementById("projects");
projects.forEach((project) => {
  const projectElement = document.createElement("div");
  projectElement.classList.add("project");
  const titleElement = document.createElement("h2");
  titleElement.textContent = project.title;
  const descriptionElement = document.createElement("div");
  descriptionElement.classList.add("description");
  descriptionElement.textContent = project.description;
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");
  const image = document.createElement("img");
  image.src = project.images[0];
  const viewScreenshotsButton = document.createElement("button");
  viewScreenshotsButton.classList.add("view-screenshots");
  viewScreenshotsButton.textContent = "View Screenshots";
  viewScreenshotsButton.addEventListener("click", () => {
    showProjectPopup(project.images, project.longDescription);
  });
  imageContainer.appendChild(image);
  imageContainer.appendChild(viewScreenshotsButton);
  projectElement.appendChild(titleElement);
  projectElement.appendChild(descriptionElement);
  projectElement.appendChild(imageContainer);
  projectsContainer.appendChild(projectElement);
});

const projectPopup = document.querySelector(".project-popup");
const closeButton = document.querySelector(".project-popup .close-button");
const screenshotSlider = document.querySelector(".project-popup .screenshot-slider");
function showProjectPopup(screenshots, longDescription) {
  projectPopup.style.display = "flex";
  screenshotSlider.innerHTML = "";
  screenshots.forEach((screenshot) => {
    const screenshotElement = document.createElement("img");
    screenshotElement.src = screenshot;
    screenshotSlider.appendChild(screenshotElement);
  });

  const longDescriptionElement = document.createElement("p");
  longDescriptionElement.textContent = longDescription;
  screenshotSlider.appendChild(longDescriptionElement);
}

closeButton.addEventListener("click", () => {
  projectPopup.style.display = "none";
});
const certificateData = [
  {
    title: "Responsive Web Design",
    url: 'https://link-to-certificate1',
    imageSrc:'images/responsive.png'
  },
  {
    title: "JavaScript Algorithms and Data Structures",
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
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  if (email !== email.toLowerCase()) {
    emailMessage.textContent = 'Email must be in lowercase';
    emailMessage.classList.add('error');
    emailMessage.classList.remove('success');
  } else {
    emailMessage.textContent = 'Message sent successfully';
    emailMessage.classList.add('success');
    emailMessage.classList.remove('error');
    console.log(`Name: ${name}, Phone: ${phone}, Email: ${email}, Message: ${message}`);
    alert('Message sent successfully!');
  }
  form.reset();
});