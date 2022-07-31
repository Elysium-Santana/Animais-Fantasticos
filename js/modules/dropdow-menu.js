import outsideClick from "./ouside-click.js";
export default class DropDownMenu {
  constructor(dropDownMenus, events) {
    this.dropDownMenus = document.querySelectorAll(dropDownMenus);
    this.activeDropDownMenu = this.activeDropDownMenu.bind(this);
    this.StringAtivo = "ativo";
    // defie os eventos de touchstart e click caso nao seja definido pelo usuario
    if (events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;
  }
  // ativa o dropdownmenu e adiciona
  // a função que observa o click fora dele
  activeDropDownMenu(event) {
    const element = event.currentTarget;
    event.preventDefault();
    element.classList.add(this.StringAtivo);
    outsideClick(element, this.events, (callback) => {
      // outsideClick(this, this.events, () => {
      element.classList.remove(this.StringAtivo);
    });
  }
  // adiciona os eventos ao dropdownmenu
  addDropdownMenusEvent() {
    this.dropDownMenus.forEach((item) =>
      this.events.forEach((userEvent) =>
        item.addEventListener(userEvent, this.activeDropDownMenu)
      )
    );
  }

  init() {
    if (this.dropDownMenus.length) {
      this.addDropdownMenusEvent();
    }
    return this;
  }
}
