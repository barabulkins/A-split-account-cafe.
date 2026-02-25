window.onload = function () {
  let a = "";
  let b = "";
  let expressionResult = "";
  let selectedOperation = null;
  // Получаем доступ к экрану калькулятора в поле вывода
  const outputElement = document.getElementById("result");
  // Получаем все кнопки с цифрами (их id начинаются с "btn_digit_")
  const digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]');

  function onDigitButtonClicked(digit) {
    // Если операция не выбрана, работаем с первым числом (a) - после выбора операции начинается ввод второго числа
    if (!selectedOperation) {
      // Проверяем, не пытаемся ли мы добавить вторую точку
      if (digit != "." || (digit == "." && !a.includes(digit))) {
        // здесь у нас происходит складывание сохраненного уже числа и нажатой цифры. Оба поля string, поэтому
        // каждый раз цифра записывается в конец строки.
        a += digit;
      }
      outputElement.innerHTML = a;
    }
    // Если операция выбрана, работаем со вторым числом (b)
    else {
      if (digit != "." || (digit == "." && !b.includes(digit))) {
        b += digit;
        outputElement.innerHTML = b;
      }
    }
  }

  // Настраиваем обработчики для цифровых кнопок - для каждой кнопки с цифрой и точкой вызываем выше написанную функцию по формированию числа
  digitButtons.forEach((button) => {
    button.onclick = function () {
      // берем текст, написанный на кнопке - он и является цифрой
      const digitValue = button.innerHTML;
      onDigitButtonClicked(digitValue);
    };
  });

  // Настраиваем обработчики для кнопок операций - сохраняем выбранную операцию в ранее созданную переменную selectedOperation
  document.getElementById("btn_op_mult").onclick = function () {
    if (a === "") return;
    selectedOperation = "x";
  };
  document.getElementById("btn_op_plus").onclick = function () {
    if (a === "") return;
    if (b !== "" && selectedOperation !== null) {
      switch (selectedOperation) {
        case "+":
          a = (+a + +b).toString();
          break;
        case "-":
          a = (+a - +b).toString();
          break;
        default:
          break;
      }
      b = "";
      outputElement.innerHTML = a;
    }
    selectedOperation = "+";
  };
  document.getElementById("btn_op_minus").onclick = function () {
    if (a === "") return;
    if (b !== "" && selectedOperation !== null) {
      switch (selectedOperation) {
        case "+":
          a = (+a + +b).toString();
          break;
        case "-":
          a = (+a - +b).toString();
          break;
        default:
          break;
      }
      b = "";
      outputElement.innerHTML = a;
    }
    selectedOperation = "-";
  };
  document.getElementById("btn_op_div").onclick = function () {
    if (a === "") return;
    selectedOperation = "/";
  };
  // Очищаем все значения при нажатии на кнопку C (вешаем обработчик события click на кнопку С)
  document.getElementById("btn_op_clear").onclick = function () {
    a = "";
    b = "";
    selectedOperation = null;
    expressionResult = "";
    outputElement.innerHTML = 0;
  };

  document.getElementById("btn_op_equal").onclick = function () {
    if (a === "" || b === "" || !selectedOperation) return;

    switch (selectedOperation) {
      case "x":
        expressionResult = +a * +b;

        break;
      case "+":
        expressionResult = +a + +b;
        break;
      case "-":
        expressionResult = +a - +b;
        break;
      case "/":
        expressionResult = +a / +b;
        break;
      default:
        break;
    }

    // Сохраняем результат и очищаем второе число, чтобы при новом вводе записывать значение нового числа в b
    a = expressionResult.toString();
    b = "";
    selectedOperation = null;

    // Показываем результат на экране
    outputElement.innerHTML = a;
  };
  document.getElementById("go_guests").onclick = function () {
    const value_guests = document.getElementById("guests");
    const number_guests = Number(value_guests.value);
    let res = parseFloat(outputElement.innerHTML) / number_guests;
    a = res.toString();
    b = "";
    selectedOperation = null;
    outputElement.innerHTML = a;
  };
  document.getElementById("turn_night").onclick = function () {
    document.body.classList.toggle("dark");
  };
  document.getElementById("btn_op_sign").onclick = function () {
    if (selectedOperation === null) {
      a = (-parseFloat(a)).toString();
      outputElement.innerHTML = a;
    } else {
      b = (-parseFloat(b)).toString();
      outputElement.innerHTML = b;
    }
  };
  document.getElementById("btn_op_percent").onclick = function () {
    if (selectedOperation === null) {
      a = (0.01 * parseFloat(a)).toString();
      outputElement.innerHTML = a;
    } else {
      b = (0.01 * parseFloat(b)).toString();
      outputElement.innerHTML = b;
    }
  };
  document.getElementById("btn_op_back").onclick = function () {
    if (selectedOperation === null) {
      a = a.slice(0, -1);
      outputElement.innerHTML = a;
    } else {
      b = b.slice(0, -1);
      outputElement.innerHTML = b;
    }
  };
  document.getElementById("btn_op_sqrt").onclick = function () {
    if (selectedOperation === null) {
      a = (parseFloat(a) ** 0.5).toString();
      outputElement.innerHTML = a;
    } else {
      b = (parseFloat(b) ** 0.5).toString();
      outputElement.innerHTML = b;
    }
  };
  document.getElementById("btn_op_sec-deg").onclick = function () {
    if (selectedOperation === null) {
      a = (parseFloat(a) ** 2).toString();
      outputElement.innerHTML = a;
    } else {
      b = (parseFloat(b) ** 2).toString();
      outputElement.innerHTML = b;
    }
  };
  document.getElementById("btn_op_fact").onclick = function () {
    let number_a = parseFloat(a);
    let number_b = parseFloat(b);
    if (
      selectedOperation === null &&
      number_a >= 0 &&
      number_a === Math.trunc(number_a)
    ) {
      let fct = 1;
      for (var i = 1; i <= number_a; i++) {
        fct = fct * i;
      }
      a = fct.toString();
      outputElement.innerHTML = a;
    } else if (
      selectedOperation != null &&
      number_b >= 0 &&
      number_b === Math.trunc(number_b)
    ) {
      let fct = 1;
      for (var i = 1; i <= number_b; i++) {
        fct = fct * i;
      }
      b = fct.toString();
      outputElement.innerHTML = b;
    }
  };
  document.getElementById("btn_op_tri-zero").onclick = function () {
    if (selectedOperation === null) {
      a = a + "000";
      outputElement.innerHTML = a;
    } else {
      b = b + "000";
      outputElement.innerHTML = b;
    }
  };
};
