$(function(){
    'use strict';

    $('.text_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.banner_slider'
      });
      $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.text_slider',
        nextArrow: '<i class="fas fa-chevron-right slick-next"></i>',
        prevArrow: '<i class="fas fa-chevron-left slick-prev"></i>',
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        fade: true,
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
      });




      $('.counter').counterUp({
        delay: 10,
        time: 2000
    });



    $('.testi_sld').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: false,
      fade: false,
      arrows: false,
      centerMode: false,
      focusOnSelect: true,
    });


// =================Menu fix Start==================
const header = document.querySelector(".main_menu");
const sectionOne = document.querySelector(".home_intro");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav_scrolled");
    } else {
      header.classList.remove("nav_scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);
// =================Menu fix End==================



// =================scroll slider start================
const faders = document.querySelectorAll(".fade_in");
const sliders = document.querySelectorAll(".slide_in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -200px 0px"
};



const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});
// =================scroll slider End==================



});