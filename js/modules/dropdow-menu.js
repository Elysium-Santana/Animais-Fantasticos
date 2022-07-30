import outsideClick from "./ouside-click.js";
export default function initDropDownMenu() {
  const dropDownMenus = document.querySelectorAll("[data-dropdown]");

  function handleClick(event) {
    event.preventDefault();
    this.classList.add("ativo");
    outsideClick(this, ["touchstart", "click"], (callback) => {
      // outsideClick(this, ["touchstart", "click"], () => {
      this.classList.remove("ativo");
    });
  }
  dropDownMenus.forEach((item) =>
    ["touchstart", "click"].forEach((userEvent) =>
      item.addEventListener(userEvent, handleClick)
    )
  );
}
