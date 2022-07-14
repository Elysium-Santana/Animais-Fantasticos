function interactImages() {
  arrayImagens = document.querySelectorAll(".animais-imgs li");
  arrayTextos = document.querySelectorAll(".animais-conteudo div");
  arrayTextos[0].classList.add("ativo");

  if (arrayTextos && arrayImagens) {
    function ArreyAddclass(conteudo, array) {
      conteudo.forEach((element) => element.classList.remove("ativo"));
      conteudo[array].classList.add("ativo");
      //conteudo =arrayTextos e [array] externa a ser obitida
    }
    //console.log(arrayTextos,2)
    function getArrayImg(event) {
      ArreyAddclass(arrayTextos, event);
    }

    arrayImagens.forEach((item, index) =>
      item.addEventListener("click", function () {
        getArrayImg(index);
      })
    );
  }
}
interactImages();
// ==============ACORDEON LIST==============================
function acordeonList() {
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
acordeonList();
// ===============SMOOTH SCROLL============================================
function scrollSuave() {
  const idMenu = document.querySelectorAll(".menu a[href^='#']");

  function getIdMenu(event) {
    event.preventDefault();
    const href = this.getAttribute("href");
    const section = document.querySelector(href);
    // const sectionTop = section.offsetTop;
    // const sectionTop = section.getBoundingClientRect().top;
    // window.scrollTo({ top: sectionTop, behavior: "smooth" });
    //
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  idMenu.forEach((item) => item.addEventListener("click", getIdMenu));
}
scrollSuave();
// ==============ANIMA-SCROLL=================================
function scrollAnimado() {
  const section = document.querySelectorAll(".js-scroll");
  section[0].classList.add("ativo");
  section[1].classList.add("ativo");
  function sectionSelect(event) {
    // o forEacth nesse caso fica dentro da função, pois como é um evento de scroll e nao de click, por isso faz a varredura apos ser iniciado com o evento e voltando a alura de cada item em tempo real enquanto é usado o scroll
    if (section) {
      section.forEach((item) => {
        const tamanhoTela = innerHeight * 0.75;
        //  nesse caso específico, nao funciona com offsetTop
        const sectionTop = item.getBoundingClientRect().top - tamanhoTela;
        if (sectionTop < 0) {
          item.classList.add("ativo");
        } else {
          item.classList.remove("ativo");
        }
      });
    }
  }
  window.addEventListener("scroll", sectionSelect);
}
scrollAnimado();
