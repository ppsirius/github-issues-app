import "../scss/main.scss";

import PerfectScrollbar from "perfect-scrollbar";

window.addEventListener("load", () => {
  appInit();
});

function appInit() {
  // Scrollbar
  new PerfectScrollbar(".issues");
}
