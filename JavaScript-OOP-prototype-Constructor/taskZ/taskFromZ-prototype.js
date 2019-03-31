let People = function(name,age){
this.name = name,
this.age=age
}
People.prototype.greet = function(){
	console.log(`${this.name} is ${this.age} years old`);
}
let Developer = function(name,age, skills){
this.skills= skills;
//pravim vruzkata sa People i parametrite ot nego - name i age za da gi preizpolzvame v Developer
People.call(this,name,age);
this.greet = function(){
	// vikam greet ot konstruktora People s negovata funkciq kato zakachame na prototipa my oshte edna.
	Developer.prototype.greet.call(this);
	console.log(`and can work with ${this.skills}`);
}
}
Developer.prototype = Object.create(People.prototype);

let Manager = function(name, age, manage){
	this.manage= manage,
	People.call(this,name,age);
	this.greet = function(){
	Manager.prototype.greet.call(this);
	console.log(`and ${this.name} is manager of ${this.manage}`)
	}
}
Manager.prototype = Object.create(People.prototype);
let pesho = new Developer("Pesho", 20, ['JavaScript','Ract']);
let maria = new Developer ("Maria", 26, ["Pyton","PHP","CSS","HTML"]);
let valentinManager = new Manager('Valentin', 45, ["Martin","Simeon","Todor"]);
pesho.greet();
maria.greet();
valentinManager.greet();
