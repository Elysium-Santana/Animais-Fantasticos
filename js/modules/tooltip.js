export default function initTooltip() {
  const imgTooltip = document.querySelectorAll("[data-tooltip]");

  imgTooltip.forEach((item) => item.addEventListener("mouseover", onMouseOver));

  function onMouseOver(event) {
    const tooltipBox = criarTooltip(this);
    // this é o mesmo que event.currentTarget
    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener("mousemove", onMouseMove);
    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);
  }
  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };
  const onMouseMove = {
    element: "",
    tooltipBox: "",
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + 20 + "px";
      this.tooltipBox.style.left = event.pageX + 20 + "px";
    },
  };
  function criarTooltip(element) {
    const tooltipBox = document.createElement("div");
    tooltipBox.classList.add("tooltip");
    const texto = element.getAttribute("aria-label");
    tooltipBox.innerText = texto;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
}
