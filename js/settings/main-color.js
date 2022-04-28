import { handleActiveElements } from "../helpers.js";

export default class ColorManager {
  #mainColor;

  constructor() {
    this.setup();
  }
  setup() {
    let colorLis = document.querySelectorAll(".colors-list li");
    // load color from local storage
    this.#mainColor = window.localStorage.getItem("main-color");

    // if not previously stored, set a default value
    if (this.#mainColor == null) {
      this.#mainColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--main-color");
      window.localStorage.setItem("main-color", this.#mainColor);
    }
    // update main color
    document.documentElement.style.setProperty("--main-color", this.#mainColor);

    // update active color element
    colorLis.forEach((li) => {
      li.addEventListener("click", (e) => this.updateColor(e));
      if (li.dataset.color !== this.#mainColor) li.classList.remove("active");
      else li.classList.add("active");
    });
  }

  updateColor(e) {
    handleActiveElements(e);

    // update main-color variable
    this.#mainColor = e.target.dataset.color;
    // update --main-color var with selected color
    document.documentElement.style.setProperty("--main-color", this.#mainColor);
    // update main-color in the local storage
    window.localStorage.setItem("main-color", e.target.dataset.color);
  }
}
