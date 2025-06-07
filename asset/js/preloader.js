/* PRELOADING ---------> */ const preloader =
  document.querySelector("#preloader");
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

/* ANIMATION SCROLL ---> */ function setAnimationScroll() {
  gsap.registerPlugin(ScrollTrigger);
  let runAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: "#bg_city",
      start: "top top",
      end: "+=1000",
      scrub: 1.5,
      pin: true,
    },
  });
  runAnimation
    .to("body", { cursor: "none" })
    .to("#playBtn", { opacity: 0, ease: "power2.out", duration: 2 })
    .to("#bg_city img", { scale: 1.1, ease: "power2.out", duration: 2 }, "<")
    .to(".content", { y: 5, scale: 1.2, ease: "power2.out", duration: 2 }, "<")
    .to(".h-pink", { opacity: 0, duration: 2 }, "<")
    .to(".content", { scale: 1.5, ease: "power2.inOut", duration: 2 })
    .to("#bg_city img", { scale: 1.3, ease: "power2.inOut", duration: 2 }, "<")
    .to(".hide", { opacity: 0, duration: 2, ease: "power1.out" })
    .to(
      ".content",
      { opacity: 1, scale: 2, color: "black", duration: 2, ease: "power1.out" },
      "<"
    )
    .to("#bg_city img", { opacity: 0, duration: 2 }, "<")
    .to(".content .title", { opacity: 1, duration: 4 })
    .to("html", { filter: "none", duration: 2 })
    .to("body", { cursor: "default", duration: 2 }, "<")
    .to(".cursor1", { display: "none", duration: 2 }, "<")
    .to(".cursor1", { display: "none", duration: 2 }, "<")
    .to("#playBtn", { y: 0, opacity: 1, duration: 2 }, "<");
}
setAnimationScroll();

/* CURASOORR ----------> */ 
const cursor = document.querySelector(".cursor1");
document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
  if (typeof bgColor !== "undefined") {
    bgColor.style.clipPath = `circle(75px at ${x}px ${y}px)`;
  }
});
document.addEventListener("mousedown", () => {
  cursor.style.transform = "translate(-50%, -50%) scale(0.8)";
});
document.addEventListener("mouseup", () => {
  cursor.style.transform = "translate(-50%, -50%) scale(1)";
});



