const cardholderInput = document.getElementById("name");
const cardNumberInput = document.getElementById("cardnumber");
const cardExpMonth = document.getElementById("exp-month");
const cardExpYear = document.getElementById("exp-year");
const cardExpNum = document.getElementById("exp-number");
const cardBackNumber = document.querySelector(".card-back_number");
const cardFrontNumber = document.querySelector(".card-front_number");
const cardFrontName = document.querySelector(".card-front_text_name");
const cardFrontDate = document.querySelector(".card-front_text_year");
const inputErrorName = document.querySelector(".input-error-name");
const inputErrorNumber = document.querySelector(".input-error-number");
const inputErrorBlank = document.querySelector(".input-error-blank");
const btncomfirm = document.querySelector(".complete");
const overlay = document.querySelector(".overlay");
const btnOverlay = document.querySelector(".continue");

const updateCardName = function () {
  if (cardholderInput.value === "") {
    console.log(cardholderInput.value);
    inputErrorName.style.opacity = 1;
    cardholderInput.classList.add("warning");
    // cardholderInput.value = "";
  } else {
    cardFrontName.textContent = cardholderInput.value;
    cardholderInput.classList.remove("warning");
    inputErrorName.style.opacity = 0;
    cardholderInput.value = "";
  }
};

const updateCardNumber = function () {
  if (
    cardNumberInput.value === "" ||
    cardNumberInput.value.split("").length !== 16
  ) {
    inputErrorNumber.style.opacity = 1;
    cardNumberInput.classList.add("warning");
    // cardNumberInput.value = "";
  } else {
    inputErrorNumber.style.opacity = 0;
    cardNumberInput.classList.remove("warning");
    const arr = cardNumberInput.value.split("");
    const newarr = `${arr.slice(0, 4).join("")} ${arr
      .slice(4, 8)
      .join("")} ${arr.slice(8, 12).join("")} ${arr.slice(12, 16).join("")}`;
    console.log(newarr);
    cardFrontNumber.textContent = newarr;
    cardNumberInput.value = "";
  }
};
// ------------------------------------

const updateCardMonth = function () {
  if (
    Number(cardExpMonth.value) > 12 ||
    cardExpNum.value.split("").length > 3 ||
    cardExpMonth.value === "" ||
    cardExpYear.value === "" ||
    cardExpNum.value === ""
  ) {
    cardExpMonth.classList.add("warning");
    cardExpYear.classList.add("warning");
    cardExpNum.classList.add("warning");
    inputErrorBlank.style.opacity = 1;
    // cardExpMonth.value = "";
    // cardExpYear.value = "";
    // cardExpNum.value = "";
  } else {
    cardExpMonth.classList.remove("warning");
    cardExpYear.classList.remove("warning");
    cardExpNum.classList.remove("warning");
    inputErrorBlank.style.opacity = 0;
    cardFrontDate.textContent = `${cardExpMonth.value}/${cardExpYear.value} `;
    cardBackNumber.textContent = cardExpNum.value;
    cardExpMonth.value = "";
    cardExpYear.value = "";
    cardExpNum.value = "";
  }
};

btncomfirm.addEventListener("click", function (e) {
  e.preventDefault;
  updateCardName();
  updateCardNumber();
  updateCardMonth();
  if (
    inputErrorNumber.style.opacity == 0 &&
    inputErrorBlank.style.opacity == 0 &&
    inputErrorName.style.opacity == 0
  ) {
    overlay.setAttribute("data-expended", true);
  }
});

btnOverlay.addEventListener("click", function (e) {
  e.preventDefault;
  overlay.setAttribute("data-expended", false);
  //   cardFrontDate.textContent = "00/00";
  //   cardFrontNumber.textContent = "0000 0000 0000 0000";
  //   cardFrontName.textContent = "Jane Appleseed";
});
