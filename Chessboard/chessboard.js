var wit = " ";
var zwart = "#";
var newRegel = "\n"
var bord = "";
var size = 8;

function chessboard (size){
	
	for (var i = 0 ; i < size; i++) {
		for (var j = 0 ; j < size; j++){
			if ((i + j) % 2 === 0) {
			bord += wit;
			}
			else{
			bord += zwart;
			}
		}
		bord += newRegel;
}
}

chessboard(8);
console.log(bord)