// class MobileNavbar {
//   constructor(mobileMenu, navList, navLinks) {
//     this.mobileMenu = document.querySelector(mobileMenu);
//     this.navList = document.querySelector(navList);
//     this.navLinks = document.querySelectorAll(navLinks);
//     this.activeClass = "active";

//     this.handleClick = this.handleClick.bind(this);
//   }

//   animateLinks() {
//     this.navLinks.forEach((link, index) => {
//       link.style.animation
//         ? (link.style.animation = "")
//         : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
//     });
//   }

//   handleClick() {
//     this.navList.classList.toggle(this.activeClass);
//     this.mobileMenu.classList.toggle(this.activeClass);
//     this.animateLinks();
//   }

//   addClickEvent() {
//     this.mobileMenu.addEventListener("click", this.handleClick);
//   }

//   init() {
//     if (this.mobileMenu) {
//       this.addClickEvent();
//     }
//     return this;
//   }
// }

//=====================================================

// Wrap the code in a DOMContentLoaded event handler to ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () {
  // Select the mobileMenu div
  const mobileMenu = document.getElementById('mobileMenu');

  // Check if the mobileMenu element exists before adding the event listener
  if (mobileMenu) {
      // Function to toggle the mobile menu
      function toggleMobileMenu() {
          const navList = document.querySelector('.nav-list');
          navList.classList.toggle('active');
          const mobileMenu = document.getElementById('mobileMenu');
          mobileMenu.classList.toggle('active');
      }
      // Attach a click event listener to the mobileMenu div
      mobileMenu.addEventListener('click', toggleMobileMenu);
  }
});