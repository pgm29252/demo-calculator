let inputValue = "";
let isCe = true;

const elemParentBtn = document.querySelector(".container-button");
const elemBtns = elemParentBtn.querySelectorAll("button");
const elemAc = document.querySelector("#clear");

elemBtns.forEach(function (elemBtn) {
  elemBtn.addEventListener("click", function () {
    handleClickBtn(this.dataset["id"]);
    document.getElementById("msg").value = inputValue;
  });
});

function add(input) {
  inputValue += input;
  if (!isCe) {
    elemAc.dataset["id"] = "CE";
    elemAc.textContent = "CE";
  }
}

function removeOne() {
  inputValue = inputValue
    .split("")
    .filter((_, i) => i !== inputValue.length - 1)
    .join("");
}

function removeAll() {
  inputValue = "";
}

function calSum() {
  let subAt = 0;
  const groups = [""];
  const operators = [];

  inputValue.split("").map((value) => {
    // ######## 1
    const opts = ["+", "×", "-", "÷", "%"];
    if (opts.some((v) => v === value)) {
      subAt++;
      groups[subAt] = "";
      operators.push(value);
      return;
    }
    groups[subAt] += value;

    // ######## 2
    // switch (value) {
    //   case "+":
    //     subAt++;
    //     groups[subAt] = "";
    //     operators.push("+");
    //     break;
    //   case "-":
    //     subAt++;
    //     groups[subAt] = "";
    //     operators.push("-");
    //     break;
    //   case "×":
    //     subAt++;
    //     groups[subAt] = "";
    //     operators.push("×");
    //     break;
    //   case "÷":
    //     subAt++;
    //     groups[subAt] = "";
    //     operators.push("÷");
    //     break;
    //   case "%":
    //     subAt++;
    //     groups[subAt] = "";
    //     operators.push("%");
    //     break;
    //   default:
    //     groups[subAt] += value;
    // }
  });

  subAt = 0;
  if (groups.length > 1 && !groups.includes("")) {
    let sum = operators.reduce((_, input) => {
      switch (input) {
        case "+":
          groups[subAt + 1] = Number(groups[subAt]) + Number(groups[++subAt]);
          break;
        case "-":
          groups[subAt + 1] = Number(groups[subAt]) - Number(groups[++subAt]);
          break;
        case "×":
          groups[subAt + 1] = Number(groups[subAt]) * Number(groups[++subAt]);
          break;
        case "÷":
          groups[subAt + 1] = Number(groups[subAt]) / Number(groups[++subAt]);
          break;
        case "%":
          groups[subAt + 1] = Number(groups[subAt]) % Number(groups[++subAt]);
          break;
        default:
          0;
      }
      return groups[subAt];
    }, 0);

    elemAc.dataset["id"] = "AC";
    elemAc.textContent = "AC";
    inputValue = sum;
    isCe = false;
  }
}

function handleClickBtn(value) {
  switch (value) {
    case "%":
      // condiftion
      add(value);
      break;
    case ".":
      // condiftion
      add(value);
      break;
    case "÷":
      // condiftion
      add(value);
      break;
    case "×":
      // condiftion
      add(value);
      break;
    case "-":
      // condiftion
      add(value);
      break;
    case "+":
      // condiftion
      add(value);
      break;
    case "=":
      calSum();
      break;
    case "CE":
      removeOne();
      break;
    case "AC":
      removeAll();
      break;
    default:
      add(value);
  }
}
