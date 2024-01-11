
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
document.addEventListener("DOMContentLoaded", function () {
  const counter3 = document.querySelector(".counter-3");

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 10; j++) {
      const div = document.createElement("div");
      div.className = "num";
      div.textContent = j;
      counter3.appendChild(div);
    }
  }

  const finalDiv = document.createElement("div");
  const home = document.querySelector("homepage");
  finalDiv.className = "num";
  finalDiv.textContent = 0;
  counter3.appendChild(finalDiv);
  function animate(counter, duration, delay = 0) {
    const numHeight = counter.querySelector(".num").clientHeight;
    const totalDistance =
      (counter.querySelectorAll(".num").length - 1) * numHeight;
    gsap.to(counter, {
      y: -totalDistance,
      duration: duration,
      delay: delay,
      ease: "power2.inOut"
    })
  }
  animate(counter3, 5);
  animate(document.querySelector(".counter-2"), 6);
  animate(document.querySelector(".counter-1"), 2, 4)
});
gsap.to(".loading-screen", {
  opacity: 0,
  duration: 0.5,
  delay: 6,
  ease: "power4.Inout",

})

// //work
// // const positions = [
// //   { top: "0%", left: "0%" },
// //   { top: "0%", left: "10%" },
// //   { top: "0%", left: "60%" },
// //   { top: "16%", left: "15%" },
// //   { top: "16%", left: "40%" },
// //   { top: "16%", left: "90%" },
// //   { top: "32%", left: "33%" },
// //   { top: "32%", left: "75%" },
// //   { top: "48%", left: "0%" },
// //   { top: "48%", left: "50%" },
// //   { top: "64%", left: "57%" },
// //   { top: "64%", left: "90%" },
// //   { top: "80%", left: "20%" },
// //   { top: "80%", left: "70%" }
// // ];

// // const imgs = document.querySelectorAll(".img")
// // gsap.set(".img", {
// //   top: "45%",
// //   left: "50%",
// //   transform: "translate(-50%,-50%) scale(0)"
// // });
// // gsap.to(".img", {
// //   scale: 1,
// //   width: "300px",
// //   height: "400px",
// //   stagger: 0.15,
// //   duration: 0.75,
// //   ease: "power2.out",
// //   delay: 1,
// //   onComplete: scatterAndShrink,
// // });
// // function scatterAndShrink() {
// //   gsap.to(".img", {
// //     top: (i) => positions[i].top,
// //     left: (i) => positions[i].left,
// //     transform: "none",
// //     width: "75px",
// //     height: "100px",
// //     stagger: 0.75,
// //     duration: 0.75,
// //     ease: "powerr2.out",
// //   })
// // }

// //about
// gsap.registerPlugin(ScrollTrigger);
// document.addEventListener("DOMContentLoaded", function () {
//   const contentHoolderHeight = document.querySelector(".hero__title").offsetHeight;
//   const imgHolderHeight = window.innerHeight;
//   const additionalScrollHeight = window.innerHeight;
//   const totalBodyHeight = contentHoolderHeight + imgHolderHeight + additionalScrollHeight;
//   document.body.style.height = `${totalBodyHeight}px`;
// });
// ScrollTrigger.create({
//   trigger: ".work__content",
//   start: "-0.1% top",
//   end: "bottom bottom",
//   transition: 1,
//   onEnter: () => {
//     gsap.set(".work__content", { position: "absolute", top: "195%" })
//   },
//   onLeaveBack: () => {
//     gsap.set(".work__content", { position: "fixed", top: "0" })
//   }
// })
// gsap.to(".work__header .work__header-letters:first-child", {
//   x: () => -innerWidth * 5,
//   scale: 1,
//   ease: "power2.inOut",
//   scrollTrigger: {
//     start: "top top",
//     end: `+=200%`,
//     scrub: 1,
//   }

// })
// gsap.to(".work__header .work__header-letters:last-child", {
//   x: () => innerWidth * 5,
//   scale: 1,
//   ease: "power2.inOut",
//   scrollTrigger: {
//     start: "top top",
//     end: `+=200%`,
//     scrub: 1,
//   }
// })
// gsap.to(".img-holder", {
//   rotation: 0,
//   clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//   ease: "power2.inOut",
//   scrollTrigger: {
//     start: "top top",
//     end: `+=200%`,
//     scrub: 1,
//   }
// })
// gsap.to(".img-holder img", {
//   scale: 1,
//   ease: "power2.inOut",
//   scrollTrigger: {
//     start: "top top",
//     end: `+=200%`,
//     scrub: 1,
//   }
// })

//work
// const items = document.querySelectorAll(".item");
// const container = document.querySelector(".container");
// const numberOfItem = items.length;
// const angleIncrement = (2 * Math.PI) / numberOfItem;
// const radius = 300;
// let isGalleryOpen = false;

// const centerX = container.offsetWidth / 2;
// const centerY = container.offsetHeight / 2;

// const tl = gsap.timeline();

// items.forEach(function (item, index) {
//   const img = document.createElement('img');
//   img.src = 'images/' + (index + 1) + '.jpg';
//   item.appendChild(img);

//   const angle = index * angleIncrement;
//   const initialRotation = (angle * 180 / Math.PI) - 90;
//   const x = centerX + radius * Math.cos(angle);
//   const y = centerY + radius * Math.sin(angle);

//   gsap.set(item, { scale: 0 });
//   tl.to(item, {
//     left: x + 'px',
//     top: y + 'px',
//     rotation: initialRotation,
//     scale: 1,
//     duration: 1,
//     ease: "power2.Out",
//     delay: 1
//   }, index * 0.1);
//   item.addEventListener("click", function () {
//     if (!isGalleryOpen) {
//       isGalleryOpen = true;
//       const duplicate = item.cloneNode(true);
//       duplicate.style.position = 'absolute';
//       container.appendChild(duplicate);
//       gsap.to(Array.from(items).filter(i => i != item), {
//         scale: 0,
//         duration: 0.5,
//         ease: "power2.in",
//         stagger: 0.05
//       });
//       const endRotation =
//         initialRotation > 180 ? initialRotation - 360 : initialRotation;
//       gsap.to([item, duplicate], {
//         rotation: endRotation,
//         duration: 0.0001,
//         onComplete: function () {
//           gsap.to([item, duplicate], {
//             left: "50%",
//             top: "50%",
//             transform: "translate(-50%, -50%) scale(3)",
//             duration: 1,
//             ease: "power2.out",
//             delay: 1.25
//           })
//         }
//       });
//       const closeGallery = function () {
//         if (isGalleryOpen) {
//           gsap.to([item, duplicate], {
//             left: x + 'px',
//             top: y + 'px',
//             rotation: initialRotation,
//             scale: 1,
//             duration: 1,
//             ease: "power2.out",
//             onComplete: function () {
//               duplicate.remove();
//               gsap.to(items, {
//                 scale: 1,
//                 duration: 1,
//                 stagger: 0.05,
//                 ease: "power2.out"
//               });
//               isGalleryOpen = false;
//             }
//           });
//         }
//       };
//       item.addEventListener("click", closeGallery);
//       duplicate.addEventListener("click", closeGallery);
//     }
//   })
// })
//get in touch
// function menuMobile() {
//   const btnmenu = document.querySelector(".header__btn");
//   const nav = document.querySelector(".nav");
//   const header = document.querySelector(".header")
//   btnmenu.addEventListener("click", function () {
//     this.classList.toggle("active");
//     nav.classList.toggle("active");
//     header.classList.toggle("active")
//     document.body.classList.toggle("--disable-scroll");
//   });
//   //hide nav
//   function hideNav() {
//     btnmenu.classList.remove("active");
//     nav.classList.remove("active");
//   }
//   //resize window
//   window.addEventListener("resize", function () {
//     let window = this.window.innerWidth;
//     if (window > 992) {
//       hideNav();
//     }
//   });
// }
// menuMobile();


//work
// document.addEventListener("DOMContentLoaded", function () {
//   function isInViewport(el) {
//     const rect = el.getBoundingClientRect();
//     return (
//       rect.top >= 0 && rect.left >= 0 &&
//       rect.bottom <= (window.innerHeight || documentElement.clientHeight)
//       && rect.right <= (window.innerWidth || documentElement.clientWidth)
//     );
//   }
//   const rows = document.querySelectorAll(".row");
//   rows.forEach((row) => {
//     if (isInViewport(row)) {
//       const img = document.querySelector("img");
//       if (row.querySelector(".left")) {
//         gsap.to(img, {
//           clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//         });
//       }
//       else {
//         gsap.to(img, {
//           clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//         });
//       }
//     }
//   });
//   gsap.utils.toArray(".img-container.right img").forEach((img) => {
//     gsap.to(img, {
//       clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//       scrollTrigger: {
//         trigger: img,
//         start: "top 75%",
//         end: "bottom 70%",
//         scrub: true,
//       }
//     });
//   });
//   gsap.utils.toArray(".img-container.left img").forEach((img) => {
//     gsap.to(img, {
//       clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//       scrollTrigger: {
//         trigger: img,
//         start: "top 75%",
//         end: "bottom 70%",
//         scrub: true,
//       }
//     });
//   });
//   gsap.utils.toArray(".img-container p").forEach((text) => {
//     gsap.from(text, {
//       opacity: 0,
//       y: 20,
//       scrollTrigger: {
//         trigger: text,
//         start: "top 90%",
//         // toggleActions: " play ",
//       }
//     })
//   })
// })
var $cursor = $(".cursor"),
  $overlay = $(".project-overlay");
function moveCircle(e) {
  TweenLite.to($cursor, 0.5, {
    css: {
      left: e.pageX,
      top: e.pageY
    },
    delay: 0.03
  });
}
$(".p-1").hover(function () {
  $(".cursor").css({ "background-image": "url(https://images.unsplash.com/photo-1477704080907-b04e4e2d3282?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)" });
});
$(".p-2").hover(function () {
  $(".cursor").css({ "background-image": "url(https://images.unsplash.com/photo-1553979199-b0b04376d319?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80)" });
});
$(".p-3").hover(function () {
  $(".cursor").css({ "background-image": "url(https://images.unsplash.com/photo-1557263432-f37dd16f6d08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80)" });
});
$(".p-4").hover(function () {
  $(".cursor").css({ "background-image": "url(https://images.unsplash.com/photo-1512830414785-9928e23475dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)" });
});
var flag = false;
$($overlay).mousemove(function () {
  flag = true;
  TweenLite.to($cursor, 0.3, { scale: 0.7, autoAlpha: 1 });
  $($overlay).on("mousemove", moveCircle);
});
$($overlay).mouseout(function () {
  flag = false;
  TweenLite.to($cursor, 0.3, { scale: 0.1, autoAlpha: 0 });
});


//changeHeader
function changeHeader() {
  const header = document.querySelector(".header");
  document.addEventListener("scroll", function () {
    let scrolY = window.scrollY;
    if (scrolY > 500) {
      header.classList.add("active-header");
    } else {
      header.classList.remove("active-header");
    }
  });
}
changeHeader();