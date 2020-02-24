document.addEventListener("DOMContentLoaded", () => {

   const navigation = document.querySelector(".navigation");
   const hamburgerBtn = navigation.querySelector(".hamburger");
   const hamburgerSpan = hamburgerBtn.querySelector(".hamburger__bar");
   const menu = navigation.querySelector(".main-menu");

   hamburgerBtn.addEventListener("click", () => {
      hamburgerSpan.classList.toggle("hamburger--active");
      menu.classList.toggle("main-menu--active")
   });

   const menuLinks = menu.querySelectorAll(".main-menu__link");

   for (let menuLink of menuLinks) {
      menuLink.addEventListener("click", () => {
         hamburgerSpan.classList.remove("hamburger--active");
         menu.classList.remove("main-menu--active")
      });
   }

   const servicesMenu = menu.querySelector(".services-menu");
   const servicesMenuBtn = menu.querySelector(".main-menu__button");
   const servicesMenuArrow = menu.querySelector(".main-menu__arrow");

   servicesMenuBtn.addEventListener("click", () => {
      servicesMenuArrow.classList.toggle("arrow--active");
      servicesMenu.classList.toggle("services-menu--active");
   })

   servicesMenuArrow.addEventListener("click", () => {
      servicesMenuArrow.classList.toggle("arrow--active");
      servicesMenu.classList.toggle("services-menu--active");
   })

   const servicesMenuLinks = servicesMenu.querySelectorAll(".services-menu__link");

   for(let servicesMenuLink of servicesMenuLinks) {
      servicesMenuLink.addEventListener("click", () => {
         hamburgerSpan.classList.remove("hamburger--active");
         menu.classList.remove("main-menu--active")
      })
   }
})