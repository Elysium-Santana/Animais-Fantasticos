export default function fetchBitcoint(url, target) {
  const precoBtc = document.querySelector(target);
  function fetchBitcoint() {
    fetch(url).then((response) =>
      response.json().then((bitcointJson) => {
        precoBtc.innerText = (1000 / bitcointJson.BRL.sell).toFixed(4);
      })
    );
  }
  setInterval(fetchBitcoint, 1000 * 10);
}
