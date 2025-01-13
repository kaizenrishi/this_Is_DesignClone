// var tl = gsap.timeline()

// tl
// gsap.registerPlugin(scrub)

const text = document.querySelector(".text");

const lefImagetDiv = document.querySelectorAll(".image-container img");

const rightText = document.querySelectorAll(" .text-container");

const midText = document.querySelector(".text2 ");
// const topText =document.querySelector(".text2 ");
const about = document.querySelector(" .about");
const leftImg = document.querySelector(" .scroll-down");

gsap.to(text, {
  delay: 0.4,
  duration: 0.2,
  opacity: 1,
  // y:-100,
  ease: Power2.Expo,
});

gsap.from(".left-img", {
  opacity: 0,
  y: 50,
  delay: 0.5,
  // stagger: 0.2,
  duration: 0.4,
  ease: Power2.Expo,
});
gsap.from(".top", {
  opacity: 0,
  x: 50,
  delay: 0.5,
  stagger: 0.2,
  duration: 0.4,
  ease: Power2.Expo,
});
gsap.from(".bottom", {
  opacity: 0,
  y: -100,
  delay: 0.5,
  stagger: 0.2,
  duration: 0.4,
  ease: Power2.Expo,
});
gsap.from(midText, {
  opacity: 0,
  stagger: 0.4,
  // x:-20,

  scrollTrigger: {
    scroller: "body",
    trigger: ".page-2",
    // markers:true,
    start: "top 30%",
    end: "bottom 100%",
    scrub: 0.2,
  },
});

lefImagetDiv.forEach((e) => {
  // console.log(e);

  gsap.from(e, {
    opacity: 0,
    y: 50,
    // delay: .3,
    duration: 0.7,
    // stagger: 5,
    ease: Power2.Expo,
    scrollTrigger: {
      scroller: "body",
      trigger: lefImagetDiv,
      // markers: true,
      start: "top 80%",
      end: "top 50%",
      //scrub: 2,
    },
  });
});

rightText.forEach((e) => {
  gsap.from(e, {
    opacity: 0,
    y: 50,
    // delay: .3,
    duration: 0.7,
    // stagger: 5,
    ease: Power2.Expo,
    scrollTrigger: {
      scroller: "body",
      trigger: rightText,
      // markers: true,
      start: "top 80%",
      end: "top 50%",
      // scrub: 2,
    },
  });
});

// gsap.to(leftImg, {
//   y: 250,
//   delay: 0.4,
//   duration: 0.8,
//   ease: Power2.Expo,
//   scrollTrigger: {
//     trigger: "#img",
//     scroller: "body",
//     markers: true,
//     start: "bottom 70%",
//     end: "bottom 100%",
//     scrub: true,

//   },
// });

gsap.from(about, {
  opacity: 0,
  stagger: 0.4,
  // x:-20,

  scrollTrigger: {
    scroller: "body",
    trigger: ".page-2",
    // markers:true,
    start: "top 10%",
    end: "bottom 100%",
    scrub: true,
  },
});
