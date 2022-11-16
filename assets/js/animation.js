gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();
tl.from("#content", {
  y: "-30%",
  opacity: 0,
  duration: 2,
  ease: Power2.easeOut,
});

tl.from(
  ".stagger1",
  {
    y: "-50",
    opacity: 0,
    stagger: 0.3,
    duration: 2,
    ease: Power2.easeOut,
  },
  "-=1.5"
);
tl.from(
  ".hero-design",
  {
    y: "50",
    opacity: 0,
    ease: Power2.easeOut,
    duration: 1,
  },
  "-=2"
);

gsap.from(".sequare-anim", {
  scale: 0.1,
  stagger: 0.2,
  duration: 1,
  ease: Back.easeOut.config(1.7),
});

gsap.from(".transition2", {
  scrollTrigger: {
    trigger: ".transition2",
    start: "top bottom",
  },
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
});

gsap.from(".transition3", {
  scrollTrigger: {
    trigger: ".transition3",
    start: "top bottom",
  },
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.6,
});
