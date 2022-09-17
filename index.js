const people = document.querySelector(".people");
const errorText = document.querySelector(".errortext");
const border = document.querySelector("#person");
const custom = document.querySelector(".custom");
const getradioBtn = document.querySelectorAll(".btn");
let customValue, radioValue, val;

people.addEventListener("input", (e) => {
  if (e.target.value <= 0) {
    errorText.style.display = "inline";
    border.setAttribute("class", "error");
  } else {
    errorText.style.display = "none";
    border.removeAttribute("class", "error");
  }
});



custom.addEventListener("input", (e) => {
  getradioBtn.forEach((element) => {
    element.checked = false;
  });

  if (e.target.value > 0) {
    customValue = e.target.value.trim();
    val = Number(customValue) / 100;
    radioValue = "";
  }
});


getradioBtn.forEach((radioBtn) => {
  radioBtn.addEventListener("click", (e) => {
    if (radioBtn.checked) {
      if (customValue !== undefined) {
        custom.value = "";
      }
      radioValue = e.target.value;
      val = Number(radioValue);
      console.log(val);
    }
  });
});

const getForm = document.querySelector(".one");

getForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let bill = Number(getForm.bill.value.trim());
  let people = Number(getForm.people.value);
  if (bill && val && people) {

    let ti = ((bill * val) / people).toFixed(2);
    document.querySelector(".tip-amount").textContent = "$" + ti;
    document.querySelector(".total-tip").textContent =
      "$" + (bill / people + Number(ti)).toFixed(2);
  } else if (!people) {
    errorText.style.display = "inline";
     border.setAttribute("class", "error");
  }
});

document.querySelector(".reset").addEventListener("click", () => {
  getForm.reset();
  document.querySelector(".total-tip").textContent = "$0.00";
  document.querySelector(".tip-amount").textContent = "$0.00";
});
