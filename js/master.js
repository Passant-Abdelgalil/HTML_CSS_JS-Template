// toggle settings
let settingsIcon = document.querySelector(".settings__icon");
settingsIcon.onclick = (e) => {
  //   toggle spinning feature of icon
  settingsIcon.firstElementChild.classList.toggle("fa-spin");
  // toggle openning of settings container
  settingsIcon.parentElement.classList.toggle("open");
};

// change theme color

// select landing element
let landingPage = document.querySelector(".landing-page");

// array of background images
let imagesList = [
  "img01.jpg",
  "img02.jpg",
  "img03.jpg",
  "img04.jpg",
  "img05.jpg",
];

window.setInterval(() => {
  // random number
  let randomNumber = Math.floor(Math.random() * imagesList.length);
  landingPage.style.backgroundImage = `url("imgs/${imagesList[randomNumber]}")`;
}, 10000);
