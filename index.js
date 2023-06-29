let resultEle = document.getElementById("result");
let first = null;
let last = null;
let operator = null;
function onNumber(number) {
  if (resultEle.value === "0") {
    resultEle.value = number;
  } else {
    resultEle.value += number;
  }
}
function onOperator(symbol) {
  first = parseFloat(resultEle.value);
  resultEle.value += symbol;
  operator = symbol;
}
function onCalculate() {
  if (resultEle.value === "") {
    resultEle.value = "";
  } else {
    const index = resultEle.value.indexOf(operator);
    last = resultEle.value.slice(index + 1, resultEle.value.length);
    last = parseFloat(last);
    let result = null;
    switch (operator) {
      case "^":
        result = first ** last;
        console.log(result);
        break;
      case "*":
        result = first * last;
        break;
      case "/":
        result = first / last;
        break;
      case "+":
        result = first + last;
        break;
      case "-":
        result = first - last;
        break;
      default:
        break;
    }
    resultEle.value = result;
  }
}
function onClear() {
  resultEle.value = "";
}
function onRemove() {
  resultEle.value = resultEle.value.slice(0, resultEle.value.length - 1);
}
