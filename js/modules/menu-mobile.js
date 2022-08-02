import outsideClick from "./ouside-click.js";
export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.stringAtivo = "ativo";
    if (events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    this.menuList.classList.add(this.stringAtivo);
    this.menuButton.classList.add(this.stringAtivo);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.stringAtivo);
      this.menuButton.classList.remove(this.stringAtivo);
    });
  }
  addMenuMObileEvents() {
    this.events.forEach((evento) =>
      this.menuButton.addEventListener(evento, this.openMenu)
    );
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMObileEvents();
    }
    return this;
  }
}
