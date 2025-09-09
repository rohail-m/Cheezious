let listIcon = document.querySelector(".list-icon");
let sideBar = document.querySelector(".sidebar");
let underlay = document.querySelector(".underlay");

listIcon.addEventListener("click", () => {
  underlay.style.visibility = "visible";
  sideBar.style.transform = "translateX(0)";
});

underlay.addEventListener("click", () => {
  underlay.style.visibility = "hidden";
  sideBar.style.transform = "translateX(-100%)";
});
