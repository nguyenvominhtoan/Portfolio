
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