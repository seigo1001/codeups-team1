let swipeOption = {
  loop: true,
  slidesPerView: 1,
  loopedSlides: 3,
  effect: "fade",
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 2000,
};
new Swiper(".p-mv__container", swipeOption);
