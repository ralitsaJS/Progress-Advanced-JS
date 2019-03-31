
function Person(name,age){
	this.name=name,
	this.age=age
}
Person.prototype.greet = function(){
	console.log(`${this.name} is ${this.age} years old`)
}
function Developer(name, age, skills){
	Person.call(this,name,age);
	this.skills=skills;
	
}
function Manager(name, age,manage){
	Person.call(this,name,age);
	this.manage=manage;
}
// Mnogo Vajno
Developer.prototype = Object.create(Person.prototype);
var pesho = new Developer('Pesho', 32, ['PHP', 'JS']);
var maria = new Developer('Maria',24, ['Python', 'R']);
var ivan = new Manager('Ivan',54, ['maria']);
pesho.greet();