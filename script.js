document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menu-icon');
  const navLinks = document.getElementById('nav-links');
  const navLinksItems = navLinks.querySelectorAll('a');

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      // eslint-disable-next-line-no-console-error
      console.error(`Section with ID "${id}" not found.`);
    }
  };

  menuIcon.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
      navLinks.style.display = 'none';
      menuIcon.innerHTML = '&#9776;';
    } else {
      navLinks.style.display = 'flex';
      menuIcon.innerHTML = '&times;';
    }
  });

  navLinksItems.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetSectionId = link.getAttribute('href').substring(1);
      scrollToSection(targetSectionId);
      if (window.innerWidth <= 768) {
        navLinks.style.display = 'none';
        menuIcon.innerHTML = '&#9776;';
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const logoElement = document.getElementById('logo');
  const logoText = '♥MEHR♥';
  logoElement.textContent = logoText;
  const myName = '<h2 class ="hello">Hello there,<span class="highlight"> I`m </span></h2>';
  const myIntro = ` I’m a passionate <span class="highlight">web development</span> student. 
  and <span class="highlight">A Junior Web Developer</span> from <span class = "highlight">Afghanistan</span> Over the past few years, I have cultivated a diverse skill set and a deep understanding of various facets of technology through a range of professional experiences. i <span class="highlight">love</span> to learn new things and love my job .`;
  const headline = document.getElementById('headline');
  const intro = document.getElementById('intro');
  headline.innerHTML = myName;
  intro.innerHTML = myIntro;
  document.querySelectorAll('.highlight').forEach((element) => {
    element.style.fontWeight = 'bold';
    element.style.color = '#ED9D02';
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const aboutContent = {
    description: `
  <span class="dark">I am </span>Mehria Saqibi, a dedicated and passionate junior web developer with a Bachelor's degree in Computer Science. Over the past few years, I have cultivated a diverse skill set and a deep understanding of various facets of technology through a range of professional experiences.<br>
  My technical expertise spans across web development,where I specialize in creating elegant and efficient web solutions. I am proficient in HTML, CSS, and JavaScript, and continuously strive to expand my knowledge by learning new technologies and best practices. My projects reflect a commitment to quality and a keen eye for detail, ensuring that every solution I develop is both functional and aesthetically pleasing.`,
    skills: [
      { image: 'images/html-5 2.png', name: 'HTML', alt: 'HTML' },
      { image: 'images/css-3 2.png', name: 'Css', alt: 'CSS' },
      { image: 'images/java-script 2.png', name: 'JavaScript', alt: 'JavaScript' },
    ],
    certifications: [
      { title: 'Responsive Web Design', image: 'images/responsive.png', link: 'https://link-to-certificate1' },
      { title: 'Java Script', image: 'images/js.png', link: 'https://link-to-certificate2' },
    ],
  };
  // about
  const dynamicHeadlines = [
    '<span class="white">About</span> Me!<br>Junior Web Developer',
  ];
  const headlineContainer = document.getElementById('dynamic-headlines');
  dynamicHeadlines.forEach((headlineText) => {
    const headline = document.createElement('h2');
    headline.innerHTML = `<span class="highlight"></span>
    <span class="highlight">${headlineText}</span>`;
    headlineContainer.appendChild(headline);
  });
  const aboutContentDiv = document.getElementById('about-content');
  const skillsExperiencesDiv = document.getElementById('skills-experiences');

  const descriptionSpan = document.createElement('span');
  descriptionSpan.innerHTML = aboutContent.description;
  aboutContentDiv.appendChild(descriptionSpan);

  aboutContent.skills.forEach((skill) => {
    const skillSpan = document.createElement('span');
    skillSpan.textContent = skill.name;
    const skillImage = document.createElement('img');
    skillImage.src = skill.image;
    skillImage.alt = skill.alt;
    skillsExperiencesDiv.appendChild(skillSpan);
    skillsExperiencesDiv.appendChild(skillImage);
  });

  aboutContent.certifications.forEach((cert, index) => {
    const certDiv = document.createElement('div');
    certDiv.classList.add(`cert${index + 1}`);
    certDiv.style.width = '28.13rem';
    certDiv.style.height = '20rem';
    certDiv.style.top = '14.14rem';
    certDiv.style.left = '54.54rem';
    certDiv.style.gap = '0rem';
    certDiv.style.border = '0.313rem 0rem 0rem 0rem';
    certDiv.style.opacity = '1rem';
    const certTitle = document.createElement('h4');
    certTitle.textContent = cert.title;
    certTitle.style.fontFamily = 'Acme, sans-serif';
    certTitle.style.fontSize = '20px';
    certTitle.style.fontWeight = '400';
    certTitle.style.lineHeight = '35.51px';
    certTitle.style.textAlign = 'left';
    certTitle.style.color = '#F9A826';
    certTitle.style.textAlign = 'center';
    const certLink = document.createElement('a');
    certLink.href = cert.link;
    certLink.target = '_blank';
    const certImage = document.createElement('img');
    certImage.src = cert.image;
    certImage.alt = cert.title;
    certImage.style.maxWidth = '28.125rem';
    certImage.style.Top = '36.408rem';
    certImage.style.bottom = '55.40rem';
    certImage.style.left = '54.543rem';
    certImage.style.marginRight = '900rem';
    certImage.style.border = '0.313rem';
    certTitle.textContent = cert.title;
    certImage.style.border = '0.313rem solid #F9A826';
    certImage.style.fontFamily = 'Acme, sans-serif';
    certImage.style.fontSize = '1.25rem';
    certImage.style.fontWeight = '400';
    certImage.style.lineHeight = '1.8rem';
    certImage.style.textAlign = 'left';
    certLink.appendChild(certImage);
    certDiv.appendChild(certTitle);
    certDiv.appendChild(certLink);
    document.getElementById('certification-content').appendChild(certDiv);
  });

  document.querySelectorAll('.highlight').forEach((element) => {
    element.style.fontWeight = 'bold';
    element.style.color = '#F9A826';
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const projects = [
    {
      title: '1: Survey Form:',
      description: 'The Survey Form project is a pivotal milestone in my journey as a junior web developer, showcasing my foundational skills in HTML and CSS. This project represents more than just a form; its a testament to my understanding of web development principles and my ability to create user-centric interfaces',
      longDescription: 'This is simple survey form project my first work as junior developer using html css ',
      image: 'images/survey-form.png',
      screenshots: ['images/survey-form.png'],
      technologies: ['HTML', 'CSS'],
      liveLink: 'https://saqibi4213.github.io/survey-form/',
      sourceLink: 'https://github.com/Saqibi4213/survey-form.git',
    },
    {
      title: '2: Tribute Page:',
      description: 'The Tribute Page project is an homage to Ahmad Shah Baba, a revered historical figure known for his significant contributions and leadership in Afghanistans history. Through this project, I aimed to create a visually compelling and informative web page that celebrates his life and achievements.',
      longDescription: 'This is simple project using html and css and project is about Ahmad shah baba ',
      image: 'images/atribute-page.png',
      screenshots: ['images/T1.png', 'images/T2.png', 'images/T3.png'],
      technologies: ['HTML', 'CSS'],
      liveLink: 'https://saqibi4213.github.io/tribute-page',
      sourceLink: 'https://github.com/Saqibi4213/tribute-page.git',
    },
    {
      title: '3: Product Landing page:',
       description:'The Product Landing Page project is a dedicated platform showcasing a range of skin care products. Designed with HTML and CSS, this project aims to captivate visitors with its aesthetic appeal and functional layout.',
      longDescription:'This is product landing page using html css and the project is about Skin Care',
      image: 'images/skin-care.png',
      screenshots: ['images/S1.png', 'images/S2.png', 'images/S3.png'],
      technologies: ['HTML', 'CSS'],
      liveLink: 'https://saqibi4213.github.io/skin-care/',
      sourceLink: 'https://github.com/Saqibi4213/skin-care.git',
    },
    {
      title: '4: Coffee shop:',
      description: 'The Coffee Shop Website project showcases a virtual cafe experience built with HTML and CSS. It features an inviting design that highlights coffee varieties, menu options, and an easy-to-navigate layout.',
      longDescription:'This is Coffee shop website using html and css',
      image: 'images/project-landing.png',
      screenshots: ['images/'],
      technologies: ['HTML', 'CSS'],
      liveLink: 'https://saqibi4213.github.io/product-landing-page/',
      sourceLink: 'https://github.com/Saqibi4213/product-landing-page.git',
    },
    {
      title: '5: Portfolio:',
      description: 'My portfolio showcases my projects and skills using a clean and professional design. Built entirely with HTML and CSS, it highlights my work and provides a platform to showcase my capabilities as a web developer.',
      longDescription: 'This is my portfolio using html and css',
      image: 'images/mehr1.png',
      screenshots: ['images/P1', 'images/P2.png', 'images/P3.png', 'images/P4.png', 'images/P5.png'],
      technologies: ['HTML', 'CSS'],
      liveLink: 'https://saqibi4213.github.io/my-portfolio/',
      sourceLink: 'https://github.com/Saqibi4213/my-portfolio',
    },
    {
      title: '6: Roman Numeral Converter:',
      description: 'The Roman Numeral Converter project allows users to convert Arabic numerals into Roman numerals and vice versa. Built with HTML, CSS, and JavaScript, it provides a simple and intuitive interface for converting between the two numeral systems.',
      longDescription: 'Using this project user can convert number to roman',
      image: 'images/roman.png',
      screenshots: ['images/R1.png'],
      technologies: ['HTML', 'CSS', 'JS'],
      liveLink: 'https://saqibi4213.github.io/Roman-numeral-converter/',
      sourceLink: 'https://github.com/Saqibi4213/Roman-numeral-converter',
    },
    {
      title: '7: palindrome-checker:',
      description: 'The Palindrome Checker project is a helpful tool that allows users to determine whether a given word or phrase is a palindrome. Implemented using HTML, CSS, and JavaScript, it provides a straightforward interface where users can input text and instantly check if it reads the same backward and forward.',
      longDescription: 'palindrome-checker is for the help of user to search word palindrome',
      image: 'images/palindrome.png',
      screenshots: ['images/PA1.png'],
      technologies: ['HTML', 'CSS', 'JS'],
      liveLink: 'https://saqibi4213.github.io/palindrome-checker/',
      sourceLink: 'https://github.com/Saqibi4213/palindrome-checker',
    },
    {
      title: '8: Phone Number Validator:',
      description:  'The Telephone Number Validator project is a web application built with HTML, CSS, and JavaScript. It validates and ensures that users enter telephone numbers in the correct format, providing instant feedback on validity.',
      longDescription: `The Telephone Number Validator is designed to validate telephone numbers using HTML, CSS, and JavaScript. This application ensures users enter valid telephone numbers in the correct format.`,
      image: 'images/phone-validator.png',
      screenshots: ['images/N1.png', 'images/N2.png'],
      technologies: ['HTML', 'CSS', 'JS'],
      liveLink: 'https://saqibi4213.github.io/Telephone-Number-Validator/',
      sourceLink: 'https://github.com/Saqibi4213/Telephone-Number-Validator',
    },
    {
      title: '9: Cash-register:',
      description: 'The Cash Register project is a web application developed using HTML, CSS, and JavaScript. It simulates a basic cash register interface, allowing users to calculate totals, manage transactions, and generate receipts. Its designed for simplicity and practical use in learning basic arithmetic operations and handling transactions.',
      longDescription: 'This project is a simple Cash Register application built with HTML, CSS, and JavaScript.',
      image: 'images/cash reg.png',
      screenshots: ['images/C1.png', 'images/C2.png'],
      technologies: ['HTML', 'CSS', 'JS'],
      liveLink: 'https://saqibi4213.github.io/Cash-register/',
      sourceLink: 'https://github.com/Saqibi4213/Cash-register',
    },
    {
      title: '10: Pokemon-search-App:',
      description: 'The Pokemon Search App is a web-based application designed for users to explore and learn about different Pokemon creatures. It offers a comprehensive search feature where users can find detailed information and statistics of their favorite Pokemon.',
      longDescription: 'The Pokemon Search App is a web application that allows users to search for and view detailed information about various Pokemon. Built with HTML, CSS, and JavaScript.',
      image: 'images/pokemn.png',
      screenshots: ['images/PO1.png', 'images/PO2.png'],
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
    document.getElementById('popup-description').textContent = project.longDescription; // Display long description in popup
    document.getElementById('popup-images').innerHTML = project.screenshots.map((src) => (
      `<img src="${src}" alt="${project.title} Screenshot">`
    )).join('');
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
      <button class="see-more-btn" data-index="${index}">See More</button>`;
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
 
   // New certificates section code
   const certificationContentDiv = document.getElementById('certification-content');
   const certifications = [
     // ... list of certifications as in the previous instructions ...
   ];
 
   certifications.forEach((cert) => {
     const certDiv = document.createElement('div');
     const certTitle = document.createElement('h4');
     certTitle.textContent = cert.title;
     const certLink = document.createElement('a');
     certLink.href = cert.link;
     certLink.target = '_blank';
     const certImage = document.createElement('img');
     certImage.src = cert.image;
     certImage.alt = cert.title;
     certLink.appendChild(certImage);
     certDiv.appendChild(certTitle);
     certDiv.appendChild(certLink);
     certificationContentDiv.appendChild(certDiv);
   });
 });
