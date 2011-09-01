/*
 * @name	: Position
 * @type	: Object
 * @visibility	: public
 * @use		: For creating a coördinate
 * @parameters	: OBJECT ll  ||  STRING place
 */
var position = function() {
	var args = arguments,
	    len = args.length;

	if( len < 1 ) 
		return false;
	
	if( len == 1 && typeof args[0] == 'string' ) {
		return new google.maps.LatLng(args[0]);
	}

	if( len == 2 && typeof args[0] == 'number' && typeof args[1] == 'number' ) {
		return new google.maps.LatLng(args[0], args[1]);
	}
	return false;
};
