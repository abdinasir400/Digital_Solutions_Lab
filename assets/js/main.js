// jQuery
$(document).ready(function () {
  $(".ourClient__slide").owlCarousel({
    loop: true,
    items: 3,
    autoplay: true,
    margin: 20,
    nav: false,
    center: true,
    autoplay: false,
    autoplayTimeout: 3000,
    dots: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            dots:false
        },
        600:{
            items:2,
        },
        1000:{
            items:3
        }
    }
  });
});

// Mian Script
const scrollBtnBody = document.getElementById('back-to-top');

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    scrollBtnBody.style.display = "block";
  } else {
    scrollBtnBody.style.display = "none";
  }
}
scrollBtnBody.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});



let mobileNav = document.getElementById('navigation');
let hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileNav.classList.toggle('active');
});

document.querySelectorAll('.nav-item').forEach(function (button) {
  button.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileNav.classList.remove('active');
  });
});