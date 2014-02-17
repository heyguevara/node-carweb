var fs = require('fs'),
    xml2js = require('xml2js'),
	request = require('request'),
	qs = require('querystring');

var Carweb = function( _config ){
	this.config = {
		url : 'https://www1.carwebuk.com/CarweBVRRB2Bproxy/carwebvrrwebservice.asmx/strB2BGetVehicleByVRM',
		username : 'jFloat',
		password : '33339688',
		ref : 'test',
		description : 'test',
		key : 'jf65tr78',
		version : '0.31.1'
	}
	// allow override
	if ( _config ) {
		for ( var prop in _config ) this.config[prop] = _config[prop];
	}
};

exports.Carweb = Carweb;

Carweb.prototype.fetch = function( registration, callback ){
	
	var self = this,
		params = {
		strUserName : this.config.username,
		strPassword : this.config.password,
		strClientRef : this.config.ref,
		strClientDescription : this.config.description,
		strKey1 : this.config.key,
		strVersion : this.config.version,
		strVRM : registration.replace(/[\s]+/ig,'')
	};
	
	request( this.config.url + "?" + qs.stringify(params), function (err, response, body ) {
		if ( err ) return callback(err);
		if ( response.statusCode != 200 ) return callback(new Error("returned code "+response.statusCode));
		
		self.parse( body, callback );
	});
};

Carweb.prototype.parse = function( data, callback ){
	var parser = new xml2js.Parser();
	parser.parseString( data, function (err, result) {
		// the "&&" is just to avoid an undefined error
		// Assume one car at a timex§
        callback( err, result && _clean(result.GetVehicles.DataArea[0].Vehicles[0].Vehicle[0]) ); 
    });
};


function _clean( raw ){
	var out = {};
	for ( var prop in raw ){
		
		var value = raw[prop];
		
		// These come out of xml2js as array values due to the nature of XML
		if ( value instanceof Array ) value = value[0];
		
		// get rid of empty whitespace so that we can resolve these as nothing
		value = value.replace(/[\s]+/ig,"");
		
		if ( value !== "" ) {
			out[prop.trim()] = value;
		}
	}
	return out;
}


/*
exports.get

exports.
*/