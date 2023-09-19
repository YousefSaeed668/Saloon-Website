let menuIcon = document.querySelector(".menu");
let header = document.querySelector("header");
let loader = document.querySelector(".loader");
window.addEventListener("scroll",()=>{
  if (window.scrollY >= 100){
    header.classList.add("active")
  }else {
    header.classList.remove("active")

  }
})

window.onload = ()=>{
  loader.classList.add("loaded")
}
menuIcon.addEventListener("click",()=>{
  menuIcon.classList.toggle("active")
  if (menuIcon.classList.contains("active")){
    menuIcon.nextElementSibling.style.translate = "0";
  }else {
    menuIcon.nextElementSibling.style.translate = "100%";
  }
})


// Swiper
var swiper = new Swiper(".services-slides", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5555555,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// Swiper