class Calculator {
	constructor(previousCharTextElement, currentCharTextElement) {
		this.previousCharTextElement = previousCharTextElement;
		this.currentCharTextElement = currentCharTextElement;
		this.clear();
	}
	clear() {
		this.currentChar = "";
		this.previousChar = "";
		this.operation = undefined;
	}

	delete() {
		this.currentChar = this.currentChar.toString().slice(0, -1);
	}

	appendNumber(number) {
		if (number === "." && this.currentChar.includes(".")) return;
		this.currentChar = this.currentChar.toString() + number.toString();
	}

	chooseOperation(operation) {
		if (this.currentChar === "") return;
		if (this.previousChar !== "") {
			this.compute();
		}
		this.operation = operation;
		this.previousChar = this.currentChar;
		this.currentChar = "";
	}

	compute() {
		let computation;
		const prev = parseFloat(this.previousChar);
		const current = parseFloat(this.currentChar);
		if (isNaN(prev) || isNaN(current)) {
			return;
		}

		switch (this.operation) {
			case "+":
				computation = prev + current;
				break;
			case "-":
				computation = prev - current;
				break;
			case "*":
				computation = prev * current;
				break;
			case "÷":
				computation = prev / current;
				break;
			default:
				return;
		}
		this.currentChar = computation;
		this.operation = undefined;
		this.previousChar = "";
	}

	getDisplayNumber(number){
		const numberString = number.toString();
		const intDigits = parseFloat(numberString.split('.')[0]);
		const floatDigits = numberString.split('.')[1];
		let intDisplay;
		if(isNaN(intDigits)){
			intDisplay = '';
		} else {
			intDisplay = intDigits.toLocaleString('en', {maximumFractionDigits: 0});
		}
		if(floatDigits != null){
			return `${intDisplay}.${floatDigits}`;
		} else {
			return intDisplay;
		}
	}

	updateDisplay() {
		this.currentCharTextElement.innerText = this.getDisplayNumber(this.currentChar);
		if (this.operation != null) {
			this.previousCharTextElement.innerText = `${this.getDisplayNumber(this.previousChar)} ${this.operation}`;
		} else {
			this.previousCharTextElement.innerText = '';
		}
	}
}
const number = document.querySelectorAll("[data-number]");
const operators = document.querySelectorAll("[data-operator]");
const equals = document.querySelector("[data-equals]");
const erase = document.querySelector("[data-erase]");
const deleteIt = document.querySelector("[data-delete]");
const previousCharTextElement = document.querySelector("[data-previous-char]");
const currentCharTextElement = document.querySelector("[data-current-char]");
const calculator = new Calculator(previousCharTextElement, currentCharTextElement);

number.forEach((button) => {
	button.addEventListener("click", () => {
		calculator.appendNumber(button.innerText);
		calculator.updateDisplay();
	});
});
operators.forEach((operator) => {
	operator.addEventListener("click", () => {
		calculator.chooseOperation(operator.innerText);
		calculator.updateDisplay();
	});
});

equals.addEventListener("click", () => {
	calculator.compute();
	calculator.updateDisplay();
});

deleteIt.addEventListener("click", () => {
	calculator.clear();
	calculator.updateDisplay();
});

erase.addEventListener("click", () => {
	calculator.delete();
	calculator.updateDisplay();
});
