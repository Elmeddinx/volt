function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}
var swiper = new Swiper(".heroSwiper", {
    direction: "vertical",
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
    on: {
        reachEnd: function() {
          window.isAtEnd = true;
        },
        slideChange: function() {
          window.isAtEnd = false;
        }
      }
    // touchRatio: 0,
    // simulateTouch: false,
});

document.addEventListener('wheel', function(event) {
    if (window.isAtEnd) {
      event.preventDefault(); 
      if (event.deltaY > 0) {
        window.scrollBy({
          top: window.innerHeight,
          behavior: 'smooth'
        });
      } else {
        window.scrollBy({
          top: -window.innerHeight,
          behavior: 'smooth'
        });
      }
    }
  }, { passive: false });

  let startY = 0;
  document.addEventListener('touchstart', function(event) {
    if (window.isAtEnd) {
      startY = event.touches[0].clientY;
    }
  });

  document.addEventListener('touchend', function(event) {
    if (window.isAtEnd) {
      let endY = event.changedTouches[0].clientY;
      let deltaY = endY - startY;
      if (Math.abs(deltaY) > 50) {
        window.scrollBy({
          top: deltaY > 0 ? window.innerHeight : -window.innerHeight,
          behavior: 'smooth'
        });
      }
    }
  });