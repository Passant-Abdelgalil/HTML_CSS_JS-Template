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
      this.#mainColor =
        document.documentElement.style.getPropertyValue("--main-color");
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
    // remove previously set active elements
    e.target.parentElement
      .querySelectorAll(".active")
      .forEach((elem) => elem.classList.remove("active"));

    // mark current li as active
    e.target.classList.add("active");

    // update main-color variable
    this.#mainColor = e.target.dataset.color;
    // update --main-color var with selected color
    document.documentElement.style.setProperty("--main-color", this.#mainColor);
    // update main-color in the local storage
    window.localStorage.setItem("main-color", e.target.dataset.color);
  }
}
