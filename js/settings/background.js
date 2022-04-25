export default class BackgroundManager {
  randomBackground;
  backgroundImgs = [
    "img01.jpg",
    "img02.jpg",
    "img03.jpg",
    "img04.jpg",
    "img05.jpg",
  ];
  backgroundIntervalObj;
  landingPage = document.querySelector(".landing-page");
  constructor() {
    this.setup();
  }
  setup() {
    let randomBackgroundOptions = document.querySelectorAll(".options-list li");

    // load background setting option from local storage
    this.randomBackground = window.localStorage.getItem("random-background");

    // unmark previously marked active option
    randomBackgroundOptions.forEach((option) => {
      if (option.dataset.random_background === this.randomBackground)
        option.classList.add("active");
      else option.classList.remove("active");
      option.addEventListener("click", (e) => this.updateBackgroundOption(e));
    });

    // if not previously stored, set a default value = true
    if (this.randomBackground == null) {
      this.randomBackground = "true";

      // load background setting option from local storage
      window.localStorage.setItem("random-background", true);
    }
    if (this.randomBackground === "true") {
      this.pickRandomImage();
    } else {
      document
        .querySelector('.options-list li[data-random_background="false"]')
        .classList.add("active");
    }
  }

  updateBackground() {
    // random number
    let randomNumber = Math.floor(Math.random() * this.backgroundImgs.length);
    this.landingPage.style.backgroundImage = `url("imgs/${this.backgroundImgs[randomNumber]}")`;
  }
  updateBackgroundOption(e) {
    // remove previously marked active elements
    e.target.parentElement
      .querySelectorAll(".active")
      .forEach((elem) => elem.classList.remove("active"));
    // mark current element as active
    e.target.classList.add("active");
    this.randomBackground = e.target.dataset.random_background;
    window.localStorage.setItem("random-background", this.randomBackground);
    // set / clear randomizing background based on selected option
    if (e.target.dataset.random_background === "true") {
      this.pickRandomImage();
    } else {
      clearInterval(this.backgroundIntervalObj);
    }
  }
  pickRandomImage() {
    this.backgroundIntervalObj = setInterval(
      () => this.updateBackground(),
      10000
    );
  }
}
