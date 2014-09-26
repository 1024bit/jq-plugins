/**
 *  Intelligent guess the new position for which one will be out of viewport when positioning
 */
define("jquery.fn.guessposition", function(require, exports) {
	var
	$ = require('jquery'), 
	$win = $(window);

	$.extend($.fn, {
		positionX: function ($relative) {
			var 
			wleft = $win.scrollLeft(), 
			ww = $win.width(), 
			wrt = wleft + ww, 
			eleft = $relative.position().left,
			ew = $relative.outerWidth(),
			ert = eleft + ew, 
			w = this.outerWidth(), 
			offleft = $relative.position().left;

			// Out of viewport
			if ((ert + w > wrt) && (eleft - wleft > wrt - ert)) {
				this.css('left', offleft - w);
			} else {
				this.css('left', offleft + ew);
			}
			return this;
		}, 
		positionY: function ($relative) {
			var 
			wtop = $win.scrollTop(), 
			wh = $win.height(), 
			wbtm = wtop + wh, 
			etop = $relative.offset().top,
			eh = $relative.outerHeight(),
			ebtm = etop + eh, 
			h = this.outerHeight(), 
			offtop = $relative.position().top;
			// Out of viewport
			if ((ebtm + h > wbtm) && (etop - wtop > wbtm - ebtm)) {
				// Compare who's space is larger
				this.css('top', offtop - h);
			} else {
				this.css('top', offtop + eh);
			}
			return this;			
		}
	});
});