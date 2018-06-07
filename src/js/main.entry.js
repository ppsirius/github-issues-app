import "../scss/main.scss";

import PerfectScrollbar from "perfect-scrollbar";

window.addEventListener("load", () => {
  appInit();
});

function appInit() {
  // Scrollbar
  new PerfectScrollbar(".issues");

  // Mark Icons Toggle
  const markIcons = document.querySelectorAll(".issue-mark-icon");
  markIcons.forEach(icon => {
    icon.addEventListener("click", () => {
      toogleMarkIcon(icon);
    });
  });
}

function toogleMarkIcon(element) {
  element.classList.toggle("active");
}
