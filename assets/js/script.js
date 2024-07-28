function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}
var heroSwiperConfig = {
    direction: isMobileDevice() ? 'horizontal' : 'vertical',
    mousewheel: {
        releaseOnEdges: true,
    },
    loop: false,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
};
var swiper = new Swiper('.heroSwiper', heroSwiperConfig);

if (isMobileDevice()) {
    swiper.allowTouchMove = true;
    document.querySelector('.heroSwiper').addEventListener('touchstart', function (e) {
        e.stopPropagation();
    }, { passive: true });
}

var swiper = new Swiper(".Section5Swiper", {
    slidesPerView: 2.2,
    spaceBetween: 15,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        320: {
            slidesPerView: 1.2
        },
        768: {
          slidesPerView: 1.7,
        },
        1024: {
          slidesPerView: 2.2,
        },
      },
});

var swiper = new Swiper(".Section7Swiper", {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });