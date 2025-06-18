document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline();

    tl.to(".carro", {
        x: 250,
        duration: 2,
        scrollTrigger: {
            trigger: ".carro",
            markers: false,
            start: "-80% center",
            end: "180% center",
            scrub: 2
        }
    })
    tl.from(".quadradoDireita, .quadradoEsquerda, .quadradoHorizontal, .quadradoDireita3, .quadradoEsquerda3", {
        y: 100,
        duration: .5,
        stagger: 0.3,
        opacity: 0,
        scrollTrigger: {
            markers: false,
            start: "30% center",
            end: "50% center",
            scrub: 1,
        }
    })

});