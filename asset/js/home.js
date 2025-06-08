const preloader2 = document.querySelector("#preloader2");
if (preloader2) {
  window.addEventListener("load", () => {
    setTimeout(() => {
      preloader2.classList.add("white-bg2");
    }, 500);
    setTimeout(() => {
      preloader2.remove();
    }, 4000);
  });
}


/** AUTO SUM HEIGHT BG > */ 

document.querySelectorAll(".bg").forEach((div) => {
  const style = window.getComputedStyle(div);
  const bgImage = style.backgroundImage;
  const urlMatch = bgImage.match(/url\(["']?(.+?)["']?\)/);
  if (urlMatch) {
    const imageUrl = urlMatch[1];
    const img = new Image();
    img.onload = () => {
      const aspectRatio = img.height / img.width;
      const containerWidth = div.clientWidth;
      const computedHeight = containerWidth * aspectRatio;
      div.style.height = `${computedHeight}px`;
    };
    img.src = imageUrl;
  }
});

/** MUSIC PLAY BACKGROUND --> */ 

const playBtn = document.getElementById("musicBtn");
const playIcon = document.getElementById("playIcon");
const bgMusic = document.getElementById("bgMusic");
let isPlaying = false;
playBtn.addEventListener("click", () => {
  if (!isPlaying) {
    bgMusic.play();
    playIcon.classList.remove("fa-play");
    playIcon.classList.add("fa-pause");
    isPlaying = true;
  } else {
    bgMusic.pause();
    playIcon.classList.remove("fa-pause");
    playIcon.classList.add("fa-play");
    isPlaying = false;
  }
  bgMusic.volume = 0.1;
});

/** AUTO SHOW ANIMATION */

document.addEventListener("DOMContentLoaded", () => {
  const observers = document.querySelectorAll('.autoShow');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.01
  });

  observers.forEach(el => observer.observe(el));
});

/** BANNER SLIDER */


const slides = document.querySelectorAll(".slide");
let currentIndex = 0;
let interval = setInterval(nextSlide, 15000);

function showSlide(index) {
slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
});
}

function nextSlide() {
currentIndex = (currentIndex + 1) % slides.length;
showSlide(currentIndex);
}

function prevSlide() {
currentIndex = (currentIndex - 1 + slides.length) % slides.length;
showSlide(currentIndex);
}

document.querySelectorAll(".nav").forEach(btn =>
btn.addEventListener("click", () => {
    clearInterval(interval);
    interval = setInterval(nextSlide, 15000);
})
);

/** BLUR */

const elements = document.querySelectorAll('.autoBLur');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.3,
});

elements.forEach(el => observer.observe(el));
