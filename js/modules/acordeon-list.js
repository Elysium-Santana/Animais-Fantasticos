// ==============ACORDEON LIST==============================
export default class AcordeonList {
  constructor(list) {
    this.perguntaLista = document.querySelectorAll(list);
    this.ativoString = "ativo";
  }

  toggleAcordeon(item) {
    item.classList.toggle(this.ativoString);
    item.nextElementSibling.classList.toggle(this.ativoString);
  }
  addAcordeonList() {
    this.perguntaLista.forEach((item) => {
      item.addEventListener("click", () => this.toggleAcordeon(item));
    });
  }
  init() {
    if (this.perguntaLista.length) {
      this.toggleAcordeon(this.perguntaLista[0]);
      this.addAcordeonList();
    }
  }
}
