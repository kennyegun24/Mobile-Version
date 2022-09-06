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

const spreadLists = [...lists];
spreadLists.forEach((list) => {
  list.addEventListener('click', () => {
    ham.classList.toggle('active');
    menu.classList.toggle('in-active');
  });
});



// --------------------------Button toggle ends------------------------------

// ----------------------------Modal starts----------------------------

// //crete a constant for the model window
// const biew = document.querySelector('.biew')

// //create a constant for modal button in model window
// const burg = document.querySelector('.burg');

// //create a constant for button to pop modal
// const btn = document.querySelector('.btn');

// //create a constant for section2
// const hi = document.querySelector('.hi');

// //create a constant for .prof
// const prof = document.querySelector('.prof');

// //create a constant for nav
// const nav = document.querySelector('.nav');

// //create a constant for section1
// const section1 = document.querySelector('.section1');

// const btn2 = document.querySelector('.btn2');

// //creatng n event listener of click for the hamburger button in the modal
// burg.addEventListener('click', close);
// //creatng n event listener of click for the btn in the window
// btn.addEventListener('click', open);

// btn2.addEventListener('click', open);

// //making the modal display stop when user clicks on window
// window.addEventListener('click', (e) =>{
//     if(e.target == biew) {
//         biew.style.display = 'none';
//         hi.style.filter = 'none';
//         section1.style.filter = 'none';
//         prof.style.filter = 'none';
//         nav.style.filter = 'none';
//         document.body.style.overflow = "initial";
//     }
// })

// //creating function open with its commands
// function open(){
// //setting the modal pop up to block so it will be shown on click
// biew.style.display = 'block';
// // biew.style.overflow = 'scroll';

// //setting section2 hi to blur on btn click
// hi.style.filter = 'blur(3px)';

// //setting section2 prof to blur on btn click
// prof.style.filter = 'blur(3px)';

// //setting nav to blur on btn click
// nav.style.filter = 'blur(3px)';

// //setting section1 to blur on btn click
// section1.style.filter = 'blur(3px)';

// // making the scroll function to stop when modaal pops
// document.body.style.overflow = "hidden";
// }

// //creating function close with its commands
// function close(){
// //setting the modal pop up to none so it will be removed on click
// biew.style.display = 'none';

// //setting section 2 blur to none on hamburger click to close
// prof.style.filter = 'none';

// //setting nav blur to none on hamburger click
// nav.style.filter = 'none';
// //setting section 1 and h1 blur to none on hamburger click to close
// hi.style.filter = 'none';
// section1.style.filter = 'none';
// // making the scroll function to stop when modaal pops
// document.body.style.overflow = "initial";
// }

// --------form validaion------------

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
    emailErr.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
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
