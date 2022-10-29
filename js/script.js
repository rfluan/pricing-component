const numberCards = document.querySelectorAll(".number-card")

function isChecked() {
  if (document.getElementById("chk").checked){
    handleNumber('anual')
  } else {
    handleNumber('mensal')
  }
}

function handleNumber(plano) {
  numberCards.forEach(card => {
    let cardInnerText = card.innerText.replace(',', '.')
    let numberPricing = cardInnerText.split(' ')[1]
    numberPricing = parseFloat(numberPricing)
    
    if (plano === 'mensal') {
      numberPricing /= 10 
    } else if (plano === 'anual') {
      numberPricing *= 10
    }
    card.innerText = numberPricing.toFixed(2)
    card.innerText = card.innerText.replace('.', ',')
    card.innerText = `R$ ${card.innerText}`
  });
}