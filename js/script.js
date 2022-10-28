const numberCards = document.querySelectorAll(".number-card")

function clicou() {
  numberCards.forEach(card => {
    const cardInnerText = card.innerText.replace(',', '.')
    const teste = cardInnerText.split(' ')[1]


    console.log(parseFloat(teste))

    // console.log(card.innerText)
    
  });
}