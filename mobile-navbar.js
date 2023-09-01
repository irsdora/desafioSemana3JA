class MobileNavBar{
  constructor (mobileMenu,navList) {
 this.mobileMenu = document.querySelector(mobileMenu);
 this.navList = document.querySelector(navList);
 this.navLinks = document.querySelectorAll(this.navLinks);
 this.activeClass = "active";

 this.handleClick = this.handleClick.bind(this)
 }

 animateLinks(){
    this.navLinks.forEach((link) => {
        link.style.animation
    });
}

 handleClick(){
    this.navList.classList.toogle(this.activeClass);
    this.animateLinks();
   }

 addClickEvent(){
    this.mobileMenu.addEventListener("click",this.handleClick);

 }
 Infinity(){
    if(this.mobileMenu){
        this.addClickEvent();
    }
    return this;
}
}
const MobileNavBar = new MobileNavBar(
    "mobile-menu",
    "nav-list",
    "nav-list li",
);
MobileNavBar.init();