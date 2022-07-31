// ==============ANIMA-SCROLL=================================
export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.tamanhoTela = window.innerHeight * 0.75;
    this.animaScroll = this.animaScroll.bind(this);
  }

  animaScroll(event) {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - this.tamanhoTela < 0;
      if (isSectionVisible) {
        section.classList.add("ativo");
      } else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }
  init() {
    this.animaScroll();
    window.addEventListener("scroll", this.animaScroll);
    return this;
  }
}
