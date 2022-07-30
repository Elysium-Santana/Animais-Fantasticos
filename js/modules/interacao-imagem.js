export default function interactImages() {
  const arrayImagens = document.querySelectorAll(".animais-imgs li");
  const arrayTextos = document.querySelectorAll(".animais-conteudo div");

  arrayTextos[0].classList.add("ativo", "show-right");

  if (arrayTextos && arrayImagens) {
    function ArreyAddclass(conteudo, array) {
      conteudo.forEach((element) => element.classList.remove("ativo"));
      const animeDirection = conteudo[array].dataset.anime;
      conteudo[array].classList.add("ativo", animeDirection);

      //conteudo =arrayTextos e [array] externa a ser obitida
    }
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
