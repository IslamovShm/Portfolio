var swiper = new Swiper(".projects-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    initialSlide: 1,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-paginations",
      clickable: true,
    },
})

let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    console.log(1)
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

console.log(1)

