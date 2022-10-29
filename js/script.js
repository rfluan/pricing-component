const numberCards = document.querySelectorAll(".number-card")

function isChecked() {
  if (document.getElementById("chk").checked){
    numberCards.forEach(card => {
      let cardInnerText = card.innerText.replace(',', '.')
      let teste = cardInnerText.split(' ')[1]
      teste = parseFloat(teste) // transforma em quebrado
      teste = teste * 10
      card.innerText = teste.toFixed(2)
      card.innerText = card.innerText.replace('.', ',')
      card.innerText = `R$ ${card.innerText}`
    });
  } else {
    numberCards.forEach(card => {
      let cardInnerText = card.innerText.replace(',', '.')
      let teste = cardInnerText.split(' ')[1]
      teste = parseFloat(teste) // transforma em quebrado
      teste = teste / 10
      card.innerText = teste.toFixed(2)
      card.innerText = card.innerText.replace('.', ',')
      card.innerText = `R$ ${card.innerText}`
    });
  }

}
