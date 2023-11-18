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

//menu mobile
const ham = document.querySelector(".header__btn");
const menu = document.querySelector('.nav');
const links = menu.querySelectorAll('li');

var tl5 = gsap.timeline({ paused: true });

tl5.to(menu, {
  duration: 1,
  opacity: 1,
  height: '100vh', // change this to 100vh for full-height menu
  ease: 'expo.inOut',
})
tl5.from(links, {
  duration: 1,
  opacity: 0,
  y: 20,
  stagger: 0.1,
  ease: 'expo.inOut',
}, "-=0.5");

tl5.reverse();

ham.addEventListener('click', () => {
  ham.classList.toggle("active")
  tl5.reversed(!tl5.reversed());
});



//cursor view project
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

// title scroll trigger
gsap.registerPlugin(ScrollTrigger);
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

//scroll animation text




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


