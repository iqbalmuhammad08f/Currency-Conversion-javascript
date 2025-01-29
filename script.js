const exchangeRate = {
  IDR: {USD: 0.000067, EUR: 0.000057},
  USD: {IDR: 15000, EUR: 0.85},
  EUR: {USD: 1.18, IDR: 17500}
}

function exchange (amout,fromCurency,toCurency) {
  if (fromCurency === toCurency) {
    return amout

  } else {
    const rate = exchangeRate[fromCurency]?.[toCurency];

    if (rate) {
      return amout * rate;

    } else {
      return "halo";
    }
  }
}

document.querySelector(".convert-btn").addEventListener("click", () => {
  const amout = parseFloat(document.querySelector("#input-nominal").value);
  const fromCurency = document.querySelector("#from-curency").value;
  const toCurency = document.querySelector("#to-curency").value;

  console.log(amout);
  console.log(fromCurency);
  console.log(toCurency);
  if (isNaN(amout) || amout <=0) {
    alert("Masukkan jumlah uang yang valid");
    return;
  } 

  const result = Number(exchange(amout,fromCurency,toCurency));
  document.querySelector(".main-result").innerHTML = result.toFixed()
})