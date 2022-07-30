export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    const animaisResponse = await fetch(url);
    const animaisJson = await animaisResponse.json();
    const numerosGrid = document.querySelector(".numeros-grid");
    animaisJson.forEach((animal) => {
      const divAnimal = createAnimal(animal);
      numerosGrid.appendChild(divAnimal);
    });
  }

  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animais");
    div.innerHTML = `<h3>${animal.especie}</h3> <span>${animal.total}</span>`;

    return div;
  }
  fetchAnimais("./animaisapi.json");
}
