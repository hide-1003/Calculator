const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function deleteLastChar() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch (err) {
        display.value = "Error";
    }
}


document.addEventListener("keydown", (event) => {
    const key = event.key;

    if ((key >= "0" && key <= "9") || key === ".") {
        appendToDisplay(key);
        return;
    }

    if (key === "+" || key === "-" || key === "*" || key === "/") {
        appendToDisplay(key);
        return;
    }

    if (key === "Enter" || key === "=") {
        event.preventDefault();
        calculate();
        return;
    }

    if (key === "Backspace") {
        deleteLastChar();
        return;
    }

    if (key === "Escape" || key === "c" || key === "C") {
        clearDisplay();
        return;
    }
});
