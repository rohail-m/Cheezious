const listIcon = document.getElementById("listIcon");
const sideBar = document.getElementById("sidebar");
const underlay = document.getElementById("underlay");

const images = document.querySelectorAll(".hero-images");
const exploreRight = document.querySelector(".explore-right-arrow");
const exploreLeft = document.querySelector(".explore-left-arrow");
const exploreScroll = document.querySelector(".explore-scroll");

// ---- sidebar toggle ----
listIcon.addEventListener("click", () => {
  underlay.classList.add("show");
  sideBar.classList.add("open");
});

// click outside sidebar (on underlay) closes it
underlay.addEventListener("click", (e) => {
  // ensure we clicked the underlay itself, not the sidebar
  if (e.target === underlay) {
    underlay.classList.remove("show");
    sideBar.classList.remove("open");
  }
});

// ---- hero slider (simple fade) ----
let idx = 0;
// ensure first is active
images.forEach((img) => img.classList.remove("active"));
if (images.length) images[0].classList.add("active");

setInterval(() => {
  images[idx].classList.remove("active");
  idx = (idx + 1) % images.length;
  images[idx].classList.add("active");
}, 3000);

// ---- explore scroll arrows ----
exploreRight.addEventListener("click", () => {
  if (!exploreScroll) return;
  exploreScroll.scrollBy({ left: 300, behavior: "smooth" });
});

exploreLeft.addEventListener("click", () => {
  if (!exploreScroll) return;
  exploreScroll.scrollBy({ left: -300, behavior: "smooth" });
});

// keyboard optional: arrow keys to scroll the explore section
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight")
    exploreScroll && exploreScroll.scrollBy({ left: 200, behavior: "smooth" });
  if (e.key === "ArrowLeft")
    exploreScroll && exploreScroll.scrollBy({ left: -200, behavior: "smooth" });
});
