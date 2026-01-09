function insert(input) {
    const inputvalue = document.form1.inputvalue.value;

    // display the input value
    document.form1.inputvalue.value = inputvalue + input;
}

function equal() {
    let total = document.form1.inputvalue.value;

    if (total) {
        total = eval(total);
        document.form1.inputvalue.value = total;
    } else {
        document.form1.inputvalue.value = "enter value";
    }
}

function backspace() {
    let inputvalue = document.form1.inputvalue.value;
    inputvalue = inputvalue.slice(0, -1);
    document.form1.inputvalue.value = inputvalue;
}

function clearScreen() {
    document.form1.inputvalue.value = "";
}

function squareRoot() {
    let inputvalue = document.form1.inputvalue.value;

    if (inputvalue) {
        inputvalue = Math.sqrt(eval(inputvalue));
        document.form1.inputvalue.value = inputvalue;
    }
}