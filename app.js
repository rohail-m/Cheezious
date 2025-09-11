let listIcon = document.querySelector(".list-icon");
let sideBar = document.querySelector(".sidebar");
let underlay = document.querySelector(".underlay");
let images = document.querySelectorAll(".hero-images");

listIcon.addEventListener("click", () => {
  underlay.style.visibility = "visible";
  sideBar.style.transform = "translateX(0)";
});

underlay.addEventListener("click", () => {
  underlay.style.visibility = "hidden";
  sideBar.style.transform = "translateX(-100%)";
});

let num = 0;
setInterval(() => {
  if (num > images.length - 1) {
    num = 0;
  }

  images.forEach((items, index) => {
    items.style.opacity = "0";
  });
  images[num].style.opacity = "1";
  num++;
}, 3000);
