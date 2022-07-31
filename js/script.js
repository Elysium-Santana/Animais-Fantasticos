import ScrollSuave from "./modules/scroll-suave.js";
import AcordeonList from "./modules/acordeon-list.js";
import interactImages from "./modules/interacao-imagem.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import initDropDownMenu from "./modules/dropdow-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/horario-funcionamento.js";
import fetchAnimais from "./modules/fatch-animais.js";
import initfetchBitcoint from "./modules/fetch-bitcoint.js";
import scrollAnimado from "./modules/scroll-animado.js";
const scrollSuave = new ScrollSuave(".menu a[href^='#']");
scrollSuave.init();
const acordeonList = new AcordeonList(".faq dt");
acordeonList.init();
const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="conteiner"]'
);
modal.init();
const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();
scrollAnimado();

interactImages();

initDropDownMenu();
initMenuMobile();

initFuncionamento();
fetchAnimais("../../animaisapi.json", ".numeros-grid");
initfetchBitcoint();
