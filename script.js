document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menu-icon');
  const navLinks = document.getElementById('nav-links');
  const headLine = document.getElementById('headline');
  const intro = document.getElementById('intro');

  const toggleMenu = () => {
    if (navLinks.style.display === 'flex') {
      navLinks.style.display = 'none';
      menuIcon.innerHTML = '&#9776';
    }
  };
  menuIcon.addEventListener('click', toggleMenu);
  navLinks.querySelectorAll('a').forEach((item) => {
    item.addEventListener('click', () => {
      navLinks.style.display = 'none';
      menuIcon.innerHTML = '&#9776';
    });
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navLinks.style.display = 'flex';
      menuIcon.style.display = 'none';
    } else {
      navLinks.style.display = 'none';
      menuIcon.style.display = 'block';
      menuIcon.innerHTML = '&#9776;';
    }
  });

  if (window.innerWidth > 768) {
    navLinks.style.display = 'flex';
    menuIcon.style.display = 'none';
  } else {
    navLinks.style.display = 'none';
    menuIcon.style.display = 'block';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menu-icon');
  const navLinks = document.getElementById('nav-links');

  menuIcon.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
      navLinks.style.display = 'none';
      menuIcon.innerHTML = '&#9776;';
    } else {
      navLinks.style.display = 'flex';
      menuIcon.innerHTML = '&times;';
    }
  });

  const navLinksItems = navLinks.querySelectorAll('a');
  navLinksItems.forEach((item) => {
    item.addEventListener('click', () => {
      navLinks.style.display = 'none';
      menuIcon.innerHTML = '&#9776;';
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navLinks.style.display = 'flex';
      menuIcon.style.display = 'none';
    } else {
      navLinks.style.display = 'none';
      menuIcon.style.display = 'block';
      menuIcon.innerHTML = '&#9776;';
    }
  });

  if (window.innerWidth > 768) {
    navLinks.style.display = 'flex';
    menuIcon.style.display = 'none';
  } else {
    navLinks.style.display = 'none';
    menuIcon.style.display = 'block';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const myName = 'Mehria Saqibi';
  const myIntro = `Hello I am <span>${myName}</span>, a passionate web development student from <span class="highlight">Afghanistan</span>. I love learning new technologies and enhancing my skills in web development. I am dedicated to continuous improvement and always eager to take on new challenges.`;
  const headline = document.getElementById('headline');
  const intro = document.getElementById('intro');
  headline.innerHTML = myName;
  intro.innerHTML = myIntro;
  document.querySelectorAll('.highlight').forEach((element) => {
    element.style.fontWeight = 'bold';
    element.style.color = 'blue';
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const skillsExperiences = [
    {
      skill: 'HTML',
      experience: 'junior programmer',
    },
    {
      skill: 'CSS',
      experience: 'junior developer',
    },
    {
      skill: 'JavaScript',
      experience: 'junior coder',
    },
    {
      skill: 'GIT',
      experience: '6 months',
    },
    {
      skill: 'GITHUB',
      experience: '6 months',
      link: 'https://github.com/Saqibi4213',
    },
  ];

  const skillsExperiencesContainer = document.getElementById('skills-experiences');
  skillsExperiencesContainer.innerHTML = skillsExperiences.map((item) => `
      <div class="skill-experience">
      <h3>${item.skill}</h3>
      <p>${item.experience}</p>
      </div>
      `).join('');
  const certificationImage = document.getElementById('certification-image');
  const certificationLink = document.getElementById('certification-link');
  certificationImage.src = 'images/responsive.png';
  certificationLink.href = 'https://www.freecodecamp.org/certification/Mehria-Saqibi/responsive-web-design';
});

document.addEventListener('DOMContentLoaded', () => {
  const projects = [
    {
      title: 'Survey Form',
      description: 'This is simple survey form project my first work as junior developer using html css',
      image: 'images/survey-form.png',
      screenshots: ['images/survey-form.png'],
      technologies: ['HTML', 'CSS'],
      liveLink: 'https://saqibi4213.github.io/survey-form/',
      sourceLink: 'https://github.com/Saqibi4213/survey-form.git',
    },
    {
      title: 'Tribute Page',
      description: 'This is simple project using html and css and project is about Ahmad shah baba',
      image: 'images/atribute-page.png',
      screenshots: ['path/to/project2-screenshot1.jpg', 'path/to/project2-screenshot2.jpg'],
      technologies: ['HTML', 'CSS'],
      liveLink: 'https://saqibi4213.github.io/tribute-page',
      sourceLink: 'https://github.com/Saqibi4213/tribute-page.git',
    },
    {
      title: 'Product Landing page',
      description: 'This is product landing page using html css and the project is about Skin Care',
      image: 'images/skin-care.png',
      screenshots: ['path/to/project2-screenshot1.jpg', 'path/to/project2-screenshot2.jpg'],
      technologies: ['HTML', 'CSS'],
      liveLink: 'https://saqibi4213.github.io/skin-care/',
      sourceLink: 'https://github.com/Saqibi4213/skin-care.git',
    },
    {
      title: 'Coffee shop',
      description: 'This is Coffee shop website using html and css',
      image: 'images/project-landing.png',
      screenshots: ['path/to/project2-screenshot1.jpg', 'path/to/project2-screenshot2.jpg'],
      technologies: ['HTML', 'CSS'],
      liveLink: 'https://saqibi4213.github.io/product-landing-page/',
      sourceLink: 'https://github.com/Saqibi4213/product-landing-page.git',
    },
    {
      title: 'Portfolio',
      description: 'This is my portfolio using html and css',
      image: 'images/mehr1.png',
      screenshots: ['path/to/project2-screenshot1.jpg', 'path/to/project2-screenshot2.jpg'],
      technologies: ['HTML', 'CSS'],
      liveLink: 'https://saqibi4213.github.io/my-portfolio/',
      sourceLink: 'https://github.com/Saqibi4213/my-portfolio',
    },
    {
      title: 'Roman Numeral Converter',
      description: 'Using this project user can convert number to roman',
      image: 'images/roman.png',
      screenshots: ['path/to/project2-screenshot1.jpg', 'path/to/project2-screenshot2.jpg'],
      technologies: ['HTML', 'CSS', 'JS'],
      liveLink: 'https://saqibi4213.github.io/Roman-numeral-converter/',
      sourceLink: 'https://github.com/Saqibi4213/Roman-numeral-converter',
    },
    {
      title: 'palindrome-checker',
      description: 'palindrome-checker is for the help of user to search word palindrome',
      image: 'images/palindrome.png',
      screenshots: ['path/to/project2-screenshot1.jpg', 'path/to/project2-screenshot2.jpg'],
      technologies: ['HTML', 'CSS', 'JS'],
      liveLink: 'https://saqibi4213.github.io/palindrome-checker/',
      sourceLink: 'https://github.com/Saqibi4213/palindrome-checker',
    },
    {
      title: 'Telephone-Number-Validator',
      description: 'The Telephone Number Validator is  designed to validate telephone numbers using HTML, CSS, and JavaScript. This   application ensures users enter valid telephone numbers in the correct format.',
      image: 'images/phone-validator.png',
      screenshots: ['path/to/project2-screenshot1.jpg', 'path/to/project2-screenshot2.jpg'],
      technologies: ['HTML', 'CSS', 'JS'],
      liveLink: 'https://saqibi4213.github.io/Telephone-Number-Validator/',
      sourceLink: 'https://github.com/Saqibi4213/Telephone-Number-Validator',
    },
    {
      title: 'Cash-register',
      description: 'This project is a simple Cash Register application built with HTML, CSS, and JavaScript. ',
      image: 'images/cash reg.png',
      screenshots: ['path/to/project2-screenshot1.jpg', 'path/to/project2-screenshot2.jpg'],
      technologies: ['HTML', 'CSS', 'JS'],
      liveLink: 'https://saqibi4213.github.io/Cash-register/',
      sourceLink: 'https://github.com/Saqibi4213/Cash-register',
    },
    {
      title: 'Pokemon-search-App',
      description: 'The Pokemon Search App is a web application that allows users to search for and view detailed information about various Pokemon. Built with HTML, CSS, and JavaScript.',
      image: 'images/pokemn.png',
      screenshots: ['path/to/project2-screenshot1.jpg', 'path/to/project2-screenshot2.jpg'],
      technologies: ['HTML', 'CSS', 'JS'],
      liveLink: 'https://saqibi4213.github.io/Pokemon-search-App/',
      sourceLink: 'https://github.com/Saqibi4213/Pokemon-search-App',
    },
  ];

  const worksSection = document.getElementById('works');
  const projectPopup = document.getElementById('project-popup');
  const closeBtn = document.getElementById('close-btn');
  const openProjectPopup = (index) => {
    const project = projects[index];
    document.getElementById('popup-title').textContent = project.title;
    document.getElementById('popup-description').textContent = project.description;
    document.getElementById('popup-image').src = project.image;
    document.getElementById('live-link').href = project.liveLink;
    document.getElementById('source-link').href = project.sourceLink;
    projectPopup.style.display = 'block';
  };
  projects.forEach((project, index) => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project');
    projectCard.innerHTML = `
    <h3 class="project-title">${project.title}</h3>
    <p class="project-description">${project.description}</p>
    <img src="${project.image}" alt="${project.title}" class="project-image">
    <button class="see-more-btn" data-index="${index}">See More</button>
    `;
    worksSection.appendChild(projectCard);
    const seeMoreBtn = projectCard.querySelector('.see-more-btn');
    seeMoreBtn.addEventListener('click', () => openProjectPopup(index));
  });
  closeBtn.addEventListener('click', () => {
    projectPopup.style.display = 'none';
  });
  window.addEventListener('click', (event) => {
    if (event.target === projectPopup) {
      projectPopup.style.display = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const errorMessage = document.getElementById('error-message');
  const successMessage = document.getElementById('success-message');

  const validateForm = () => {
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
      errorMessage.textContent = 'Please fill out all fields.';
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      errorMessage.textContent = 'Please enter a valid email address.';
      return false;
    }

    if (emailInput.value !== emailInput.value.toLowerCase()) {
      errorMessage.textContent = 'Email must be in lowercase.';
      return false;
    }
    errorMessage.textContent = '';
    return true;
  };
  const formData = JSON.parse(localStorage.getItem('formData')) || {};
  nameInput.value = formData.name || '';
  emailInput.value = formData.email || '';
  messageInput.value = formData.message || '';
  [nameInput, emailInput, messageInput].forEach((input) => {
    input.addEventListener('input', () => {
      formData[input.name] = input.value;
      localStorage.setItem('formData', JSON.stringify(formData));
    });
  });

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validateForm()) {
      const formData = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim().toLowerCase(),
        message: messageInput.value.trim(),
      };
      const formUrl = 'https://formspree.io/your_form_id_here';
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      };
      fetch(formUrl, requestOptions)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          successMessage.textContent = 'Message sent successfully!';
          successMessage.style.display = 'block';
          successMessage.style.color = 'green';
          contactForm.reset();
          localStorage.removeItem('formData');
          setTimeout(() => {
            successMessage.style.display = 'none';
          }, 5000);
        })
        .catch(() => {
          // eslint-disable-next-line no-alert
          alert('There was an issue sending your message. Please try again later.');
        });
    }
  });
});
