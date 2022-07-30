export default function scrollSuave() {
  const idMenu = document.querySelectorAll(".menu a[href^='#']");

  function getIdMenu(event) {
    event.preventDefault();
    const href = this.getAttribute("href");
    const section = document.querySelector(href);
    // const sectionTop = section.offsetTop;
    // const sectionTop = section.getBoundingClientRect().top;
    // window.scrollTo({ top: sectionTop, behavior: "smooth" });
    //
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  idMenu.forEach((item) => item.addEventListener("click", getIdMenu));
}
