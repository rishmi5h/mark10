const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#check");
const nextBtn = document.querySelector("#next");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
var elements = document.querySelectorAll(".hide");
const availableNotes = [2000, 500, 100, 50, 20, 10, 5, 1];

const validataBillAndCashAmount = () => {
  hideMessage();
  if (billAmount.value > 0) {
    if (cashGiven.value >= billAmount.value) {
      if (cashGiven.value === billAmount.value) {
        showMessage("No change to be given");
      } else {
        const amountToReturn = cashGiven.value - billAmount.value;
        calculateChange(amountToReturn);
      }
    } else {
      showMessage("Give me the ducking Money");
    }
  } else {
    showMessage("Invalid Bill amount");
  }
};

function calculateChange(amountToReturn) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.floor(amountToReturn / availableNotes[i]);
    amountToReturn %= availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}

function hideMessage() {
  message.style.display = "none";
}

function showMessage(errorMessage) {
  message.style.display = "block";
  message.innerText = errorMessage;
}

nextBtn.addEventListener("click", () => {
  hideMessage();
  if (billAmount.value > 0) {
    elements.forEach((element) => {
      element.classList.remove("hide");
    });
  } else {
    showMessage("Invalid Bill Amount");
  }
});

checkBtn.addEventListener("click", () => {
  validataBillAndCashAmount();
});
