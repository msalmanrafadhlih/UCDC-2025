/* PRELOADING */ 

const preloader = document.querySelector("#preloader");
if (preloader) {
  window.addEventListener("load", () => {
    setTimeout(() => {
      preloader.classList.add("loaded");
      preloader.classList.add("white-bg");
    }, 2000);
    setTimeout(() => {
      preloader.remove();
    }, 7000);
  });
}

/* ANIMATION SCROLL */
function setAnimationScroll() {
  gsap.registerPlugin(ScrollTrigger);
  let runAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: "#bg_city",
      start: "top top",
      end: "+=1000",
      scrub: true,
      pin: true,
    },
  });

  runAnimation
    .add([
      gsap.to("#bg_city img", 2, {
        scale: 1.1,
      }),
      gsap.to(".content", 2, {
        y: 5,
        scale: 1.2,
      }),
      gsap.to(".hide", 2, {
        opacity: 0,
      }),
    ])
    .add([
      gsap.to(".content", 2, {
        scale: 1.5,
      }),
      gsap.to("#bg_city img", 2, {
        scale: 1.3,
      }),
    ])
    .add([
      gsap.to(".content", 2, {
        opacity: 1,
        scale: 2,
        color: "black"
      }),
      gsap.to("#bg_city img", 2, {
        opacity: 0
      }),
    ])
    .add([
      gsap.to(".content .title", 4, {
        opacity: 1,
      }),
    ])
    .add([
      gsap.to("html", 2, {
        filter: "none",
      }),
      gsap.to("body", 2, {
        cursor: "default",
      }),
      gsap.to(".cursor1", 2, {
        display: "none",
      }),
    ]);
}
setAnimationScroll();

/* CURASOORR */
const cursor = document.querySelector(".cursor1");
document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
  bgColor.style.clipPath = `circle(75px at ${x}px ${y}px)`;
});
