// store interval object to use later in stopInterval
let backgroundInterval;

import ColorManager from "./settings/main-color.js";
import BackgroundManager from "./settings/background.js";

let colorManager = new ColorManager();
let backgroundManager = new BackgroundManager();

// toggle settings
let settingsIcon = document.querySelector(".settings__icon");
settingsIcon.onclick = (e) => {
  //   toggle spinning feature of icon
  settingsIcon.firstElementChild.classList.toggle("fa-spin");
  // toggle openning of settings container
  settingsIcon.parentElement.classList.toggle("open");
};
