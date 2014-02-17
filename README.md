node-carweb
===========

API client for Carweb's vehicle registration database

Usage
-----

	var Carweb = require('carweb').Carweb;
	
	var carweb = new Carweb({
		url : "", // (optional, defaults to 'https://www1.carwebuk.com/CarweBVRRB2Bproxy/carwebvrrwebservice.asmx/strB2BGetVehicleByVRM' )
		username : 'yourUser',
		password : 'yourPw',
		ref : 'test',
		description : 'test',
		key : 'yourKey',
		version : '0.31.1'
	});
	
	var reg = "FJ19 6BP";
	
	carweb.fetch( reg, function( err, vehicle ){
		console.log(vehicle); // should spit out an object full of key/value pairs. Fields that only contain whitespace are stripped out.
	})



