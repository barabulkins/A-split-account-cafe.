window.onload = function () {
  let firstIngredient = "";
  let secondIngredient = "";
  let cookedDish = "";
  let selectedRecipe = null;
  const displayElement = document.getElementById("plate");
  const numberButtons = document.querySelectorAll('[id ^= "btn_num_"]');

  function onNumberButtonClicked(digit) {
    if (!selectedRecipe) {
      if (digit != "." || (digit == "." && !firstIngredient.includes(digit))) {
        firstIngredient += digit;
      }
      displayElement.innerHTML = firstIngredient;
    } else {
      if (digit != "." || (digit == "." && !secondIngredient.includes(digit))) {
        secondIngredient += digit;
        displayElement.innerHTML = secondIngredient;
      }
    }
  }

  numberButtons.forEach((button) => {
    button.onclick = function () {
      const digitValue = button.innerHTML;
      onNumberButtonClicked(digitValue);
    };
  });

  document.getElementById("btn_multiply").onclick = function () {
    if (firstIngredient === "") return;
    selectedRecipe = "x";
  };
  document.getElementById("btn_plus").onclick = function () {
    if (firstIngredient === "") return;
    if (secondIngredient !== "" && selectedRecipe !== null) {
      switch (selectedRecipe) {
        case "+":
          firstIngredient = (+firstIngredient + +secondIngredient).toString();
          break;
        case "-":
          firstIngredient = (+firstIngredient - +secondIngredient).toString();
          break;
        default:
          break;
      }
      secondIngredient = "";
      displayElement.innerHTML = firstIngredient;
    }
    selectedRecipe = "+";
  };
  document.getElementById("btn_minus").onclick = function () {
    if (firstIngredient === "") return;
    if (secondIngredient !== "" && selectedRecipe !== null) {
      switch (selectedRecipe) {
        case "+":
          firstIngredient = (+firstIngredient + +secondIngredient).toString();
          break;
        case "-":
          firstIngredient = (+firstIngredient - +secondIngredient).toString();
          break;
        default:
          break;
      }
      secondIngredient = "";
      displayElement.innerHTML = firstIngredient;
    }
    selectedRecipe = "-";
  };
  document.getElementById("btn_divide").onclick = function () {
    if (firstIngredient === "") return;
    selectedRecipe = "/";
  };
  document.getElementById("btn_clear_plate").onclick = function () {
    firstIngredient = "";
    secondIngredient = "";
    selectedRecipe = null;
    cookedDish = "";
    displayElement.innerHTML = 0;
  };

  document.getElementById("btn_equal").onclick = function () {
    if (firstIngredient === "" || secondIngredient === "" || !selectedRecipe)
      return;

    switch (selectedRecipe) {
      case "x":
        cookedDish = +firstIngredient * +secondIngredient;
        break;
      case "+":
        cookedDish = +firstIngredient + +secondIngredient;
        break;
      case "-":
        cookedDish = +firstIngredient - +secondIngredient;
        break;
      case "/":
        cookedDish = +firstIngredient / +secondIngredient;
        break;
      default:
        break;
    }

    firstIngredient = cookedDish.toString();
    secondIngredient = "";
    selectedRecipe = null;

    displayElement.innerHTML = firstIngredient;
  };
  document.getElementById("btn_calculate_tax").onclick = function () {
    let currentValue;
    if (selectedRecipe === null) {
      currentValue = parseFloat(firstIngredient);
    } else {
      currentValue = parseFloat(secondIngredient);
    }

    let taxRate;
    if (currentValue <= 20000000) {
      taxRate = 0.94;
    } else if (currentValue <= 2500000000) {
      taxRate = 0.89;
    } else if (currentValue <= 4500000000) {
      taxRate = 0.87;
    } else {
      taxRate = 0.74;
    }

    const result = currentValue * taxRate;

    if (selectedRecipe === null) {
      firstIngredient = result.toString();
      displayElement.innerHTML = firstIngredient;
    } else {
      secondIngredient = result.toString();
      displayElement.innerHTML = secondIngredient;
    }
  };
  document.getElementById("btn_toggle_night").onclick = function () {
    document.body.classList.toggle("dark-mode");
  };
  document.getElementById("btn_flip_sign").onclick = function () {
    if (selectedRecipe === null) {
      firstIngredient = (-parseFloat(firstIngredient)).toString();
      displayElement.innerHTML = firstIngredient;
    } else {
      secondIngredient = (-parseFloat(secondIngredient)).toString();
      displayElement.innerHTML = secondIngredient;
    }
  };
  document.getElementById("btn_percent_discount").onclick = function () {
    if (selectedRecipe === null) {
      firstIngredient = (0.01 * parseFloat(firstIngredient)).toString();
      displayElement.innerHTML = firstIngredient;
    } else {
      secondIngredient = (0.01 * parseFloat(secondIngredient)).toString();
      displayElement.innerHTML = secondIngredient;
    }
  };
  document.getElementById("btn_backspace").onclick = function () {
    if (selectedRecipe === null) {
      firstIngredient = firstIngredient.slice(0, -1);
      displayElement.innerHTML = firstIngredient;
    } else {
      secondIngredient = secondIngredient.slice(0, -1);
      displayElement.innerHTML = secondIngredient;
    }
  };
  document.getElementById("btn_square_root").onclick = function () {
    if (selectedRecipe === null) {
      firstIngredient = (parseFloat(firstIngredient) ** 0.5).toString();
      displayElement.innerHTML = firstIngredient;
    } else {
      secondIngredient = (parseFloat(secondIngredient) ** 0.5).toString();
      displayElement.innerHTML = secondIngredient;
    }
  };
  document.getElementById("btn_square").onclick = function () {
    if (selectedRecipe === null) {
      firstIngredient = (parseFloat(firstIngredient) ** 2).toString();
      displayElement.innerHTML = firstIngredient;
    } else {
      secondIngredient = (parseFloat(secondIngredient) ** 2).toString();
      displayElement.innerHTML = secondIngredient;
    }
  };
  document.getElementById("btn_factorial").onclick = function () {
    let number_a = parseFloat(firstIngredient);
    let number_b = parseFloat(secondIngredient);
    if (
      selectedRecipe === null &&
      number_a >= 0 &&
      number_a === Math.trunc(number_a)
    ) {
      let fct = 1;
      for (var i = 1; i <= number_a; i++) {
        fct = fct * i;
      }
      firstIngredient = fct.toString();
      displayElement.innerHTML = firstIngredient;
    } else if (
      selectedRecipe != null &&
      number_b >= 0 &&
      number_b === Math.trunc(number_b)
    ) {
      let fct = 1;
      for (var i = 1; i <= number_b; i++) {
        fct = fct * i;
      }
      secondIngredient = fct.toString();
      displayElement.innerHTML = secondIngredient;
    }
  };
  document.getElementById("btn_triple_zero").onclick = function () {
    if (selectedRecipe === null) {
      firstIngredient = firstIngredient + "000";
      displayElement.innerHTML = firstIngredient;
    } else {
      secondIngredient = secondIngredient + "000";
      displayElement.innerHTML = secondIngredient;
    }
  };
};
