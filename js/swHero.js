const swHero = new Swiper(".sw-hero", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".hero-next-btn",
    prevEl: ".hero-prev-btn",
  },
});
// new 함수 호출하는데 연산자 new 써서 호출하면 객체{}를 생성해준다? => 앞글자 대문자는 생성자 함수
