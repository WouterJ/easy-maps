/*
 * EASY MAPS
 * A simple libary for a nice google maps
 * on your one page.
 *
 * @name 	: Easy Maps
 * @for		: Google Maps API V3
 * @version	: 1.0
 * @author	: Wouter J
 * @use		: JavaScript
 */
// Let's create a workaround
(function(window,document,undefined) {

	/*
	 * @name	: extend
	 * @type	: Function
	 * @visibility	: private
	 * @use		: For extending 2 arrays
	 * @parameters	: OBJECT arrayOne
	 * 		  OBJECT arrayTwo
	 */
	var extend = function( aOne, aTwo ) {
		if( arguments.length != 2 ) 
			return false;

		for( i in aTwo ) {
			if( !aOne[i] ) {
				aOne[i] = aTwo[i];
			}
		}

		return aOne;
	};

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

	/*
	 * @name	: Map
	 * @type	: Object
	 * @visibility	: public
	 * @use		: For creating a new google map
	 * @parameters	: DOM elem
	 * 		  OBJECT options
	 * @TODO	: Elem dom check
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

		return this;
	};

	/*
	 * @name	: map.addMarker
	 * @type	: Function
	 * @visibility	: public
	 * @use		: To add a marker to a map
	 * @parameters	: MARKER marker
	 */
	map.addMarker = function( marker ) {
		marker.setMap(this.map);
	};

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

	// Every object should work in the normal workaround
	window.Position = position;
	     window.Map = map;
	  window.Marker	= marker;

})(window, document);
