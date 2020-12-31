var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  
  spaceBetween: 30,
  centeredSlides: true,
  

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-my',
    prevEl: '.swiper-button-prev-my',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})

var modal = document.querySelector('#modal')
var iks = document.querySelector('#iks')
var modalLink = document.querySelector('#modal-link')


modalLink.addEventListener('click', function() {
  modal.classList.add('modal-wraper')
})

iks.addEventListener('click', function() {
  modal.classList.toggle('modal-wraper')
})


