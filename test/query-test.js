
var Carweb = require('../index').Carweb,
	assert = require('assert'),
	fs = require('fs');

describe('fetch', function(){
	
	it("should return the car data from a live URL", function(done){
		
		var carweb = new Carweb({
			username : 'jFloat',
			password : '33339688',
			ref : 'test',
			description : 'test',
			key : 'jf65tr78',
			version : '0.31.1'
		});
		
		var reg = "ej60 ywx";
	
	
		carweb.fetch( reg, function( err, vehicle ){
			if ( err ) return done(err);
			
			console.log(vehicle);
			assert(vehicle);
			done();
		});
	});
})

