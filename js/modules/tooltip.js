export default class Tooltip {
  constructor(tooltips) {
    this.imgTooltip = document.querySelectorAll(tooltips);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  onMouseMove(event) {
    this.tooltipBox.style.top = event.pageY + 20 + "px";
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = event.pageX - 180 + "px";
    } else {
      this.tooltipBox.style.left = event.pageX + 20 + "px";
    }
  }

  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  criarTooltip(element) {
    const tooltipBox = document.createElement("div");
    tooltipBox.classList.add("tooltip");
    const texto = element.getAttribute("aria-label");
    tooltipBox.innerText = texto;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }
  onMouseOver({ currentTarget }) {
    this.criarTooltip(currentTarget);
    currentTarget.addEventListener("mousemove", this.onMouseMove);
    currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }

  addTooltipsEvent() {
    this.imgTooltip.forEach((item) =>
      item.addEventListener("mouseover", this.onMouseOver)
    );
  }
  init() {
    if (this.imgTooltip.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}
