const preloader2 = document.querySelector("#preloader2");
preloader2 &&
  window.addEventListener("load", () => {
    setTimeout(() => {
      preloader2.classList.add("white-bg2");
    }, 500),
      setTimeout(() => {
        preloader2.remove();
      }, 4e3);
  }),
  document.querySelectorAll(".bg").forEach((e) => {
    let l = window.getComputedStyle(e),
      t = l.backgroundImage,
      s = t.match(/url\(["']?(.+?)["']?\)/);
    if (s) {
      let n = s[1],
        i = new Image();
      (i.onload = () => {
        let l = i.height / i.width,
          t = e.clientWidth,
          s = t * l;
        e.style.height = `${s}px`;
      }),
        (i.src = n);
    }
  });
const playBtn = document.getElementById("musicBtn"),
  playIcon = document.getElementById("playIcon"),
  bgMusic = document.getElementById("bgMusic");
let isPlaying = !1;
(bgMusic.volume = 0.4),
  playBtn.addEventListener("click", () => {
    if (isPlaying) {
      let e = setInterval(() => {
        bgMusic.volume > 0.01
          ? (bgMusic.volume -= 0.01)
          : (clearInterval(e),
            bgMusic.pause(),
            (bgMusic.volume = 0.1),
            playIcon.classList.remove("fa-pause"),
            playIcon.classList.add("fa-play"),
            (isPlaying = !1));
      }, 50);
    } else
      (bgMusic.volume = 0.4),
        bgMusic.play(),
        playIcon.classList.remove("fa-play"),
        playIcon.classList.add("fa-pause"),
        (isPlaying = !0);
  }),
  document.addEventListener("DOMContentLoaded", () => {
    let e = document.querySelectorAll(".autoShow"),
      l = new IntersectionObserver(
        (e) => {
          e.forEach((e) => {
            e.isIntersecting && e.target.classList.add("visible");
          });
        },
        { threshold: 0.01 }
      );
    e.forEach((e) => l.observe(e));
  });
const slides = document.querySelectorAll(".slide");
let currentIndex = 0,
  interval = setInterval(nextSlide, 15e3);
function showSlide(e) {
  slides.forEach((l, t) => {
    l.classList.toggle("active", t === e);
  });
}
function nextSlide() {
  showSlide((currentIndex = (currentIndex + 1) % slides.length));
}
function prevSlide() {
  showSlide(
    (currentIndex = (currentIndex - 1 + slides.length) % slides.length)
  );
}
document.querySelectorAll(".nav").forEach((e) =>
  e.addEventListener("click", () => {
    clearInterval(interval), (interval = setInterval(nextSlide, 15e3));
  })
);
const elements = document.querySelectorAll(".autoBLur"),
  observer = new IntersectionObserver(
    (e) => {
      e.forEach((e) => {
        e.isIntersecting && e.target.classList.add("visible");
      });
    },
    { threshold: 0.3 }
  );
elements.forEach((e) => observer.observe(e));
const form = document.querySelector(".subscribe-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let l = form.elements.email.value;
  console.log("Email yang dimasukkan:", l);
});
