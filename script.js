const billAmount = document.querySelector("#bill-amount");
const numberOfPeople = document.querySelector("#people-amount");
const customTip = document.querySelector("#custom");
const percentages = document.querySelectorAll("#percentages button");

const removeAllActive = () => {
  document.querySelectorAll("button.active").forEach((element) => {
    element.classList.remove("active");
  });
};
const calculate = (billAmount, percentage, numberOfPeople) => {
  if (billAmount && percentage && numberOfPeople)
    return ((billAmount * (percentage / 100)) / numberOfPeople).toFixed(2);
};

const doCalculate = () => {
  const billAmount = document.querySelector("#bill-amount")?.value;
  const customTipValue = document.querySelector("#custom")?.value;
  let selectedPercentage = 0;
  const numberOfPeople = document.querySelector("#people-amount")?.value;
  //   debugger;
  if (customTipValue && customTipValue != "")
    selectedPercentage = customTipValue;
  else
    selectedPercentage = document
      .querySelector("button.active")
      ?.innerHTML.replace("%", "");

  const finalAmount = calculate(billAmount, selectedPercentage, numberOfPeople);
  const tipAmount = calculateTipAmount(selectedPercentage, numberOfPeople);

  if (tipAmount)
    document.getElementById("tip-amount-person").innerHTML = `$${tipAmount}`;

  if (finalAmount)
    document.getElementById(
      "total-amount-person"
    ).innerHTML = `$${finalAmount}`;
};

const calculateTipAmount = (tip, numberOfPeople) => {
  if (tip && numberOfPeople) return (tip / numberOfPeople).toFixed(2);
};

/**Si haces click dentro de un boton de porcentajes */
percentages.forEach((percentage) => {
  percentage.addEventListener("click", () => {
    removeAllActive();
    percentage.classList.add("active");
    customTip.value = "";
    doCalculate();
  });
});

/**SI escribes dentro de CUSTOM TIP */
customTip.addEventListener("input", (e) => {
  removeAllActive();
  doCalculate();
});

/**Cuando escribes dentro de number of people */
numberOfPeople.addEventListener("input", () => {
  doCalculate();
});

/**Si escribes dentro de bill amount  */
billAmount.addEventListener("input", () => {
  const percentages = document.querySelectorAll("#percentages button");
  doCalculate();
});

const doReset = () => {
  removeAllActive();
  billAmount.value = "";
  customTip.value = "";
  numberOfPeople.value = "";
  document.getElementById("tip-amount-person").innerHTML = "$0.00";
  document.getElementById("total-amount-person").innerHTML = "$0.00";
};
