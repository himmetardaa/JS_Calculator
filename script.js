//1.Yöntem

// const display = document.querySelector(".calculator-input");
// const keys = document.querySelector(".calculator-keys");

// let displayValue = '0';
// let ilkDeger = null;
// let operator = null;
// let bekelenenDeger = false;

// updateDisplay();

// function updateDisplay() {
//   display.value = displayValue;
// }

// keys.addEventListener('click', function (e) {
//   const element = e.target;

//   if (!element.matches('button')) return;

//   if (element.classList.contains('operator')) {
//     console.log('operator', element.value);
//     kullanılanOperator(element.value);
//     updateDisplay();
//     return;
//   }

//   if (element.classList.contains('decimal')) {
//     inputDecimal();
//     updateDisplay();
//     return;
//   }

//   if (element.classList.contains('clear')) {
//     clearInput();
//     updateDisplay();
//     return;
//   }

//   if (element.classList.contains('sil')) {
//     removeLastCharacter();
//     updateDisplay();
//     console.log(displayValue);
//     return;
//   }

//   if (element.classList.contains('esittir')) {
//     hesapla();
//   }

//   inputNumber(element.value);
//   updateDisplay();
// });

// function kullanılanOperator(nextOperator) {
//   const value = parseFloat(displayValue);

//   console.log("next operator: ", nextOperator);
//   console.log("Beklenen Değer: ", bekelenenDeger);

//   if (operator && bekelenenDeger) {
//     operator = nextOperator;
//     return;
//   }

//   if (displayValue === null) {
//     ilkDeger = value;
//   } else if (operator) {
//     ilkDeger = +displayValue;
//     console.log("displayValue: ", displayValue);
//     console.log("İlk değer: ", ilkDeger)
//     console.log("operator: ", operator)
//     console.log("İkinci: ", value)
//     const result = hesapla(ilkDeger, operator, value);

//     displayValue = `${parseFloat(result.toFixed(7))}`;
//     ilkDeger = result;
//   }

//   bekelenenDeger = true;

//   operator = nextOperator;
// }

// function hesapla(ilk, operator, ikinci) {
//   switch (operator) {
//     case "+":
//       return ilk + ikinci;
//     case "-":
//       return ilk - ikinci;
//     case "*":
//       return ilk * ikinci;
//     case "/":
//       return ilk / ikinci;
//     default:
//       return ikinci;
//   }
// }

// function inputNumber(num) {
//   if (bekelenenDeger) {
//     displayValue = num;
//     bekelenenDeger = false;
//   } else {
//     displayValue = displayValue === '0' ? num : displayValue + num;
//   }
// }

// function inputDecimal() {
//   if (!displayValue.includes('.')) {
//     displayValue += '.';
//   }
// }

// function clearInput() {
//   displayValue = '0';
// }

// function removeLastCharacter() {
//   let numberString = displayValue.toString();
//   let updatedString = numberString.slice(0, -1);
//   console.log(updatedString);
//   displayValue = updatedString !== '' ? parseFloat(updatedString) : 0;
// }
// Hesap makinesi tuşlarına erişim sağlama
const calculatorKeys = document.querySelector(".calculator-keys");
const inputArea = document.getElementById("clc-input");


//2.Yöntem

// Hesap makinesi tuşlarına tıklama olayını dinleme
calculatorKeys.addEventListener("click", (event) => {
  if (event.target.matches("button")) {
    const key = event.target;
    const keyValue = key.value;

    // "=" tuşuna basıldığında hesaplamayı yapma
    if (key.classList.contains("esittir")) {
      calculate();
    }
    // "AC" tuşuna basıldığında temizleme
    else if (key.classList.contains("clear")) {
      inputArea.value = "";
    }
    // "sil" tuşuna basıldığında son karakteri silme
    else if (key.classList.contains("sil")) {
      inputArea.value = inputArea.value.slice(0, -1);
    }
    // Diğer tuşlara basıldığında değeri ekrana ekleme
    else {
      inputArea.value += keyValue;
    }
  }
});

// Hesaplamayı gerçekleştirme
function calculate() {
  let expression = inputArea.value;
  // Güvenlik kontrolü
  if (expression.includes("--") || expression.includes("++") || expression.includes("**") || expression.includes("//")) {
    inputArea.value = "Geçersiz İfade";
    return;
  }
  try {
    const result = eval(expression);
    inputArea.value = result;
  } catch (error) {
    inputArea.value = "Hata";
  }
}
