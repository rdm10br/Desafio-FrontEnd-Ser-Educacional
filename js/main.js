// const menu = document.querySelector('.mobile-menu');
// const NavMenu = document.querySelector('.nav-menu');

// menu.addEventListener('click',() => {
//     menu.classList.toggle('ativo');
//     NavMenu.classList.toggle('ativo');
// })
class MobileNavBar{
    constructor(MobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelector(navLinks);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind();
    }
    animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }
    handleClick() {
        console.log(this);
        this.navList.classList.toggle(this.activeClass);
    }
    addClickEvent() {
        this.mobileMenu.addEventListener("click",this.handleClick);
    }

    init() {
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}
const MobileNavBar = new MobileNavBar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
);
mobileNavbar.init();