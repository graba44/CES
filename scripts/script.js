document.addEventListener("DOMContentLoaded", () => {

   const navigation = document.querySelector(".navigation");
   const hamburgerBtn = navigation.querySelector(".hamburger");
   const hamburgerSpan = hamburgerBtn.querySelector(".hamburger__bar");
   const menu = navigation.querySelector(".main-menu");

   hamburgerBtn.addEventListener("click", () => {
      hamburgerSpan.classList.toggle("hamburger-active");
      menu.classList.toggle("main-menu-active")
   });


   const menuLinks = menu.querySelectorAll(".main-menu__link");

   for (let menuLink of menuLinks) {
      menuLink.addEventListener("click", () => {
         hamburgerSpan.classList.remove("hamburger-active");
         menu.classList.remove("main-menu-active")
      });
   }

})

