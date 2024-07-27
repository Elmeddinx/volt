var swiper = new Swiper(".heroSwiper", {
    direction: "vertical",
    // mousewheel: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});