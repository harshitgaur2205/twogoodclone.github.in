const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();


document.querySelector(".ri-eye-close-fill").addEventListener("click",function(){
    gsap.to(".ri-eye-close-fill",{
        translateY:"-100%",
    })
    gsap.to(".ri-eye-fill",{
        translateY:"-120%",
    })
    gsap.to(".page0",{
        translateY:"0%",
        opacity:1,
    })
});
document.querySelector(".ri-eye-fill").addEventListener("click",function(){
    gsap.to(".ri-eye-fill",{
        translateY:"120%"
    })
    gsap.to(".ri-eye-close-fill",{
        translateY:"1%",
    })
    gsap.to(".page0",{
        translateY:"-100%",
    })
})

gsap.to(".headings",{
    transform: "translateY(-100%)",
    opacity: 0,
    scrollTrigger: {
      trigger: "#page1",
      scroller: ".main",
      start: "top 0",
      end: "top -10%",
      scrub: true,
    },
})
gsap.from(".page1 h1",{
    y:100,
    stagger:0.3,
    opacity:0,
    delay:0.2,
    duration:0.5
});
gsap.from("#video-container",{
    scale:0.7,
    duration:0.5,
    delay:0.2,
    opacity:0

})
var a  = document.querySelector("#vid");
a.addEventListener("mousemove",function(details){
    var x = details.clientX;
    var y = details.clientY;

    gsap.to(".circle",{
        left:x-50+"px",
        top:y+"px",
        opacity:100,
        scale:1,
    })
})
a.addEventListener("mouseleave",function(){
    gsap.from(".circle",{
        opacity:0,
    })
})

var box1 = document.querySelector(".box1");
box1.addEventListener("mouseenter",function(){
    gsap.to("#bigcircle1",{
        scale:1,
        opacity:0.3
    })
})
box1.addEventListener("mouseleave",function(){
    gsap.to("#bigcircle1",{
        opacity: 0,
        scale:0
    })
})
box1.addEventListener("mousemove",function(dets){
    console.log("b1 y-axis:"+dets.y);
    gsap.to("#bigcircle1",{
        left: dets.x +"px",
        top: dets.y+"px" ,
        backgroundColor: "aqua"
    })
})

var box2 = document.querySelector(".box2");
box2.addEventListener("mouseenter",function(){
    gsap.to("#bigcircle2",{
        scale:1,
        opacity:0.3
    })
})
box2.addEventListener("mouseleave",function(){
    gsap.to("#bigcircle2",{
        opacity: 0,
        scale:0
    })
})
box2.addEventListener("mousemove",function(dets){
    gsap.to("#bigcircle2",{
        left: dets.x +"px",
        top: dets.y+"px" ,
        backgroundColor: "pink"
    })
})

var box3 = document.querySelector(".box3");
box3.addEventListener("mouseenter",function(){
    gsap.to("#bigcircle3",{
        scale:1,
        opacity:0.3
    })
})
box3.addEventListener("mouseleave",function(){
    gsap.to("#bigcircle3",{
        opacity: 0,
        scale:0
    })
})
box3.addEventListener("mousemove",function(dets){
    console.log("b3 y-axis : " + dets.y);
    gsap.to("#bigcircle3",{
        
        left: dets.x +"px",
        top: dets.y + 700 +"px" ,
        backgroundColor: "vrgb(33, 13, 78) "
    })
})


var box4 = document.querySelector(".box4");
box4.addEventListener("mouseenter",function(){
    gsap.to("#bigcircle4",{
        scale:1,
        opacity:0.3
    })
})
box4.addEventListener("mouseleave",function(){
    gsap.to("#bigcircle4",{
        opacity: 0,
        scale:0
    })
})
box4.addEventListener("mousemove",function(dets){
    gsap.to("#bigcircle4",{
        left: dets.x +"px",
        top: dets.y+700+"px" ,
        backgroundColor: "red"
    })
})


var box5 = document.querySelector(".box5");
box5.addEventListener("mouseenter",function(){
    gsap.to("#bigcircle5",{
        scale:1,
        opacity:0.3
    })
})
box5.addEventListener("mouseleave",function(){
    gsap.to("#bigcircle5",{
        opacity: 0,
        scale:0
    })
})
box5.addEventListener("mousemove",function(dets){
    gsap.to("#bigcircle5",{
        left: dets.x +"px",
        top: dets.y+1600+"px" ,
        backgroundColor: "green"
    })
})

var box6 = document.querySelector(".box6");
box6.addEventListener("mouseenter",function(){
    gsap.to("#bigcircle6",{
        scale:1,
        opacity:0.3
    })
})
box6.addEventListener("mouseleave",function(){
    gsap.to("#bigcircle6",{
        opacity: 0,
        scale:0
    })
})
box6.addEventListener("mousemove",function(dets){
    gsap.to("#bigcircle6",{
        left: dets.x +"px",
        top: dets.y+1600+"px" ,
        backgroundColor: "rgb(1, 44, 7)"
    })
})

gsap.from("#page_h1",{
    scale: 1.7,
    scrollTrigger: {
      trigger: "#page_h1",
      scroller: ".main",
      scrub: true,
    },
})
gsap.to("#box img",{
    opacity:1,
    scrollTrigger:{
        trigger:"#box img",
        scroller:".main",
        scrub:true,
    }
})
gsap.from(".page5 img",{
    scale:1.2,
    scrollTrigger:{
        trigger:".page5 img",
        scroller:".main",
        scrub:true
    }
})
gsap.to(".page6",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:".page6",
        scroller:".main",
        scrub:true
    }
})






