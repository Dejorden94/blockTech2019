function countBs (woord){
		var Bcount = 0;
		for (var i = 0; i < woord.length; i++){
		if (woord.charAt(i) === "B") {
			Bcount++;
		}
	}
return Bcount;
}

function countChar (woord, letter){
	var charCount = 0;
	for (var i = 0; i < woord.length; i++) {
		if (woord.charAt(i) === letter) {
			charCount++;
		}
	}
	return charCount;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4*/