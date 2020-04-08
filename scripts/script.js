document.addEventListener("DOMContentLoaded", () => {

   const navigation = document.querySelector(".navigation");
   const hamburgerBtn = navigation.querySelector(".hamburger");
   const hamburgerSpan = hamburgerBtn.querySelector(".hamburger__bar");
   const menu = navigation.querySelector(".main-menu");
   hamburgerBtn.addEventListener("click", () => {
      hamburgerSpan.classList.toggle("hamburger--active");
      menu.classList.toggle("main-menu--active");
   });

   const menuLinks = menu.querySelectorAll(".main-menu__link");
   for (let menuLink of menuLinks) {
      menuLink.addEventListener("click", () => {
         hamburgerSpan.classList.remove("hamburger--active");
         menu.classList.remove("main-menu--active");
         smoothScroll(menuLink.getAttribute("href"), 1000)
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
   for (let servicesMenuLink of servicesMenuLinks) {
      servicesMenuLink.addEventListener("click", () => {
         hamburgerSpan.classList.remove("hamburger--active");
         menu.classList.remove("main-menu--active");
         smoothScroll(servicesMenuLink.getAttribute("href"), 1000)
      })
   }

   const horizontalMenu = navigation.querySelector(".second-menu");
   const horizontalMenuLinks = horizontalMenu.querySelectorAll(".second-menu__link");
   for (let link of horizontalMenuLinks) {
      link.addEventListener("click", () => {
         smoothScroll(link.getAttribute("href"), 1000);
      })
   }

   const navigationLogoLink = navigation.querySelector(".navigation__logo-link");
   navigationLogoLink.addEventListener("click", () => {
      smoothScroll(navigationLogoLink.getAttribute("href"), 1000);
   })

   const headerLink = document.querySelector(".header__link");
   headerLink.addEventListener("click", () => {
      smoothScroll(headerLink.getAttribute("href"), 1000);
   })

   const aboutLink = document.querySelector(".about-us__link");
   aboutLink.addEventListener("click", () => {
      smoothScroll(aboutLink.getAttribute("href"), 1000);
   })

   const sectionListLinks = document.querySelectorAll(".section-list__link");
   for (let link of sectionListLinks) {
      link.addEventListener("click", () => {
         smoothScroll(link.getAttribute("href"), 1000);
      })
   }

   function smoothScroll(target, duration) {
      var target = document.querySelector(target);
      var targetPosition = target.getBoundingClientRect().top - 80;
      let startPosition = window.pageYOffset;
      let distance = targetPosition - startPosition;
      let startTime = null;

      function animation(currentTime) {
         if (startTime == null) startTime = currentTime;
         let timeElapsed = currentTime - startTime;
         let run = ease(timeElapsed, startPosition, targetPosition, duration);
         window.scrollTo(0, run);
         if (timeElapsed < duration) requestAnimationFrame(animation);
      }

      function ease(t, b, c, d) {
         t /= d / 2;
         if (t < 1) return c / 2 * t * t + b;
         t--;
         return -c / 2 * (t * (t - 2) - 1) + b;
      }

      requestAnimationFrame(animation)
   }

   window.addEventListener("hashchange", () => {
      let scrollV, scrollH, loc = window.location;

      if ("pushState" in history) {
         history.pushState("", document.title, loc.pathname + loc.search);
      } else {
         // Prevent scrolling by storing the page's current scroll offset
         scrollV = document.body.scrollTop;
         scrollH = document.body.scrollLeft;

         loc.hash = "";

         // Restore the scroll offset, should be flicker free
         document.body.scrollTop = scrollV;
         document.body.scrollLeft = scrollH;
      }
   });
});