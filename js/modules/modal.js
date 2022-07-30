export default class Modal {
  constructor(btnAbrir, btnFecha, conteinerModal) {
    this.loginMenu = document.querySelector(btnAbrir);
    this.fecharMenu = document.querySelector(btnFecha);
    this.loginModalCont = document.querySelector(conteinerModal);
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.fechaClickFora = this.fechaClickFora.bind(this);
  }

  toggleModal() {
    this.loginModalCont.classList.toggle("ativo");
  }
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  fechaClickFora(event) {
    event.target === this.loginModalCont ? this.toggleModal(event) : "";
  }
  addModalEvents() {
    this.loginMenu.addEventListener("click", this.eventToggleModal);
    this.fecharMenu.addEventListener("click", this.eventToggleModal);
    this.loginModalCont.addEventListener("click", this.fechaClickFora);
  }

  init() {
    if (this.loginMenu && this.fecharMenu && this.loginModalCont) {
      this.addModalEvents();
      return this;
    }
  }
}
