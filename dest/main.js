
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


// scroll text animated
const rows = document.querySelectorAll(".cb-tagreel-row");

rows.forEach(function (e, i) {
  let row_width = e.getBoundingClientRect().width;
  let row_item_width = e.children[0].getBoundingClientRect().width;
  let initial_offset = ((2 * row_item_width) / row_width) * 100 * -1;


  gsap.set(e, {
    xPercent: `${initial_offset}`
  });

  let duration = 7 * (i + 1);

  var tl = gsap.timeline();

  tl.to(e, {
    ease: "none",
    duration: duration,
    xPercent: 0,
    repeat: -1
  });
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
  ease: "power2.inOut",
})

//clock
function updateDigitalClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const clockElement = document.getElementById('clock');
  clockElement.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(updateDigitalClock, 1000);
updateDigitalClock(); 