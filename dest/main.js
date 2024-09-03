// //time
// let d = document.getElementById("d1");
// let time = function () {
//     let tstamp = new Date()
//         .toLocaleTimeString('en-US', {
//             timeZone: 'America/Los_Angeles',
//             hour12: true
//         });
//     d.innerText = tstamp;
//     return tstamp;
// };
// setInterval(time, 1000);

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

$(document).ready(function () {
    // Image Animation
    const items = document.querySelectorAll(".anime-list li");
    items.forEach((el) => {
        gsap.set(".hover-img", { xPercent: -50, yPercent: -50 });
        const image = el.querySelector(".hover-img");
        const innerImage = el.querySelector(".hover-img img");
        const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const mouse = {
            x: pos.x
        };
        const speed = 0.1;
        const xSet = gsap.quickSetter(image, "x", "px");
        window.addEventListener("mousemove", (e) => {
            mouse.x = e.x;
        });

        gsap.ticker.add(() => {
            const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
            pos.x += (mouse.x - pos.x) * dt;
            xSet(pos.x);
        });

        var direction = "",
            oldx = 0,
            // Vars
            lastCursorX = null,
            lastCursorY = null,
            cursorThreshold = 150,
            mousemovemethod = function (e) {
                if (e.pageX < oldx && e.clientX <= lastCursorX - cursorThreshold) {
                    direction = "left";
                    lastCursorX = e.clientX;
                    innerImage.style.transform = "rotate(-15deg)";
                } else if (
                    e.pageX > oldx &&
                    e.clientX >= lastCursorX + cursorThreshold
                ) {
                    direction = "right";
                    lastCursorX = e.clientX;
                    innerImage.style.transform = "rotate(15deg)";
                }
                oldx = e.pageX;
            };
        $(document).on("mousemoveend", function () {
            innerImage.style.transform = "translateX(0%) rotate(0deg)";
        });
        document.addEventListener("mousemove", mousemovemethod);
        (function ($) {
            var timeout;
            $(document).on("mousemove", function (event) {
                if (timeout !== undefined) {
                    window.clearTimeout(timeout);
                }
                timeout = window.setTimeout(function () {
                    // trigger the new event on event.target, so that it can bubble appropriately
                    $(event.target).trigger("mousemoveend");
                }, 100);
            });
        })(jQuery);
    });

    // Mouse Cursor Animation
    gsap.set(".ball", { xPercent: -50, yPercent: -50 });
    const ball = document.querySelector(".ball");
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.08;

    const xSet = gsap.quickSetter(ball, "x", "px");
    const ySet = gsap.quickSetter(ball, "y", "px");

    window.addEventListener("mousemove", (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    });
    gsap.ticker.add(() => {
        const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
        pos.x += (mouse.x - pos.x) * dt;
        pos.y += (mouse.y - pos.y) * dt;
        xSet(pos.x);
        ySet(pos.y);
    });

    // Hacky Code
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;
    const list = document.querySelectorAll(".anime-list li");

    list.forEach((el) => {
        el.onmouseenter = (event) => {
            const target_element = event.target.querySelector("h2");
            let iteration = 0;
            const interval = setInterval(() => {
                target_element.innerText = target_element.innerText
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return target_element.dataset.value[index];
                        }

                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("");

                if (iteration >= target_element.dataset.value.length) {
                    clearInterval(interval);
                }
                iteration += 1 / 3;
            }, 20);
        };
    });
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
const text = document.querySelector(".text p");

text.innerHTML = text.innerText
    .split("")
    .map(
        (char, i) => `<span style="transform:rotate(${i * 5.8}deg)">${char}</span>`
    )
    .join("");
//Slider Photo
function sliderPhoto() {
    var slider = document.querySelector(".reviews__item");
    if (slider) {
        var flkty = new FlickityResponsive(slider, {
            // options
            cellAlign: "center",
            // contain: true,
            prevNextButtons: false,
            wrapAround: true,
            // freeScoll: true,
            groupCells: 2,
            // autoPlay: 1500,
            on: {
                ready: function () {
                    console.log("Flickity is ready");
                },
                change: function (index) {
                    console.log("Slide changed to");
                },
            },
            responsive: [
                {
                    breakpoint: 920,
                    settings: {
                        groupCells: 1,
                    },
                },
            ],
        });
    }
}
sliderPhoto();
