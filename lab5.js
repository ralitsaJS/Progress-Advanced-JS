
/*let user1={
	name : "Maria",
	balance : 100,
    'log': function(){
		console.log("fwewefeg");
	}
}
*/
function User (name, balance){
	this.name = "Maria",
	this.balance = 100,
	this.log = function(){
    console.log(this.name + ':' + this.balance);
	}
}
let user1 = new User('Maria',100);
user1.log();
// ако забравим new функцията ни User е обикновенна, this ни е window obj и функцията ни фръща undifind , 
//защото нямаме return, следователно не можем да имаме .log от undifind