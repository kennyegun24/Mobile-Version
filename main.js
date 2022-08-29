// create a constant for hamburger menu
const ham = document.querySelector('.ham');

//create a constant for menu icon
const menu = document.querySelector('.menu');

//create a constant for menu lists
const lists = document.querySelectorAll('.list');

//making the hamburger button clickable and close/open menu on click
ham.addEventListener('click', function () {
  ham.classList.toggle('active');
  menu.classList.toggle('in-active');
});

//creating a loop for list items to close window on click
for (const list of lists) {
  list.addEventListener('click', function () {
    ham.classList.toggle('active');
    menu.classList.toggle('in-active');
  });
};



// --------------------------Button toggle ends------------------------------


// ----------------------------Modal starts----------------------------

//crete a constant for the model window
const biew = document.querySelector('.biew')

//create a constant for modal button in model window
const burg = document.querySelector('.burg');

//create a constant for button to pop modal
const btn = document.querySelector('.btn');

//create a constant for section2
const hi = document.querySelector('.hi');

//create a constant for .prof
const prof = document.querySelector('.prof');

//create a constant for nav
const nav = document.querySelector('.nav');

//create a constant for section1
const section1 = document.querySelector('.section1');

const btn2 = document.querySelector('.btn2');




//creatng n event listener of click for the hamburger button in the modal
burg.addEventListener('click', close);
//creatng n event listener of click for the btn in the window
btn.addEventListener('click', open);

btn2.addEventListener('click', open);

//making the modal display stop when user clicks on window
window.addEventListener('click', (e) =>{
    if(e.target == biew) {
        biew.style.display = 'none';
        hi.style.filter = 'none'
        section1.style.filter = 'none'
        prof.style.filter = 'none'
        nav.style.filter = 'none'
        document.body.style.overflow = "initial";
    }
})



//creating function open with its commands
function open(){
//setting the modal pop up to block so it will be shown on click
biew.style.display = 'block';

//setting section2 hi to blur on btn click
hi.style.filter = 'blur(3px)'

//setting section2 prof to blur on btn click
prof.style.filter = 'blur(3px)'

//setting nav to blur on btn click
nav.style.filter = 'blur(3px)'

//setting section1 to blur on btn click
section1.style.filter = 'blur(3px)'

// making the scroll function to stop when modaal pops
document.body.style.overflow = "hidden";
}


//creating function close with its commands
function close(){
//setting the modal pop up to none so it will be removed on click
biew.style.display = 'none';

//setting section 2 blur to none on hamburger click to close
prof.style.filter = 'none'

//setting nav blur to none on hamburger click
nav.style.filter = 'none'
//setting section 1 and h1 blur to none on hamburger click to close
hi.style.filter = 'none'
section1.style.filter = 'none'
// making the scroll function to stop when modaal pops
document.body.style.overflow = "initial";
}