// Preloader
const preloader = document.getElementById("preloader");
window.addEventListener("load", () => {
  setTimeout(() => preloader.classList.add("loaded"), 2000);
  setTimeout(() => preloader.remove(), 3000);
});

// GSAP Animation
function setAnimationScroll() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.timeline({
    scrollTrigger: {
      trigger: "#bg_city",
      start: "top top",
      end: "+=1000",
      scrub: 1.5,
      pin: true,
    },
  })
    .to("#playBtn", { opacity: 0, duration: 1 })
    .to("#bg_city img", { scale: 1.1, duration: 1 }, "<")
    .to(".content", { y: 5, scale: 1.1, duration: 1 }, "<")
    .to(".h-pink", { opacity: 0, duration: 1 }, "<")
    .to(".content", { scale: 1.2, duration: 1 })
    .to("#bg_city img", { scale: 1.2, duration: 1 }, "<")
    .to(".hide", { opacity: 0, duration: 1 })
    .to(".content", { opacity: 1, scale: 1.5, color: "black", duration: 1 }, "<")
    .to("#bg_city img", { opacity: 0, duration: 1 }, "<")
    .to(".content .title", { opacity: 1, duration: 2 })
    .to("body", { cursor: "default", duration: 1 }, "<")
    .to(".cursor1", { display: "none", duration: 1 }, "<")
    .to("#playBtn", { y: 0, opacity: 1, duration: 1 }, "<");
}
setAnimationScroll();

// Custom Cursor
const cursor = document.querySelector(".cursor1");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
document.addEventListener("mousedown", () => {
  cursor.style.transform = "translate(-50%, -50%) scale(0.8)";
});
document.addEventListener("mouseup", () => {
  cursor.style.transform = "translate(-50%, -50%) scale(1)";
});



