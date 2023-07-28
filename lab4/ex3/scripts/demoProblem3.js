let devideByTwo = n => (n/2)
do {
    inputInt = Number(prompt("Enter an integer"))
    if (Number.isInteger(inputInt)) {
        alert(devideByTwo(inputInt));
        break;
    }
} while (true);