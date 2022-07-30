// ==============ANIMA-SCROLL=================================
export default function scrollAnimado() {
  const sections = document.querySelectorAll("[data-scroll]");
  sections[0].classList.add("ativo");
  sections[1].classList.add("ativo");
  function sectionSelect(event) {
    // o forEacth nesse caso fica dentro da função, pois como é um evento de scroll e nao de click, por isso faz a varredura apos ser iniciado com o evento e voltando a alura de cada item em tempo real enquanto é usado o scroll
    if (sections) {
      sections.forEach((section) => {
        const tamanhoTela = innerHeight * 0.75;
        //  nesse caso específico, nao funciona com offsetTop
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - tamanhoTela < 0;
        if (isSectionVisible) {
          section.classList.add("ativo");
        } else if (section.classList.contains("ativo")) {
          section.classList.remove("ativo");
        }
      });
    }
  }
  window.addEventListener("scroll", sectionSelect);
}
