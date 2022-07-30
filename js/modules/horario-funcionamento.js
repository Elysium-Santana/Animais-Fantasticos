export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horario = funcionamento.dataset.horario.split(",").map(Number);
  const agora = new Date();

  const diaAgora = diasSemana.indexOf(agora.getDay());
  const confirmaHora =
    agora.getHours() >= horario[0] && agora.getHours() < horario[1];
  if (confirmaHora && diaAgora != -1) {
    funcionamento.classList.add("aberto");
  }
}
