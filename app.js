//Mobile nav animation
const burger = document.querySelector(".burger");
const navList = document.querySelector(".nav-list");

burger.addEventListener("click", () => {
  burger.classList.toggle("burger-active");
  navList.classList.toggle("nav-active");
});

const windowWidth = window.innerWidth;

//Close navbar on click
const navItems = document.querySelectorAll(".nav-item");
if (windowWidth < 450) {
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      burger.classList.remove("burger-active");
      navList.classList.remove("nav-active");
    });
  });
}

//Main animations for devices with more than 450px width
const nav = document.querySelector(".nav");
const mainTitle = document.querySelector(".main-title");
const mainParagraph = document.querySelector(".main-paragraph");
const btn = document.querySelector(".btn");
const mainImage = document.querySelector(".image-intro-desktop");

//GSAP TimeLine
const tl = new gsap.timeline();

//Main animation
if (windowWidth > 450) {
  window.onload = function () {
    //Nav Animation
    tl.set(nav, { visibility: "visible" });
    tl.from(nav, {
      opacity: 0,
      y: -100,
      duration: 1,
    });

    //mainImage Animation
    tl.set(mainImage, { visibility: "visible" });
    tl.from(mainImage, {
      opacity: 0,
      x: 50,
      duration: 0.5,
    });

    //mainTitle Animation
    tl.set(mainTitle, { visibility: "visible" });
    tl.from(mainTitle, {
      opacity: 0,
      x: 50,
      duration: 0.5,
    });

    //mainParagraph Animation
    tl.set(mainParagraph, { visibility: "visible" });
    tl.from(mainParagraph, {
      opacity: 0,
      x: 50,
      duration: 0.5,
    });

    //Main button Animation
    tl.set(btn, { visibility: "visible" });
    tl.from(btn, {
      opacity: 0,
      x: 50,
      duration: 0.5,
    });
  };
}

//Main animation for mobile
if (windowWidth <= 450) {
  const mainText = document.querySelector(".main-text");
  const tl2 = new gsap.timeline({
    scrollTrigger: {
      trigger: mainText,
      start: "top 50%",
    },
  });

  tl2.from(mainTitle, {
    opacity: 0,
    x: -50,
    duration: 0.5,
  });

  tl2.from(mainParagraph, {
    opacity: 0,
    x: -50,
    duration: 0.5,
  });

  tl2.from(btn, {
    opacity: 0,
    x: -50,
    duration: 0.5,
  });
}

//How we work section animations
const section = document.querySelector(".how-we-work-section");
const sectionTitle = document.querySelector(".how-we-work-title");

gsap.from(sectionTitle, {
  opacity: 0,
  x: 100,
  duration: 2,

  scrollTrigger: {
    trigger: section,
    start: "top 40%",
  },
});

//Animating top of the how we work section
const howWeWork = document.querySelectorAll(".how-we-work-content");
const tl3 = new gsap.timeline({
  scrollTrigger: {
    trigger: section,
    start: "top 30%",
  },
});

tl3.from(howWeWork[0], {
  opacity: 0,
  x: -50,
  duration: 0.5,
});

tl3.from(howWeWork[1], {
  opacity: 0,
  y: -50,
  duration: 0.5,
});

tl3.from(howWeWork[2], {
  opacity: 0,
  x: 50,
  duration: 0.5,
});

//Animating bottom of the how we work section
const howWeWorkBottom = document.querySelector(".how-we-work-wrapper-bottom");
const howWeWorkBottomTitle = document.querySelector(
  ".how-we-work-bottom-text h1"
);
const howWeWorkBottomBtn = document.querySelector(
  ".how-we-work-bottom-btn .btn"
);
const tl4 = new gsap.timeline({
  scrollTrigger: {
    trigger: section,
    start: "top -10%",
  },
});

//Animate for screen width with more than 450px
if (windowWidth > 450) {
  tl4.from(howWeWorkBottomTitle, {
    opacity: 0,
    x: -50,
    duration: 0.5,
  });

  tl4.from(howWeWorkBottomBtn, {
    opacity: 0,
    x: 50,
    duration: 0.5,
  });
}

//Animate for mobile devices
const tl5 = new gsap.timeline({
  scrollTrigger: {
    trigger: howWeWorkBottom,
    start: "top 50%",
  },
});

if (windowWidth <= 450) {
  tl5.from(howWeWorkBottomTitle, {
    opacity: 0,
    x: -50,
    duration: 0.5,
  });

  tl5.from(howWeWorkBottomBtn, {
    opacity: 0,
    x: 50,
    duration: 0.5,
  });
}

//Footer animations
const footer = document.querySelector("footer");
const footerContent = document.querySelectorAll(
  ".footer-wrapper-bottom-content"
);
const tl6 = new gsap.timeline({
  scrollTrigger: {
    trigger: footer,
    start: "top 75%",
  },
});

//Footer animations for screen with iwdth more than 450px
if (windowWidth > 450) {
  footerContent.forEach((footerContent) => {
    tl6.from(footerContent, {
      opacity: 0,
      y: -50,
      duration: 0.5,
    });
  });
}

//Footer animations for mobile devices
const tl7 = new gsap.timeline({
  scrollTrigger: {
    trigger: footer,
    start: "top 10%",
  },
});

if (windowWidth <= 450) {
  footerContent.forEach((footerContent) => {
    tl7.from(footerContent, {
      opacity: 0,
      x: -50,
      duration: 1,
    });
  });
}
