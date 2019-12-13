// Fullpagejs
new fullpage("#fullpage", {
  anchors: ["0", "1"],
  navigation: true,
  lockAnchors: true,
  scrollOverflow: true
});

function scrollFunction() {
  document.getElementById("scroll").click(fullpage_api.moveTo(1));
}

function topFunction() {
  document.getElementById("top").click(fullpage_api.moveTo(0));
}

//Scrollable sections
// document.addEventListener("DOMContentLoaded", function(event) {
//   let a = document.getElementById("environs");
//   let b = document.getElementById("montagne");
//   let c = document.getElementById("reservations");
//   function resize() {
//     if (window.innerWidth < 1129) {
//       a.classList.remove("fp-noscroll");
//       b.classList.remove("fp-noscroll");
//       c.classList.remove("fp-noscroll");
//     } else {
//       a.classList.add("fp-noscroll");
//       b.classList.add("fp-noscroll");
//       c.classList.add("fp-noscroll");
//     }
//     fullpage_api.reBuild();
//   }
//   window.onload = resize;
// });

// Cursor
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
  cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
});

document.addEventListener("wheel", e => {
  cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
});

document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("mouseenter", () => cursor.classList.add("condense"));
  link.addEventListener("mouseleave", () => cursor.classList.remove("condense"));
});

