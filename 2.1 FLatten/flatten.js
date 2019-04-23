//arraay die gecombineerd moeten worden door reduce en concat
let arrays= [[1,2,3],[4,5],[6]];
//Pakt de array en de var flateen en voegt deze samen.
const reducer = (arrays, flatten) => arrays + flatten + ",";
//Hier komen worden alle apparte arrays opgeslagen
var flatten = null;

//maakt van alle array één gezamelijke array
for (var i = 0; i <= arrays.length; i++) {
	flatten  =  arrays.concat(arrays[i]);
}
//print de flatten arrayts opgeteld bij elkaar.
console.log (flatten.reduce(reducer)); 