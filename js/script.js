import ScrollSuave from "./modules/scroll-suave.js";
import AcordeonList from "./modules/acordeon-list.js";
import interactImages from "./modules/interacao-imagem.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import DropDownMenu from "./modules/dropdow-menu.js";
import MenuMobile from "./modules/menu-mobile.js";
import Funcionamento from "./modules/horario-funcionamento.js";
import fetchAnimais from "./modules/fatch-animais.js";
import fetchBitcoint from "./modules/fetch-bitcoint.js";
import scrollAnimado from "./modules/scroll-animado.js";
import { SlideNav } from "./modules/slide.js";
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
const dropDownMenu = new DropDownMenu("[data-dropdown]");
dropDownMenu.init();
const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();
const funcionamento = new Funcionamento("[data-semana]");
funcionamento.init();
// const scrollAnima = new ScrollAnima("[data-scroll]");
// scrollAnima.init();
scrollAnimado();
interactImages();
fetchAnimais("./animaisapi.json", ".numeros-grid");
fetchBitcoint("https://blockchain.info/ticker", ".btc-preco");
// Slide Galery
const slide = new SlideNav(".slide", ".wrapper");
slide.init();
slide.activePrevSlide();
slide.addControl(".custom-controls");
