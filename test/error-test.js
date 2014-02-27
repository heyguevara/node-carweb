
var Carweb = require('../index').Carweb,
	assert = require('assert'),
	fs = require('fs');

describe('error', function(){
	
	it("should return an error object in callback with appropriate message", function(done){
		
		var carweb = new Carweb();
		
		fs.readFile( __dirname + '/resources/error_response.xml', function(err, data) {
			if ( err ) return done(err);
			
			carweb.parse( data, function( err, vehicle ){
				assert(err);
				assert(!vehicle);
				
				assert.strictEqual( err.message, "Code 104: No more available user accounts. If you have changed your server or IP address, please contact us to reset your account." );
				
				done();
			});
		});

	});
})