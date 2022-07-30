export default function initModal() {
  const loginMenu = document.querySelector('[data-modal="abrir"]');
  const fecharMenu = document.querySelector('[data-modal="fechar"]');
  const loginModalCont = document.querySelector('[data-modal="conteiner"]');
  if (loginMenu && fecharMenu && loginModalCont) {
    function toggleModal(event) {
      event.preventDefault();
      loginModalCont.classList.toggle("ativo");
    }

    function fechaClickFora(event) {
      event.target === this ? toggleModal(event) : "";
    }
    loginMenu.addEventListener("click", toggleModal);
    fecharMenu.addEventListener("click", toggleModal);
    loginModalCont.addEventListener("click", fechaClickFora);
  }
}
