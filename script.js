var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

var tl = gsap.timeline()

tl.from("nav h2, nav h3, .extra",{
    y:-40,
    duration: 0.6,
    opacity:0,
    delay:1,
    stagger: 0.15,
})

tl.to('.left h1 span',{
    opacity:1,
    y: 0,
    duration:0.1,
    stagger:0.1,
    ease: "power3.out",
})

tl.from(".left h4",{
    x:-100,
    duration: 0.5,
    opacity:0,
})

tl.from(".leftdivs",{
    x:-50,
    duration: 0.4,
    opacity:0,
})

tl.from(".showcase",{
    duration: 0.6,
    opacity:0,
})

tl.from(".right",{
    x:100,
    duration: 0.6,
    opacity:0,
},"-=1.8")



