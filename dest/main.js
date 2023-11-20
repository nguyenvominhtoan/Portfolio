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
const body = document.querySelector('body');
var tl5 = gsap.timeline({ paused: true });

tl5.to(menu, {
  duration: 1,
  opacity: 1,
  height: '100vh',
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
  body.classList.toggle("--disable-scroll")
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



// scroll text animated
const rows = document.querySelectorAll(".cb-tagreel-row");

rows.forEach(function (e, i) {
  let row_width = e.getBoundingClientRect().width;
  let row_item_width = e.children[0].getBoundingClientRect().width;
  let initial_offset = ((2 * row_item_width) / row_width) * 100 * -1;
  let x_translation = initial_offset * -1;

  gsap.set(e, {
    xPercent: `${initial_offset}`
  });

  let duration = 5 * (i + 1);

  var tl = gsap.timeline();

  tl.to(e, {
    ease: "none",
    duration: duration,
    xPercent: 0,
    repeat: -1
  });
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


//scroll down animate
const text = document.querySelector(".circle__text p");
text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 5.8}deg)">${char}</span>`
  )
  .join("");




//scroll to section
function scrollToSection() {
  let menus = document.querySelectorAll(".header .header__menu a");
  let heightHeader = document.querySelector(".header").offsetHeight;
  let sections = [];

  function removeActive() {
    menus.forEach(function (menu_element, menu_index) {
      menu_element.classList.remove("active");
    });
  }

  menus.forEach(function (element, index) {
    let className = element.getAttribute("href").replace("#", "");
    let section = document.querySelector("." + className);
    sections.push(section);

    element.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: section.offsetTop - heightHeader,
        behavior: "smooth",
      });
      removeActive();
      element.classList.add("active");
    });
  });
  window.addEventListener("scroll", function (e) {
    e.preventDefault();
    let positionScroll = window.pageYOffset;
    sections.forEach(function (section, index) {
      if (positionScroll > section.offsetTop) {
        removeActive();
        menus[index].classList.add("active");
      } else {
        menus[index].classList.remove("active");
      }
    });
  });
}
scrollToSection();


//scroll to top
const btn = document.querySelector(".footer__item-right");
function clickToTop() {
  btn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
clickToTop();
