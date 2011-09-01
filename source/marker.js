/*
 * @name	: Marker
 * @type	: Object
 * @visibility	: public
 * @use		: For creating a marker
 * @parameters	: OBJECT options
 */
var marker = function( options ) {
	if( arguments.length != 1 || typeof options !== 'object' ) 
		return false;

	var defaults = {
		position : position(0,0)
	};

	var options = extend(options, defaults);

	this.marker = new google.maps.Marker(options);

	return this.marker;
};
