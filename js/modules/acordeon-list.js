// ==============ACORDEON LIST==============================
export default function acordeonList() {
  const perguntaLista = document.querySelectorAll(".faq dt");
  const ativoString = "ativo";
  perguntaLista[0].classList.add(ativoString);
  perguntaLista[0].nextElementSibling.classList.add(ativoString);
  if (perguntaLista.length) {
    function clickPergunta(pergunta) {
      this.classList.toggle(ativoString);
      this.nextElementSibling.classList.toggle(ativoString);
    }

    perguntaLista.forEach((perguntas) =>
      perguntas.addEventListener("click", clickPergunta)
    );
  }
}
