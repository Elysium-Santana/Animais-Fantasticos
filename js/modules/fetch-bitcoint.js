export default function initfetchBitcoint() {
  const precoBtc = document.querySelector(".btc-preco");
  function fetchBitcoint() {
    fetch("https://blockchain.info/ticker").then((response) =>
      response.json().then((bitcointJson) => {
        precoBtc.innerText = (1000 / bitcointJson.BRL.sell).toFixed(4);
        console.log("foi", bitcointJson.BRL.sell);
      })
    );
  }
  setInterval(fetchBitcoint, 1000 * 10);
}
