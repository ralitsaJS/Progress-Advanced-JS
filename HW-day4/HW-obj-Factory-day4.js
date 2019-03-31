var LoggerFactory = function(){
this.log = function(){
	console.log(`There is local environment`);
};
this.dir = function(){
	console.dir(this);
};	
}

function findLogger(){
	if(document.location.href === 'http://127.0.0.1:8080/'){
		return {
			dir:function(){
				console.dir({});
			},
			log:function(){
				console.log('Nothing to see')
			}
		}
	}
	else{

		return new LoggerFactory();
	}
}
var logger = findLogger();
logger.log();
logger.dir();
