AOS.init();

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
  })
  scale.on("mouseleave", function () {
    cusorFollow.removeClass("active")
  })
});



// menu mobile
function menuMobile() {
  const btnmenu = document.querySelector(".header__btn");
  const nav = document.querySelector(".nav");

  btnmenu.addEventListener("click", function () {
    this.classList.toggle("active");
    nav.classList.toggle("active");
    document.body.classList.toggle("--disable-scroll");
  });
}
menuMobile();

var $cursor = $(".cursor"),
  $overlay = $(".project-overlay");
function moveCircle(e) {
  TweenLite.to($cursor, 0.5, {
    css: {
      left: e.pageX,
      top: e.pageY,
    },
    delay: 0.03,
  });
}
$(".p-1").hover(function () {
  $(".cursor").css({
    "background-image": "url(images/luxestate.png)",
  });
});
$(".p-2").hover(function () {
  $(".cursor").css({
    "background-image": "url(images/wooder.png)",
  });
});
$(".p-3").hover(function () {
  $(".cursor").css({
    "background-image": "url(images/finance.png)",
  });
});
$(".p-4").hover(function () {
  $(".cursor").css({
    "background-image": "url(images/course.png)",
  });
});
var flag = false;
$($overlay).mousemove(function () {
  flag = true;
  TweenLite.to($cursor, 0.3, { scale: 1, autoAlpha: 1 });
  $($overlay).on("mousemove", moveCircle);
});
$($overlay).mouseout(function () {
  flag = false;
  TweenLite.to($cursor, 0.3, { scale: 0.1, autoAlpha: 0 });
});

gsap.registerPlugin(ScrollTrigger);
let tl2 = gsap.timeline();
tl2.to("#scrollingText", {
  x: 1000,
  duration: 200,
  repeat: 1,
  ease: "linear",
});
let tl = gsap.timeline();
tl.to("#scrollingText", {
  xPercent: -40,
  scrollTrigger: {
    trigger: "#scrollingText",
    scrub: 0.5,
  },
});

let tl3 = gsap.timeline();
tl3.to("#scrollingText1", {
  x: 1000,
  duration: 200,
  repeat: 1,
  ease: "linear",
});
let t4 = gsap.timeline();
t4.to("#scrollingText1", {
  xPercent: -40,
  scrollTrigger: {
    trigger: "#scrollingText1",
    scrub: 0.5,
  },
});

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
  // const progress = document.querySelector(".loading__inner-progress"),
  const textPerCenter = document.querySelector(".loading__percent");

  // progress.style.width = `${percent}%`;
  textPerCenter.innerHTML = `${percent}%`;
}
function hideLoading() {
  const loading = document.querySelector(".loading"),
    body = document.querySelector("body");
  loading.classList.add("--hide");
  body.classList.remove("--disable-scroll");
}
initLoading();

function hideLoading() {
  const loading = document.querySelector(".loading"),
    body = document.querySelector("body");
  loading.classList.add("--hide");
  body.classList.remove("--disable-scroll");
}
initLoading();

//text parralax
// $(".parallaxed").tilt({
//   glare: true,
//   maxGlare: 0.3,
//   maxTilt: 7,
//   speed: 750,
// });
// console.log(1);

//Slider Photo
// function sliderPhoto() {
//   var slider = document.querySelector(".other__project");
//   if (slider) {
//     var flkty = new Flickity(slider, {
//       // options
//       // cellAlign: "left",
//       // contain: true,
//       prevNextButtons: false,
//       pageDots: false,
//       // wrapAround: true,
//       // freeScoll: true,
//       // groupCells: 2,
//       // autoPlay: 1500,
//       on: {
//         ready: function () {
//           console.log("Flickity is ready");
//         },
//         change: function (index) {
//           console.log("Slide changed to");
//         },
//       },
//     });
//   }
// }
// sliderPhoto();
