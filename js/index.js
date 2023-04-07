let menu = document.querySelector(".header-nav");
let menuLinks = menu.querySelectorAll(".header-item-link");
let tabsBtn = document.querySelectorAll(".tabs-nav__btn");
let howTab = document.querySelectorAll(".how-tab");


const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  a11y: {
    paginationBulletMessage: 'Слайд {{index}}',
  },
});

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("burger").addEventListener("click", function() {
    document.querySelector("header").classList.toggle("open")
  })
})

document.addEventListener("DOMContentLoaded", (e) => {
  document.getElementById("open-search-form").addEventListener("click", (e) => {
    document.getElementById("header-search-form").classList.add("header-search-form_show")
  });

  document.getElementById("search-form-close").addEventListener("click", (e) => {
    document.getElementById("header-search-form").classList.remove("header-search-form_show")
  });

  document.getElementById("header-search-form").addEventListener("click", (e) => {
    e.preventDefault()
  });
});

new Accordion('.accordion-container');


tabsBtn.forEach(function (element) {
  element.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove("tabs-nav__btn--active") });
    e.currentTarget.classList.add("tabs-nav__btn--active");

    howTab.forEach(function (element) { element.classList.remove("how-tab--active") });
    document.querySelector(`[data-target="${path}"]`).classList.add("how-tab--active");

  });
});
