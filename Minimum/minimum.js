var laagste = null;

function minimum (num1, num2){	
	laagste = Math.min(num1, num2);
	return laagste;
}

console.log(minimum(0, 10));
// → 0
console.log(minimum(0, -10));
// → -10