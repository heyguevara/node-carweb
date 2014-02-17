
var Carweb = require('../index').Carweb,
	assert = require('assert'),
	fs = require('fs');

describe('parse', function(){
	
	it("should return the car data from a file", function(done){
		
		var carweb = new Carweb();
		
		fs.readFile( __dirname + '/resources/sample_response.xml', function(err, data) {
			if ( err ) return done(err);
			
			carweb.parse( data, function( err, vehicle ){
				assert(!err);
				assert(vehicle);
				//assert.strictEqual( typeof hash, "string" );
				//assert.notEqual( hash, testString );
				done();
			});
		});

	});
})