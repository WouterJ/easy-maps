/*
 * @name	: Map
 * @type	: Object
 * @visibility	: public
 * @use		: For creating a new google map
 * @parameters	: DOM elem
 * 		  OBJECT options
 */
var map = function( elem, options ) {
	if( arguments.length < 1 ) 
		return false;

	var defaults = {
		zoom : 1,
		center : new google.maps.LatLng(0,0),
		mapTypeId : google.maps.MapTypeId.ROADMAP
	};
	if( options !== undefined ) {
		options = extend( options, defaults );
	}
	else {
		options = defaults;
	}

	this.maps = new google.maps.Map(elem, options);

	/*
	 * @name	: map.addMarker
	 * @type	: Function
	 * @visibility	: public
	 * @use		: To add a marker to a map
	 * @parameters	: MARKER marker
	 */
	this.addMarker = function( marker ) {
		marker.setMap(this.maps);
	};

	/*
	 * @name	: map.addMarkers
	 * @type	: Function
	 * @visibility	: public
	 * @use		: To add multiply markers to a map
	 * @parameters	: ojbect markers || MARKER marker, [MARKER marker], [...]
	 */
	this.addMarkers = function() {
		var args = arguments,
		    markers = [];
		if( args.length < 1 ) {
			return false;
		}
		else if( args.length == 1 && args[0][1] === 'undefined' ) {
			markers.push(args[0]);
		}
		else if( args.length == 1 ) {
			for( i in args[0] ) {
				markers.push(args[0][i]);
			}
		}
		else if( args.length > 1 ) {
			for( i in args ) {
				markers.push(args[i]);
			}
		}
		else {
			return false;
		}

		for( var x=0;x < markers.length; x++ ) {
			this.addMarker(markers[x]);
		}
	};

	/*
	 * @name	: map.fitMarkers
	 * @type	: Function
	 * @visibility	: public
	 * @use		: To fit the markers in a map
	 * @parameters	: MARKER marker
	 * 		  [MARKER marker]
	 * 		  [...]
	 */
	this.fitMarkers = function() {
		var args = arguments,
		    bounds = new google.maps.LatLngBounds(),
		    len;
		if( args.length < 1 ) {
			return false;
		}
		else {
			len = args.length;
		}

		for( var i=0;i < len; i++ ) {
			var marker = args[i];
			bounds.extend(marker.getPosition());
		}

		this.maps.fitBounds(bounds);
	};

};
