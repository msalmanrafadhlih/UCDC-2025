const preloader = document.querySelector('#preloader');
if (preloader) {
window.addEventListener('load', () => {
    setTimeout(() => {
    preloader.classList.add('loaded');
    }, 1000);
    setTimeout(() => {
    preloader.remove();
    }, 2000);
});
}

const loadIMG = () => {
    fetch('/img/city.svg')
    .then((response) => { 
        return response.text();
    })
    .then((svg) => {
        document.getElementById('bg_city').innerHTML = svg;
        document.querySelector('#bg_city svg').setAttribute("preserveAspectRatio", "xMidYMid slice");
        scroll();
    })
}
loadIMG(); 

function scroll () {  
    gsap.registerPlugin(ScrollTrigger);
    let runAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: "#bg_city",
            start: "top top",
            end: "+=1000",
            scrub: true,
            pin: true
        }
    });

    runAnimation.add([
        gsap.to("#bg_city svg", 2, {
            scale: 1.5,
            x: 100
        }),
        gsap.to("#full_city", 2, {
            opacity: 0
        }),
    ])
    .add([
        gsap.to("#building_top", 2, {
            y: -200,
            opacity: 0
        }),
        gsap.to("#wall_side", 2, {
            x: -200,
            opacity: 0
        }),
        gsap.to("#wall_front", 2, {
            x: 200, y: 200,
            opacity: 0
        }),
    ])
    .add([
        gsap.to("#interior_wall_side", 2, {
            x: -200,
            opacity: 0
        }),
        gsap.to("#interior_wall_top", 2, {
            y: -200,
            opacity: 0
        }),
        gsap.to("#interior_wall_side_2", 2, {
            opacity: 0
        }),
        gsap.to("#interior_wall_front", 2, {
            opacity: 0
        }),
    ])
}