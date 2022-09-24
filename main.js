// create a constant for hamburger menu
const ham = document.querySelector('.ham');

// create a constant for menu icon
const menu = document.querySelector('.menu');

// create a constant for menu lists
const lists = document.querySelectorAll('.list');

// making the hamburger button clickable and close/open menu on click
ham.addEventListener('click', () => {
  ham.classList.toggle('active');
  menu.classList.toggle('in-active');
});

const spreadList = [...lists];
spreadList.forEach((list) => {
  list.addEventListener('click', () => {
    ham.classList.toggle('active');
    menu.classList.toggle('in-active');
  });
});

// --------------------------Button toggle ends------------------------------

// ---------------- storing data in arrays -------------

const projects = [{
  projectTitle2: 'Futuristic Gyms',
  projectTitle: 'Futuristic Gyms',
  projectImage: 'futuristicGymsDesktop.png',
  demo: 'See Project',
  source: 'See Source',
  description2: 'A capstone project built by me. Webpage built based on a new gym launch. The website was created with html, pure CSS and pure JavaScript. No framework or library used in the project. You can check the soure and also view the live demo of the project by clicking on any of the buttons below',
  description: 'A capstone project built by me. Webpage built based on a new gym launch. The website was created with html, pure CSS and pure JavaScript. No framework or library used in the project.',
  technology: ['Bootstrap', 'Html', 'css', 'JavaScript'],
  sourceCode: 'https://github.com/kennyegun24/Futuristic-Gyms',
  liveDemo: 'https://kennyegun24.github.io/Futuristic-Gyms/',
  class: 'bg1',
}, {
  projectTitle2: 'Awesome Books',
  projectImage: 'AwesomeBooksDesktopLists.png',
  projectTitle: 'Awesome Books',
  demo: 'See Project',
  source: 'See Source',
  description2: 'A mini book list project. Built to store user lists of books into the machine local storage. It was created with only HTML, pure CSS nd Pure javaScript, without any library or framework used. You can view both source code and live version of this project by clicking on either of the buttons below.',
  description: 'A mini book list project. Built to store user lists of books into the machine local storage. It was created with only HTML, pure CSS nd Pure javaScript, without any library or framework used.',
  technology: ['Bootstrap', 'Html', 'css', 'JavaScript'],
  sourceCode: 'https://github.com/kennyegun24/AwesomeBooks',
  liveDemo: 'https://KennyEgun24.github.io/AwesomeBooks/',
  class: 'bg2',
}, {
  projectTitle2: 'Multi Post Stories',
  projectImage: 'secondpage.svg',
  projectTitle: 'My Todo-List',
  demo: 'See Project',
  source: 'See Source',
  description2: 'Just a dummy webpage initially created to be my portfolio, created with only HTML and javascript with no template guide. Zero functionality. Just a dummy webpage, on interractive.',
  description: 'A mini Todo-List project. Built to store user lists of books into the machine local storage. It was created with only HTML, pure CSS nd Pure javaScript, without any library or framework used.',
  technology: ['Bootstrap', 'Html', 'css', 'javaScript'],
  sourceCode: '',
  liveDemo: '',
  class: 'bg3',
}, {
  projectTitle2: 'Multi Post Stories',
  projectImage: 'image.jpeg',
  projectTitle: 'Professional works',
  demo: 'See Project',
  source: 'See Source',
  description2: 'Just a dummy webpage initially created to be my portfolio, created with only HTML and javascript with no template guide. Zero functionality. Just a dummy webpage, on interractive.',
  description: 'Just a dummy webpage initially created to be my portfolio, created with only HTML and javascript with no template guide. Zero functionality. Just a dummy webpage, on interractive.',
  technology: ['Bootstrap', 'Html', 'css', 'javaScript'],
  sourceCode: '',
  liveDemo: '',
  class: 'bg4',
}, {
  projectTitle2: 'Multi Post Stories',
  projectImage: 'secondpage.svg',
  projectTitle: 'Professional works',
  demo: 'See Project',
  source: 'See Source',
  description2: 'Just a dummy webpage initially created to be my portfolio, created with only HTML and javascript with no template guide. Zero functionality. Just a dummy webpage, on interractive.',
  description: 'Just a dummy webpage initially created to be my portfolio, created with only HTML and javascript with no template guide. Zero functionality. Just a dummy webpage, on interractive.',
  technology: ['Bootstrap', 'Html', 'css', 'javaScript'],
  sourceCode: '',
  liveDemo: '',
  class: 'bg5',
}, {
  projectTitle2: 'Multi Post Stories',
  projectImage: 'image1.jpeg',
  projectTitle: 'Professional works',
  demo: 'See Project',
  source: 'See Source',
  description2: 'Just a dummy webpage initially created to be my portfolio, created with just HTML and javascript with no template guide. Zero functionality. Just a dummy webpage, on interractive.',
  description: 'Just a dummy webpage initially created to be my portfolio, created with only HTML and javascript with no template guide. Zero functionality. Just a dummy webpage, on interractive.',
  technology: ['Bootstrap', 'Html', 'CSS', 'javaScript'],
  sourceCode: '',
  liveDemo: '',
  class: 'bg6',
},
];
// ----------- array ends ----------

const modalSection = document.querySelector('.prof');
const card = document.querySelector('.biew');
const header = document.querySelector('.nav');
const about = document.querySelector('.about');
const works = document.querySelector('.hi');

// --------------- iterating through the stored data --------------

projects.forEach((project) => {
  const div = document.createElement('div');
  const btn2 = document.createElement('div');

  div.innerHTML = `
  <div class="pro ${project.class}">
  <div class="fh">
  <h2 class="white pro1">${project.projectTitle}</h2>
  <p class="white pro2">${project.description}</p>
  <ul class="pro4 flex">
  <li class="pro5 white">${project.technology[1]}</li>
  <li class="pro5 white">${project.technology[2]}</li>
  <li class="pro5 white">${project.technology[3]}</li>
  </ul>
  </div>
  </div>
  `;
  btn2.innerHTML = '<p class="white orangebg btn2">View project</p>';

  div.classList.add('sl');
  div.append(btn2);

  btn2.addEventListener('click', () => {
    card.style.display = 'block';
    document.body.style.overflow = 'hidden';
    modalSection.style.filter = 'blur(2px)';
    header.style.filter = 'blur(2px)';
    about.style.filter = 'blur(3px)';
    works.style.filter = 'blur(3px)';
    card.innerHTML = `
  <div class="view">
      <div class="second flex align justbtw">
          <h2 class="se">${project.projectTitle2}</h2>
          <div class="burg">
              <div class="bur1"></div>
              <div class="bur2"></div>
              <div class="bur3"></div>
          </div>
      </div>
      <ul class="lang2 flex">
          <li>${project.technology[1]}</li>
          <li>${project.technology[3]}</li>
          <li>${project.technology[2]}</li>
      </ul>
  <div class="flexit">
      <div class="vi">
          <img class="mod" src=./images/${project.projectImage} alt="background image">
      </div>

      <div class="vie">
          <p class="p">${project.description2}</p>
          <ul class="flex align see">
              <li><a class="white" href="${project.liveDemo}">See Project</a></li>
              <li><a class="white" href="${project.sourceCode}">See Source</a></li>
          </ul>
      </div>
  </div>
  </div>
  `;
    const burg = document.querySelector('.burg');
    burg.addEventListener('click', () => {
      card.style.display = 'none';
      document.body.style.overflow = 'initial';
      modalSection.style.filter = 'none';
      header.style.filter = 'none';
      about.style.filter = 'none';
      works.style.filter = 'none';
    });
  });

  modalSection.append(div);
});

// ---------Form Validation--------------

const nameError = document.querySelector('#spanName');
const submitError = document.querySelector('#submitError');
const emailErr = document.querySelector('#spanMail');
const textErr = document.querySelector('#spanText');

function nameErr() {
  const names = document.querySelector('.name').value;
  const name = document.querySelector('#name');
  if (names.length === 0) {
    nameError.innerHTML = 'Required';
    nameError.style.color = 'red';
    name.style.border = '1px solid red';
    return false;
  }
  if (!names.match(/^[a-zA-Za]*\s[a-zA-Za]*$/)) {
    nameError.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    nameError.style.color = 'red';
    name.style.border = '1px solid red';
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  nameError.style.color = 'green';
  name.style.border = '1px solid green';
  return true;
}

function emailError() {
  const emails = document.querySelector('.email').value;
  const email = document.querySelector('#email');
  if (emails.length === 0) {
    emailErr.innerHTML = 'Required';
    emailErr.style.color = 'red';
    email.style.border = '1px solid red';
    return false;
  }
  if (!emails.match(/^[a-z-0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z-0-9-]*\.[a-z]+(?:\.[a-z-0-9-]+)*$/)) {
    emailErr.innerHTML = '<i class="fa-solid fa-circle-xmark"></i> lowercase only ';
    emailErr.style.color = 'red';
    email.style.border = '1px solid red';
    return false;
  }
  emailErr.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  emailErr.style.color = 'green';
  email.style.border = '1px solid green';
  return true;
}

function textareaError() {
  const textareas = document.querySelector('.textarea').value;
  const required = 30;
  const left = required - textareas.length;
  if (left > 0) {
    textErr.innerHTML = `${left} <i class="fa-solid fa-circle-xmark"></i>`;
    textErr.style.color = 'red';
    return false;
  }
  textErr.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  textErr.style.color = 'green';
  return true;
}

function validateForm() {
  if (!nameErr() || !emailError() || !textareaError()) {
    submitError.style.display = 'block';
    submitError.innerHTML = 'please fix';
    submitError.style.color = 'red';
    setTimeout(() => { submitError.style.display = 'none'; }, 4000);
    return false;
  }
  return true;
}
validateForm();

// --------------- storing data in local storage ---------

// select the class of name input
const Name = document.querySelector('.name');
const NameValue = localStorage.getItem('formName');

if (NameValue) {
  Name.value = NameValue;
}
// select the class of email input
const Email = document.querySelector('.email');
const EmailValue = localStorage.getItem('formEmail');

if (EmailValue) {
  Email.value = EmailValue;
}
// select the class of textarea
const Texted = document.querySelector('.textarea');
const formTextValue = localStorage.getItem('formText');

if (formTextValue) {
  Texted.value = formTextValue;
}

Name.addEventListener('input', (e) => {
  localStorage.setItem('formName', e.target.value);
});
Email.addEventListener('input', (e) => {
  localStorage.setItem('formEmail', e.target.value);
});
Texted.addEventListener('input', (e) => {
  localStorage.setItem('formText', e.target.value);
});

// CV DISPLAY
const certs = [{
  certImage: 'expe6gzj_1663585247656[1].svg',
  certDescription: 'HTML and CSS certificate of completion. Issued by Microvese',
}, {
  certImage: 'zz1r9nox_1660230534588[1](3).svg',
  certDescription: 'Intro to Web Development. Issued by Microvese',
},
];

const btn3 = document.querySelector('.btn3');
const curriculaVitae = document.querySelector('.curriculaVitae');
const foot = document.querySelector('.foot');
const section2 = document.querySelector('.section2');
const abouts = document.querySelector('.about');
const section1 = document.querySelector('.section1');

btn3.addEventListener('click', () => {
  curriculaVitae.style.display = 'block';
  curriculaVitae.innerHTML = `
  <div class="cvDiv"> 
  <div class="cvDivTwo">
      <img src="/images/expe6gzj_1663585247656[1].svg" class="cvPassport" width="100%" alt="">
      <h3 class="cvDivTwoHeader">
          Contact
      </h3>
      <hr class="curLine">
      <ul class="cvDivTwoUl">
          <li>Blk N18, Flat 3, Abesan Estate</li>
          <li>Ipaja,</li>
          <li>Lagos State</li>
          <li>Nigeria.</li>
      </ul>
      <ul class="cvDivTwoUl2">
          <li>+234-80-254-6478-9</li>
          <li>kennyegun240@email.com</li>
          <li><a href="">kenny_eLiasUTD</a></li>
      </ul>

      <h3 class="cvDivTwoHeader2">
          Skills
      </h3>
      <hr class="curLine">
      <ul class="cvDivTwoUl3">
          <li>Communication Skills</li>
          <li>Leadership Skills</li>
          <li>Ability to work alone</li>
          <li>Team Leadership</li>
          <li>Goals Oriented</li>
          <li>Team Building</li>
          <li>Positive Value</li>
      </ul>
  </div>
  <div class="cvDivThree">
      <div class="cvHam">
          <div class="cvHam1"></div>
          <div class="cvHam2"></div>
          <div class="cvHam3"></div>
        </div>
      <h2 class="cvDivThreeHeader">
          Kenny Egun
      </h2>
      <h3 class="cvDivThreeHeader2">
          Software Developer
      </h3>
      <ul class="cvDivThreeUl">
          <li class="cvVert">Male</li>
          <li class="cvVert">Jan 29 2001</li>
          <li>Lagos, Nigeria</li>
      </ul>
      <h3 class="cvDivThreeHeader3">
          Citizenship: Nigeria
      </h3>
      <p class="cvPara">
          I decided to venture into the software development world, 
          full stack to be precise, early this year. I started learning python before 
          I decided to start from scratch with HTML and CSS. It was a very great journey learning new skills, 
          and I am still learning new skills to top up myself. Furthermore, 
          I am able to work in a remote environment as this was part of my training 
          in the institution I learned how to code.
      </p>
      <h3 class="cvDivThreeHeader4">
          Education History
      </h3>
      <hr class="curLine2">
      <ul class="cvDivThreeUl2">
          <li class="natDip">Higher National Diploma</li>
          <li class="yabaTech">Yaba College of Technology</li>
          <li class="yabaTech">Year 2020 - present</li>
      </ul>
      <h3 class="cvDivThreeHeader5">
          Languages and Frameworks
      </h3>
      <hr class="curLine2">
      <ul class="cvDivThreeUl3">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Ruby</li>
          <li>React</li>
          <li>Redux</li>
          <li>BootStrap</li>
          <li>Rails</li>
      </ul>
      <h3 class="cvDivThreeHeader5">
          Certifications
      </h3>
      <hr class="curLine2">
      <div class="cvImagesDiv">
      </div>
  </div>
</div>`;
  const cvImagesDiv = document.querySelector('.cvImagesDiv');
  certs.forEach((cert) => {
    const ul = document.createElement('ul');
    ul.innerHTML = `
              <li class="cvDivCerts">${cert.certDescription}</li>
          <img src="./images/${cert.certImage}" class="cvImages" alt="">
          `;
    cvImagesDiv.classList.add('cvImagesDiv');
    cvImagesDiv.append(ul);

    foot.style.display = 'none';
    section2.style.display = 'none';
    abouts.style.display = 'none';
    section1.style.display = 'none';

    const cvHam = document.querySelector('.cvHam');

    cvHam.addEventListener('click', () => {
      curriculaVitae.style.display = 'none';
      foot.style.display = 'block';
      section2.style.display = 'block';
      abouts.style.display = 'block';
      const { width } = window.screen;
      if (width > 765) {
        section1.style.display = 'flex';
      } else {
        section1.style.display = 'block';
      }
    });
  });
});