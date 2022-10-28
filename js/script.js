const numberCards = document.querySelectorAll(".number-card")

function clicou() {
  numberCards.forEach(card => {
    const cardInnerText = card.innerText.replace(',', '.')
    let teste = cardInnerText.split(' ')[1]
    teste = parseFloat(teste) // transforma em quebrado
    teste = teste * 11
    card.innerText = teste.toFixed(2)
  });
}