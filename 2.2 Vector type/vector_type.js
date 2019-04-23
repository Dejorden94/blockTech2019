/*console.log("test");*/
const x = null;
const y = null;
const value = null;

class Vec{
	constructor(x, y){
		//waardes waar mee gewerkt gaat worden
		this.x = x;
		this.y = y;
	}
	plus(value) {
		//Bij plus wordt de eerste x opgeteld bij de tweede x en het zelfde gebeurt met y 
    	return new Vec(this.x + value.x, this.y + value.y);
  	}
	minus(value){
		//Bij minus wordt de eerste x afgetroken van de tweede x en hetzelfde gebeurt met y
		return new Vec (this.x - value.x, this.y - value.y);
	}
	get length(){
		//waarde keer waarde en daar de wortel van.
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5