var swiper = new Swiper(".heroSwiper", {
    direction: "vertical",
    mousewheel: true,
    loop: false,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    on: {
        reachEnd: function() {
          var content = document.querySelector('.section-2');
          content.scrollIntoView({ behavior: 'smooth' });
        }
      }
    // touchRatio: 0,
    // simulateTouch: false,
});

