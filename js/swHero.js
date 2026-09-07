const mainVisualBg = document.querySelector(
  ".hero .main-visual .main-visual-bg",
);
// console.log(mainVisualBg);

const swHero = new Swiper(".sw-hero", {
  speed: 1000,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".hero-next-btn",
    prevEl: ".hero-prev-btn",
  },

  on: {
    slideChangeTransitionStart: function (swiper) {
      // const activeSlide = swiper.activeIndex + 1;
      // console.log(activeSlide);
      // mainVisualBg.style.backgroundImage = `url("../assets/images/slide_${activeSlide}.png")`;
      const activeSlide = swiper.slides[swiper.activeIndex];
      // console.log(activeSlide);
      const activeSlideImage = activeSlide.querySelector(".slide-image img");
      // console.log(activeSlideImage.src);
      mainVisualBg.style.backgroundImage = `url(${activeSlideImage.src})`;
    },
  },
});
// new 함수 호출하는데 연산자 new 써서 호출하면 객체{}를 생성해준다? => 앞글자 대문자는 생성자 함수
