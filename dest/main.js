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



// //loading
// function initLoading() {
//   let loadedCount = 0,
//     imgs = document.querySelectorAll("img").length,
//     container = document.querySelector("body");
//   let imgLoaded = imagesLoaded(container);
//   imgLoaded
//     .on("progress", (instance) => {
//       loadedCount++;
//       percent = Math.floor((loadedCount / imgs) * 100);
//       handleLoading(percent);
//     })
//     .on("always", (instance) => {
//       console.log("always");
//     })
//     .on("fail", (instance) => {
//       console.log("fail");
//     })
//     .on("done", (instance) => {
//       console.log("done");
//       hideLoading();
//     });
// }
// function handleLoading(percent) {
//   const textPerCenter = document.querySelector(".loading__percent");

//   textPerCenter.innerHTML = `${percent}%`;
// }
// function hideLoading() {
//   const loading = document.querySelector(".loading"),
//     body = document.querySelector("body");
//   loading.classList.add("--hide");
//   body.classList.remove("--disable-scroll");
// }
// initLoading();


// document.addEventListener("DOMContentLoaded", function () {
//   const menuOpen = document.querySelector(".menu-open")
//   const menuClose = document.querySelector(".menu-close")

//   let isOpen = false;
//   const defaultEase = "power4.inOut"

//   gsap.set(".menu-logo img", { y: 50 })
//   gsap.set(".menu-link p", { y: 40 })
//   gsap.set(".menu-sub-item p", { y: 12 })
//   gsap.set(["#img-2, #img-3, #img-4"], { top: "150%" })

//   menuOpen.addEventListener("click", function () {
//     if (isOpen) return;
//     openMenu();
//   });
//   menuClose.addEventListener("click", function () {
//     if (!isOpen) return;
//     closeMenu();
//   });
//   const openMenu = () => {
//     gsap.to(".menu", {
//       clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%",
//       pointerEvents: "all",
//       duration: 1.25,
//       ease: defaultEase,
//     })
//   }
// });
gsap.registerPlugin(ScrollTrigger);
function addImageScaleAnimation() {
    gsap.utils.toArray("section").forEach((section, index) => {
        const image = document.querySelector(`#previews-${index + 1} img`)
        const startCondition = index === 0 ? "top top" : "bottom bottom";
        gsap.getProperty(image, {
            scrollTrigger: {
                trigger: section,
                start: startCondition,
                end: () => {
                    const viewportHeight = window.innerHeight;
                    const sectionBottom = section.offsetTop + section.offsetHeight
                    const additionalDistance = viewportHeight * 0.5;
                    const endValue = sectionBottom - viewportHeight + additionalDistance
                    return `+=${value}`
                },
                scrub: 1,
            },
            scale: 3,
            ease: "none",
        });
    });
}
addImageScaleAnimation();