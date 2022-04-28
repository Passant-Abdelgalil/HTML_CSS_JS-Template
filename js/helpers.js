export function handleActiveElements(e) {
    // remove previously set active elements
    e.target.parentElement
      .querySelectorAll(".active")
      .forEach((elem) => elem.classList.remove("active"));
  
    // mark current li as active
    e.target.classList.add("active");
  }
  