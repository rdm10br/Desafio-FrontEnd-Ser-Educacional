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