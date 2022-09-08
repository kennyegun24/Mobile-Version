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

const projects = [{
  projectTitle2: 'Multi Post Stories',
  projectTitle: 'Professional works',
  projectImage: 'secondpage.svg',
  demo: 'See Project',
  source: 'See Source',
  description2: 'Just a dummy webpage initially created to be my portfolio, created with only HTML and javascript with no template guide. Zero functionality. Just a dummy webpage, on interractive.',
  description: 'Just a dummy webpage initially created to be my portfolio, created with only HTML and javascript with no template guide. Zero functionality. Just a dummy webpage, on interractive.',
  technology: ['Bootstrap', 'Html', 'css'],
  sourceCode: '',
  liveDemo: '',
}, {
  projectTitle2: 'Multi Post Stories',
  projectImage: 'secondpage.svg',
  projectTitle: 'Professional works',
  demo: 'See Project',
  source: 'See Source',
  description2: 'Just a dummy webpage initially created to be my portfolio, created with only HTML and javascript with no template guide. Zero functionality. Just a dummy webpage, on interractive.',
  description: 'Just a dummy webpage initially created to be my portfolio, created with only HTML and javascript with no template guide. Zero functionality. Just a dummy webpage, on interractive.',
  technology: ['Bootstrap', 'Html', 'css'],
  sourceCode: '',
  liveDemo: '',
}, {
  projectTitle2: 'Multi Post Stories',
  projectImage: 'secondpage.svg',
  projectTitle: 'Professional works',
  demo: 'See Project',
  source: 'See Source',
  description2: 'Just a dummy webpage initially created to be my portfolio, created with only HTML and javascript with no template guide. Zero functionality. Just a dummy webpage, on interractive.',
  description: 'Just a dummy webpage initially created to be my portfolio, created with only HTML and javascript with no template guide. Zero functionality. Just a dummy webpage, on interractive.',
  technology: ['Bootstrap', 'Html', 'css'],
  sourceCode: '',
  liveDemo: '',
}, {
  projectTitle2: 'Multi Post Stories',
  projectImage: 'image.jpeg',
  projectTitle: 'Professional works',
  demo: 'See Project',
  source: 'See Source',
  description2: 'Just a dummy webpage initially created to be my portfolio, created with only HTML and javascript with no template guide. Zero functionality. Just a dummy webpage, on interractive.',
  description: 'Just a dummy webpage initially created to be my portfolio, created with only HTML and javascript with no template guide. Zero functionality. Just a dummy webpage, on interractive.',
  technology: ['Bootstrap', 'Html', 'css'],
  sourceCode: '',
  liveDemo: '',
}, {
  projectTitle2: 'Multi Post Stories',
  projectImage: 'secondpage.svg',
  projectTitle: 'Professional works',
  demo: 'See Project',
  source: 'See Source',
  description2: 'Just a dummy webpage initially created to be my portfolio, created with only HTML and javascript with no template guide. Zero functionality. Just a dummy webpage, on interractive.',
  description: 'Just a dummy webpage initially created to be my portfolio, created with only HTML and javascript with no template guide. Zero functionality. Just a dummy webpage, on interractive.',
  technology: ['Bootstrap', 'Html', 'css'],
  sourceCode: '',
  liveDemo: '',
}, {
  projectTitle2: 'Multi Post Stories',
  projectImage: 'image1.jpeg',
  projectTitle: 'Professional works',
  demo: 'See Project',
  source: 'See Source',
  description2: 'Just a dummy webpage initially created to be my portfolio, created with only HTML and javascript with no template guide. Zero functionality. Just a dummy webpage, on interractive.',
  description: 'Just a dummy webpage initially created to be my portfolio, created with only HTML and javascript with no template guide. Zero functionality. Just a dummy webpage, on interractive.',
  technology: ['Bootstrap', 'Html', 'CSS'],
  sourceCode: '',
  liveDemo: '',
},
];

const modalSection = document.querySelector('.prof');
const card = document.querySelector('.biew');
const header = document.querySelector('.nav');
const about = document.querySelector('.about');
const works = document.querySelector('.hi');

projects.forEach((project) => {
  const div = document.createElement('div');
  const btn2 = document.createElement('div');

  div.innerHTML = `
  <div class="pro">
<div class="fh">
<h2 class="white pro1">${project.projectTitle}</h2>
<p class="white pro2">${project.description}</p>
<ul class="pro4 flex">
<li class="pro5 white">${project.technology[1]}</li>
<li class="pro5 white">${project.technology[2]}</li>
<li class="pro5 white">${project.technology[0]}</li>
</ul>
</div>
</div>
  `;
  btn2.innerHTML = '<p class="white orangebg btn2">View project</p>';

  div.classList.add = ('sl');
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
          <li>${project.technology[0]}</li>
          <li>${project.technology[2]}</li>
      </ul>
  <div class="flexit">
      <div class="vi">
          <img class="mod" src=${project.projectImage} alt="background image">
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
