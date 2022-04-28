import { handleActiveElements } from "../helpers.js";

export default class BulletsManager {
  #display;
  #bulletsContainer;
  constructor() {
    this.setup();
  }
  setup() {
    let bulletsOptions = document.querySelectorAll(
      ".bullets-options .options-list li"
    );
    this.#bulletsContainer = document.querySelector(".nav-bullets");

    this.#display = window.localStorage.getItem("display-bullets");
    if (this.#display === null) {
      this.#display = "true";
      window.localStorage.setItem("display-bullets", "true");
    }
    document
      .querySelector(
        `.bullets-options .options-list li[data-bullets_option=${
          this.#display
        }]`
      )
      .classList.add("active");

    this.applyOption(this.#display);

    bulletsOptions.forEach((option) => {
      if (option.dataset.bullets_option === this.#display)
        option.classList.add("active");
      else option.classList.remove("active");
      option.addEventListener("click", (e) => this.updateOption(e));
    });
  }
  updateOption(e) {
    handleActiveElements(e);
    this.#display = e.target.dataset.bullets_option;

    window.localStorage.setItem("display-bullets", this.#display);
    // show / hide navigation bullets based on selected option
    this.applyOption(this.#display);
  }
  applyOption(option) {
    if (option === "true") this.#bulletsContainer.style.display = "block";
    else this.#bulletsContainer.style.display = "none";
  }
}
