const hamberger = document.querySelector('.hamberger');
const navMenu = document.querySelector('.nav-menu');
const navBranding = document.querySelector('.nav-branding');
// const bar = document.querySelector('.bar');

hamberger.addEventListener("click",() => {
    hamberger.classList.toggle('active');
    navMenu.classList.toggle('active');
    navBranding.classList.toggle('active');
    // bar.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click',() =>{
    hamberger.classList.remove('active');
    navMenu.classList.remove('active');
    navBranding.classList.remove('active');
    // bar.classList.remove('active');
}))


// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
