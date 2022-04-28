import { handleActiveElements } from "../helpers.js";

export default class BackgroundManager {
  #randomBackground;
  backgroundImgs = [
    "img01.jpg",
    "img02.jpg",
    "img03.jpg",
    "img04.jpg",
    "img05.jpg",
  ];
  #backgroundIntervalObj;
  #landingPage = document.querySelector(".landing-page");
  constructor() {
    this.setup();
  }
  setup() {
    let randomBackgroundOptions = document.querySelectorAll(
      " .background-options .options-list li"
    );

    // load background setting option from local storage
    this.#randomBackground = window.localStorage.getItem("random-background");

    // if not previously stored, set a default value = true
    if (this.#randomBackground == null) {
      this.#randomBackground = "true";

      // load background setting option from local storage
      window.localStorage.setItem("random-background", "true");
    }
    document
      .querySelector(
        `.background-options  .options-list li[data-random_background=${
          this.#randomBackground
        }]`
      )
      .classList.add("active");

    this.applyOption(this.#randomBackground);

    // unmark previously marked active option
    randomBackgroundOptions.forEach((option) => {
      if (option.dataset.random_background === this.#randomBackground)
        option.classList.add("active");
      else option.classList.remove("active");
      option.addEventListener("click", (e) => this.updateBackgroundOption(e));
    });
  }

  updateBackground() {
    // random number
    let randomNumber = Math.floor(Math.random() * this.backgroundImgs.length);
    this.#landingPage.style.backgroundImage = `url("imgs/${this.backgroundImgs[randomNumber]}")`;
  }
  updateBackgroundOption(e) {
    // remove previously marked active elements
    handleActiveElements(e);
    this.#randomBackground = e.currentTarget.dataset.random_background;
    window.localStorage.setItem("random-background", this.#randomBackground);
    // set / clear randomizing background based on selected option
    this.applyOption(this.#randomBackground);
  }
  pickRandomImage() {
    this.#backgroundIntervalObj = setInterval(
      () => this.updateBackground(),
      10000
    );
  }
  applyOption(option) {
    if (option === "true") this.pickRandomImage();
    else clearInterval(this.#backgroundIntervalObj);
  }
}
