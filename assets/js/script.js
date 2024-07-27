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

    // touchRatio: 0,
    // simulateTouch: false,
});