const mainVisualBg = document.querySelector(
  ".hero .main-visual .main-visual-bg",
);
// console.log(mainVisualBg);
const heroBtns = document.querySelectorAll(".visual-inner .sw-hero-btn");
// console.log(heroBtns);
const playStopBtn = document.querySelector(
  ".sw-hero .pagination .play-stop-btn",
);
console.log(playStopBtn);

// 히어로 슬라이드 버튼 호버 인터렉션
heroBtns.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    btn.querySelector(".off").style.opacity = 1;
  });
  btn.addEventListener("mouseout", () => {
    btn.querySelector(".off").style.opacity = 0;
  });
});

// 스와이퍼 설정
const swHero = new Swiper(".sw-hero", {
  speed: 1000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
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

// 재생/정지 버튼
playStopBtn.addEventListener("click", () => {
  const isRunning = swHero.autoplay.running;
  // console.log(isRunning);

  if (isRunning) {
    swHero.autoplay.stop();
    console.log("정지");
    playStopBtn.style.backgroundImage = `url("../assets/icons/slide_play.png")`;
  } else {
    swHero.autoplay.start();
    console.log("출발");
    playStopBtn.style.backgroundImage = `url("../assets/icons/slide_stop.png")`;
  }
});
