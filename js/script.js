import ScrollSuave from "./modules/scroll-suave.js";
import AcordeonList from "./modules/acordeon-list.js";
import interactImages from "./modules/interacao-imagem.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import DropDownMenu from "./modules/dropdow-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/horario-funcionamento.js";
import fetchAnimais from "./modules/fatch-animais.js";
import fetchBitcoint from "./modules/fetch-bitcoint.js";
import ScrollAnima from "./modules/scroll-animado.js";
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
const scrollAnima = new ScrollAnima("[data-scroll]");
scrollAnima.init();
interactImages();

const dropDownMenu = new DropDownMenu("[data-dropdown]");
dropDownMenu.init();

initMenuMobile();

initFuncionamento();
fetchAnimais("./animaisapi.json", ".numeros-grid");
fetchBitcoint("https://blockchain.info/ticker", ".btc-preco");
