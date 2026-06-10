import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

var swiper = new Swiper('#mySwiper', {
  modules: [Pagination],
  slidesPerView: 1,
  spaceBetween: 32,
  breakpoints: {
    1440: {
      enabled: false,
      slidesPerView: 5,
      spaceBetween: 25,
    },
  },
  pagination: {
    el: '#swiper-pagination',
    clickable: true,
    type: 'bullets',
    bulletActiveClass: 'swiper-pagination-bullet-active',
  },
});
