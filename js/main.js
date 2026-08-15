const swiper = new Swiper('.swiper', {
  // Optional parameters

  // loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
		type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },


});