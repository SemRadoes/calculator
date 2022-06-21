class Calculator{
	constructor(previousCharTextElement,currentCharTextElement){
		this.previousCharTextElement = previousCharTextElement;
		this.currentCharTextElement = currentCharTextElement;
		this.clear();
	}
	clear() {
		this.currentChar = '';
    	this.previousChar = '';
    	this.operation = undefined;
	}
	
	delete() {
	}
	
	appendNumber(number) {
		this.currentChar = number;
	}
	
	chooseOperation(operation) {
	}
	
	compute() {
	}
	
	updateDisplay() {
		this.currentCharTextElement.innerText = this.currentChar;
	}
}
const number = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-operator]');
const equals = document.querySelector('[data-equals]');
const erase = document.querySelector('[data-erase]');
const deleteIt = document.querySelector('[data-delete]');
const previousCharTextElement = document.querySelector('[data-previous-char]');
const currentCharTextElement = document.querySelector('[data-current-char]');
const calculator = new Calculator(previousCharTextElement, currentCharTextElement);

number.forEach(button => {
	button.addEventListener('click', () => {
		calculator.appendNumber(button.innerText);
		calculator.updateDisplay();
	});
});


// let calculating = "";
// function add(number) {
	// 	document.querySelector("#screen_id").value = "";
	// 	calculating += number;
	// 	document.querySelector("#screen_id").value = calculating;
	// }
	
	// function CE() {
		// 	document.querySelector("#screen_id").value = "";
		// 	calculating = "";
// }
// function C() {
// 	calculating = calculating.slice(0, -1)
// 	document.querySelector("#screen_id").value = calculating;
// }

// function calculate() {
// 	let number;
// 	calculating = calculating.split(/[*-+/]+/);
// 	for(let i = 0; i < calculating.length; i++){
		
// 		if(i === "*"){
// 			const uitkomst = parseInt(number);
// 		}
// 	}

// }
