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

// skills selector
let ourSkills = document.querySelector(".skills");
window.onscroll = () => {
  // skills offset top
  let skillsOffsetTop = ourSkills.offsetTop;
  // skills outer height
  let skillsOuterHeight = ourSkills.offsetHeight;
  // window height
  let windowHeight = window.innerHeight;
  // window scroll top
  let windowScrollTop = window.scrollY;
  console.log(windowScrollTop);
  let allSkills = document.querySelectorAll(
    ".skill-box .skill-box__progress span"
  );
  if (windowScrollTop > skillsOffsetTop + skillsOuterHeight - windowHeight) {
    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  } else {
    allSkills.forEach((skill) => (skill.style.width = "0px"));
  }
};

// create image popup
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    // Create overlay element
    let overlay = document.createElement("div");

    // add class to overlay
    overlay.className = "popup-overlay";

    // append overlay to the body
    document.body.appendChild(overlay);

    // create popup
    let popupBox = document.createElement("div");

    // Add class to popupBox
    popupBox.className = "popup-box";

    if (img.alt !== null) {
      // create heading
      let imgHeading = document.createElement("h3");
      // create text for heading
      let imgText = document.createTextNode(img.alt);
      // append the text to the heading
      imgHeading.appendChild(imgText);

      // append heading to popupBox
      popupBox.appendChild(imgHeading);
    }

    // create the img
    let popupImage = document.createElement("img");

    // set image src
    popupImage.src = img.src;

    // add image to popupBox
    popupBox.appendChild(popupImage);

    // append popupBox to body
    document.body.appendChild(popupBox);

    // Create the close span
    let closeButton = document.createElement("span");
    // Create the close button text
    let closeButtonText = document.createTextNode("X");
    // append text to close button
    closeButton.appendChild(closeButtonText);
    // add class to close button
    closeButton.className = "close-button";
    // add close button to popupBox
    popupBox.appendChild(closeButton);
  });
});
// close popup
document.addEventListener("click", (e) => {
  console.log(e.target.parentNode);
  // remove the current popup
  if (e.target.className == "close-button") {
    e.target.parentNode.remove();
    document.querySelector(".popup-overlay").remove();
  }
});
