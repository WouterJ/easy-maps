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

	var maps;

	/*
	 * @name	: Position
	 * @type	: Object
	 * @use		: For creating a coördinate
	 * @parameters	: OBJECT ll  ||  STRING place
	 */
	var position = function() {
		var args = arguments,
		    len = args.length;
		if( len < 1 ) {
			return false;
		}
		
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
	 * @use		: For creating a new google map
	 * @parameters	: DOM elem
	 * 		  OBJECT options
	 * @TODO	: Elem dom check
	 */
	var map = function( elem, options ) {
		if( arguments.length < 1 ) {
			return false;
		}

		var defaults = {
			zoom : 1,
			center : new google.maps.LatLng(0,0),
			mapTypeId : google.maps.MapTypeId.ROADMAP
		};
		if( options !== undefined ) {
			for( i in defaults ) {
				if( !options[i] ) {
					options[i] = defaults[i];
				}
			}
		}
		else {
			options = defaults;
		}

		maps = new google.maps.Map(elem, options);
	};

	/*
	 * @name	: Marker
	 * @type	: Object
	 * @use		: For creating a marker
	 * @parameters	: OBJECT options
	 */

	// Every object should work in the normal workaround
	     window.Map = map;
	window.Position = position;

})(window, document);
