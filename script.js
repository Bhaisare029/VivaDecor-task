var tl = gsap.timeline();

tl.from("#nav-prt1 h2", {
  y: 20,
  opacity: 0,
  duration: 1,
  delay: 0.5,
})
  .from("#nav-prt2 h5", {
    y: 20,
    opacity: 0,
    duration: 0.5,
  })
  .from("#nav button", {
    y: 20,
    opacity: 0,
    stagger: 0.2,
  })
  .from("#right #box img", {
    scale: 0,
    opacity: 0,
    duration: 0.5,
  });
  tl.from("#right1 #box1 img", {
    scale: 0,
    opacity: 0,
    duration: 0.5,
  });
  