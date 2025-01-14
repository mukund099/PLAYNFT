gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

var tl = gsap.timeline()
var tll = gsap.timeline()
var ldiv = document.querySelector(".logos");

function pg1animation() {
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
    
    
}

pg1animation()

tll.to(".logos ",{
    transform: 'translateX(-50%)',
    duration: 35,
    delay:1,
    ease: 'none',
    repeat: -1,
})

tll.play();

ldiv.addEventListener("mouseenter",function(){
    tll.pause()
})

ldiv.addEventListener("mouseleave",function(){
    tll.play()
})
