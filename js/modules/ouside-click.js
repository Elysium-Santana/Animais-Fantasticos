export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";
  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => html.addEventListener(userEvent, habdleOutsideclick));
    });

    element.setAttribute(outside, "");
  }
  function habdleOutsideclick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, habdleOutsideclick);
      });
      callback();
    }
  }
}
