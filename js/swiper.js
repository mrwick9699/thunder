

// <!-- Swiper Js sscript -->
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".review-nextbtn",
        prevEl: ".review-prevbtn",
      },
      // pagination: {
      //   el: ".review-next",
      //   clickable: true,
      // },

      breakpoints: {
      	280: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      	360: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      	412: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      	540: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
         880: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
          769: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
      },
    });
