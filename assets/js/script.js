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
    document.querySelector('.swiper-container').addEventListener('touchstart', function (e) {
        e.stopPropagation();
    }, { passive: true });
}