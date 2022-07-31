import AnimaNumeros from "./anima-numeros.js";
// cria div contendo total de animais
export default function fetchAnimais(url, target) {
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animais");
    div.innerHTML = `<h3>${animal.especie}</h3> <span>${animal.total}</span>`;

    return div;
  }
  // preenche animais no DOM
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros(
      ".numero-animais span",
      ".numeros",
      "ativo"
    );
    animaNumeros.init();
  }
  // faz requisição de animais atravez de arquivos json
  // e cria cada animal utilizando o creataAnimal
  async function criarAnimais(url) {
    // fetch e espera resposta
    // transforma resposta em json
    const animaisResponse = await fetch(url);
    const animaisJson = await animaisResponse.json();

    // apos transformação em json , ativa as funções para preencher e
    // animar os numeros
    animaisJson.forEach((animal) => preencherAnimais(animal));
    animaAnimaisNumeros();
  }

  criarAnimais("./animaisapi.json");
}
