/*function Car (){
	this.wheels =4,
	this.manifact= undefined,
	this.speed =100,
	this.drive = function(){
		console.log(`Driving with ${this.speed}`)
	}
}
*/
/*
function Car (manifact, speed){
	this.manifacturer = manifact,
	this.speed = speed,
	this.drive = function(){
		console.log(`${this.manifacturer} driving with ${this.speed}`)
		// zashto ne iskame vutre da imame tazi funkciq
		//funkciqta ni za obektite, koito shte nasledqt tozi konstructr e edna i sushta 
		//i nqma smisul da se kopira vseki put, harchi mnogo pamet
		//shte q suhranim nqkude drugade ot kude da q nasledqvame 
	}
}
let ford = new Car('Ford',200);
let bmw = new Car ('BMW',250);
ford.drive();
bmw.drive();
 */
//dobrata praktika
//zadacha s konstruktor

function Car (manifact, speed){
	this.manifact = manifact,
	this.speed = speed
}
Car.prototype.drive = function(){
	console.log(`${this.manifact} driving with ${this.speed}`)
}
function Ford(manifact, speed,rust){
	Car.call(this,manifact,speed);
	this.rust=rust
}
function BMW(manifcat, speed, doors){
	this.doors = doors
}
let ford = new Car('Ford',200);
let bmw = new Car ('BMW',250);
let ford1948 = new Ford('Ford',200,50);
let bmw2005 = BMW('BMW', 250, 4);
Ford.prototype = 
console.log(`ford1948.speed: ${ford1948.speed}`);
ford.drive();
bmw.drive();

/*
// sushtata zadacha s Factory 
function carFactory(manifact, speed){
	let factory ={};
	factory.manifactory = manifact;
	factory.speed = speed;
	factory.__proto__=carFactory.prototype;
	return factory;
}
carFactory.prototype.drive = function(){
	console.log(`${this.manifactory} driving with ${this.speed}`)
}
let ford = carFactory('Ford',200);
let bmw = carFactory ('BMW',250);
// or    ford.__proto__=carFactory.prototype;
ford.drive();
bmw.drive();
*/