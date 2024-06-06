gsap.registerPlugin(ScrollTrigger);
document.addEventListener("DOMContentLoaded", function () {
  const sliderContent = [
    "Echeos",
    "Ethereal",
    "Neon Void",
    "Mystics",
    "Horizons",
    "Dystopian"
  ];
  const slider = document.querySelector(".slider")
  let activeSlide = 0;
  document.addEventListener("click", function () {

    const currentSlide = slider.querySelectorAll(".slide:not(.exiting)")

    const slideTheme = activeSlide % 2 ? "dark" : "light"

    activeSlide = (activeSlide + 1) % sliderContent.length;
    if (currentSlide) {
      const existingImgs = currentSlide.querySelectorAll("img");
      gsap.to(existingImgs, {
        top: "0%",
        duration: 1.5,
        ease: "power4.inOut"
      });
      currentSlide.classList.add("exiting");
    }
    const newSlide = document.createElement("div");
    newSlide.classList.add("slide")
    newSlide.classList.add(slideTheme)
    newSlide.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"

    const newSlideImg1 = document.createElement("div")
    newSlideImg1.className = "slide-img slide-img-1"
    const img1 = document.createElement("img")
    img1.src = `./images/slider-${activeSlide + 1}-1.jpg`
    img1.style.top = "100%"
    newSlideImg1.appendChild(img1)
    newSlide.appendChild(newSlideImg1)

    const newSlideContent = document.createElement("div")
    newSlideContent.classList.add("slide-content")
    newSlideContent.innerHTML = `<h1 style="scale: 1.5">${sliderContent[activeSlide]}</h1>`
    newSlide.appendChild(newSlideContent)

    const newSlideImg2 = document.createElement("div")
    newSlideImg2.className = "slide-img slide-img-2"
    const img2 = document.createElement("img")
    img2.src = `./images/slider-${activeSlide + 1}-2.jpg`
    img2.style.top = "100%"
    newSlideImg2.appendChild(img2)
    newSlide.appendChild(newSlideImg2)
    slider.appendChild(newSlide)

    gsap.to(newSlide, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%",
      duration: 1.5,
      ease: "power4.inOut",
      onStart: () => {
        gsap.to([img1, img2], {
          top: "50%",
          duration: 1.5,
          ease: "power4.inOut"
        })
      },
      onComplete: () => {
        removeExtraSlide(slider)
      }
    });
    gsap.to(".slide-content h1", {
      scale: 1,
      duration: 1.5,
      ease: "power4.inOut"
    })

  });
  function removeExtraSlide(container) {
    while (container.children.lenght > 5) {
      container.removeChild(container.firstChild)
    }
  }
})

//custom mouse
let cusor = $(".cusor");
let cusorFollow = $(".cusorFollow");
let scale = $(".scale");

$(window).on("mousemove", function (e) {
  gsap.to(cusor, {
    x: e.clientX - (cusor.width() / 2),
    y: e.clientY - (cusor.height() / 2), // lay toa do y
    duration: 0.2,
  });
  gsap.to(cusorFollow, {
    x: e.clientX - (cusorFollow.width() / 2),
    y: e.clientY - (cusorFollow.height() / 2), // lay toa do y
    duration: 0.4,
  });

  scale.on("mouseenter", function () {
    cusorFollow.addClass("active")
    cusor.addClass("active")
  })
  scale.on("mouseleave", function () {
    cusorFollow.removeClass("active")
    cusor.removeClass("active")
  })
});


//loading
// document.addEventListener("DOMContentLoaded", function () {
//   const counter3 = document.querySelector(".counter-3");

//   for (let i = 0; i < 2; i++) {
//     for (let j = 0; j < 10; j++) {
//       const div = document.createElement("div");
//       div.className = "num";
//       div.textContent = j;
//       counter3.appendChild(div);
//     }
//   }

//   const finalDiv = document.createElement("div");
//   const home = document.querySelector("homepage");
//   finalDiv.className = "num";
//   finalDiv.textContent = 0;
//   counter3.appendChild(finalDiv);
//   function animate(counter, duration, delay = 0) {
//     const numHeight = counter.querySelector(".num").clientHeight;
//     const totalDistance =
//       (counter.querySelectorAll(".num").length - 1) * numHeight;
//     gsap.to(counter, {
//       y: -totalDistance,
//       duration: duration,
//       delay: delay,
//       ease: "power2.inOut"
//     })
//   }
//   animate(counter3, 5);
//   animate(document.querySelector(".counter-2"), 6);
//   animate(document.querySelector(".counter-1"), 2, 4)
// });
// gsap.to(".loading-screen", {
//   opacity: 0,
//   duration: 0.5,
//   delay: 6,
//   ease: "power4.Inout",

// })

// const team = [{ number: 01, name: "Ava Sinclar", role: "Creative Dev" },
// { number: 02, name: "Liam Archer", role: "Creative Dev" },
// { number: 03, name: "Tripper Davoen", role: "Creative Dev" },
// { number: 04, name: "Ethan Huntelaar", role: "Creative Dev" }]
// const cusor1 = document.querySelector('.cusor1');
// const cusorIcon = document.querySelector('i');

// const cusorWidth = cusor1.offsetWidth / 2;

// const cusorHeight = cusor1.offsetHeight / 2;

// let currentSlide = 1;
// const totalSlider = 4;

// const updateCusorClass = (xPosition) => {
//   const halfPageWidth = window.innerWidth / 2;
//   if (xPosition > halfPageWidth) {
//     if (currentSlide < totalSlider) {
//       cusorIcon.classList.remove('bi-arrow-left');
//       cusorIcon.classList.add('bi-arrow-right');
//       cusor1.style.display = "";
//     }
//     else {
//       cusor1.style.display = "none";
//     }
//   }
//   else {
//     if (currentSlide > 1) {
//       cusorIcon.classList.remove('bi-arrow-left');
//       cusorIcon.classList.add('bi-arrow-right');
//       cusor1.style.display = "";
//     }
//     else {
//       cusor1.style.display = "none";
//     }
//   }
// }
// document.addEventListener('mousemove', (e) => {
//   gsap.to(cusor1, {
//     x: e.clientX - cusorWidth,
//     y: e.clientY - cusorHeight,
//     duration: 1,
//     ease: "power3.out"
//   });
//   updateCusorClass(e.clientX);
// });
// const updateInfo = (slideNumber) => {
//   const member = team[slideNumber - 1];
//   document.querySelector('.info .num').textContent = '0' + member.number;
//   document.querySelector('.info .name').textContent = member.name;
//   document.querySelector('.info .role').textContent = member.role;
// };
// const animateSlide = (slideNumber, reveal) => {
//   const marquee = document.querySelector(`.t-${slideNumber}.marquee-wrapper`);
//   const img = document.getElementById(`t-${slideNumber}`);

//   const clipPathValue = reveal ? 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)' : "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
//   gsap.to(marquee, {
//     clipPath: clipPathValue, duration: 1, ease: "power4.out", delay: 0.3,
//   })
//   gsap.to(img, {
//     clipPath: clipPathValue, duration: 1, ease: "power4.out",
//   })
// };
// updateInfo(currentSlide);
// const handleRightClick = () => {
//   if (currentSlide < totalSlider) {
//     animateSlide(currentSlide + 1, true);
//     currentSlide++;
//     updateInfo(currentSlide);
//   }
// }
// const handleLeftClick = () => {
//   if (currentSlide > 1) {
//     animateSlide(currentSlide, false);
//     currentSlide--;
//     updateInfo(currentSlide);
//   }
// };
// document.addEventListener("click", (e) => {
//   const halfPageWidth = window.innerWidth / 2;
//   if (e.clientX > halfPageWidth) {
//     handleRightClick();
//   }
//   else {
//     handleLeftClick();
//   }
// })

// let tl2 = gsap.timeline();
// tl2.to("#scrollingText", {
//   x: 1000,
//   duration: 18,
//   repeat: -1,
//   ease: 'linear'
// })
// let tl = gsap.timeline();
// tl.to('#scrollingText', {
//   xPercent: 15,
//   scrollTrigger: {
//     trigger: "#scrollingText",
//     scrub: 1
//   }
// })
// function showTime() {
//   var date = new Date();
//   var h = date.getHours(); // 0 - 23
//   var m = date.getMinutes(); // 0 - 59
//   // var s = date.getSeconds(); // 0 - 59
//   var session = "AM";

//   if (h == 0) {
//     h = 12;
//   }

//   if (h > 12) {
//     h = h - 12;
//     session = "PM";
//   }

//   h = (h < 10) ? "0" + h : h;
//   m = (m < 10) ? "0" + m : m;
//   // s = (s < 10) ? "0" + s : s;

//   var time = h + ":" + m + " " + session;
//   document.getElementById("MyClockDisplay").innerText = time;
//   document.getElementById("MyClockDisplay").textContent = time;

//   setTimeout(showTime, 1000);

// }

// showTime();
//loading
function initLoading() {
  let loadedCount = 0,
    imgs = document.querySelectorAll("img").length,
    container = document.querySelector("body");
  let imgLoaded = imagesLoaded(container);
  imgLoaded
    .on("progress", (instance) => {
      loadedCount++;
      percent = Math.floor((loadedCount / imgs) * 100);
      handleLoading(percent);
    })
    .on("always", (instance) => {
      console.log("always");
    })
    .on("fail", (instance) => {
      console.log("fail");
    })
    .on("done", (instance) => {
      console.log("done");
      hideLoading();
    });
}
function handleLoading(percent) {
  const textPerCenter = document.querySelector(".loading__percent");

  textPerCenter.innerHTML = `${percent}%`;
}
function hideLoading() {
  const loading = document.querySelector(".loading"),
    body = document.querySelector("body");
  loading.classList.add("--hide");
  body.classList.remove("--disable-scroll");
}
initLoading();
//changeHeader
function changeHeader() {
  const header = document.querySelector(".header");
  document.addEventListener("scroll", function () {
    let scrolY = window.scrollY;
    if (scrolY > 500) {
      header.classList.add("--bg-header");
    } else {
      header.classList.remove("--bg-header");
    }
  });
}
changeHeader();

