function calculate() {
	document.calc.output.value=eval(document.calc.output.value);
}

function erase(){
	document.calc.output.value='';
}

function ent(val) {
	document.calc.output.value+=val;
}