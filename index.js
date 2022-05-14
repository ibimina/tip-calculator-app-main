const getBill = document.querySelector(".getBill");
const tipPercent = document.querySelectorAll(".onee");
const people = document.querySelector(".people");
const input = document.querySelector("#bill");
const customPercent = document.querySelector(".custom");

let inputBill, inputPeople, inputAge, percent, tipAmount;

getBill.addEventListener("input", (e) => {
  let inputValue = getBill.bill.value.trim();
  inputBill = Number(inputValue);
  // console.log(inputBill);

  //   cal();
  //   totalCal();
});

tipPercent.forEach((element) => {
   
  element.addEventListener("click", (e) => {
    e.preventDefault();
    
    let perValue = e.target.value;
    perValue.checked = true;
    
    if (perValue) {
      customPercent.value = "";

      percent = Number(perValue);
       element.classList.add("class", "active");
    }

    console.log(perValue);
    // cal();
    // totalCal();
  });
});

customPercent.addEventListener("input", (e) => {
  e.preventDefault();

  let perValue = e.target.value;
  if (perValue > 0) {
    tipPercent.forEach((element) => {
      perValue.checked = false;
    });
    percent = Number(perValue) / 100;
  } else {
    perValue = "";
  }

  console.log(perValue);
//   cal();
//   totalCal();
});

const errorText = document.querySelector(".errortext");
const border = document.querySelector("#person");
people.addEventListener("input", (e) => {
  e.preventDefault();

  let perValue = e.target.value;
  inputPeople = Number(perValue);
  if (inputPeople <= 0) {
    errorText.style.display = "inline";
    border.setAttribute("class", "error");
    console.log(errorText);
  } else {
    errorText.style.display = "none";
    border.removeAttribute("class", "error");
    cal();
    totalCal();
  }


});
const tip = document.querySelector(".tip-amount");
const totalTip = document.querySelector(".total-tip");
const cal = () => {
  tipAmount = ((inputBill / inputPeople) * percent).toFixed(2);
//   console.log(tipAmount);
  //totalCal()
  tip.textContent = `$${tipAmount}`;
};

const totalCal = () => {
  // console.log(to)
  if (inputBill !== 0 && inputPeople !== 0 && percent !== 0) {
    let to = (
      inputBill / inputPeople +
      (inputBill / inputPeople) * percent
    ).toFixed(2);

    totalTip.textContent = `$${to}`;
  }
};
const resetButton = document.querySelector(".reset");
const reset = () => {
  //   inputBill = "";
  //   inputPeople = "";
  // percent = "";
  getBill.bill.value = "";
  customPercent.value = "";
  border.value = "";
  totalTip.textContent = `$0.00`;
  tip.textContent = `$0.00`;
};
resetButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("a");
  reset();
});
