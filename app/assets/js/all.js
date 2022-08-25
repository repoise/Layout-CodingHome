$(function() {
  console.log('Hello Bootstrap5');

  const swiper = new Swiper('.code-swiper', {
    
    slidesPerView: 10,
    spaceBetween: 30,
    autoplay: {
      delay: 1500,
    },
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  new Swiper(".review-swiper", {
    // autoplay: {
    //   delay: 3000,
    //   },
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


});

       