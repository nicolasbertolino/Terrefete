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

// Cursor
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
  cursor.setAttribute("style", "top: " + (e.pageY - 17) + "px; left: " + (e.pageX - 17) + "px;")
});

document.addEventListener("wheel", e => {
  cursor.setAttribute("style", "top: " + (e.pageY - 17) + "px; left: " + (e.pageX - 17) + "px;")
});

document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("mouseenter", () => cursor.classList.add("condense"));
  link.addEventListener("mouseleave", () => cursor.classList.remove("condense"));
});

