/*
Plugin: jQuery Parallax
Version 1.1.3
Author: Ian Lunn
Modified: Guy Hawkins

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/

(function( $ ){
	var $window = $(window);
	var windowHeight = $window.height();

	$window.resize(function () {
		windowHeight = $window.height();
	});

	$.fn.parallax = function(xOffset, xSpeedFactor, yOffset, ySpeedFactor) {
		var $this = $(this);
		var firstTop;
		var paddingTop = 0;
		var getHeight = function(jqo) {
				return jqo.outerHeight(true);
				};
		//get the starting position of each element to have parallax applied to it		
		$this.each(function(){
		    firstTop = $this.offset().top;
		});	
		
		
		//check x/y offset
		if(xOffset === null || xOffset < 0 || xOffset > 200) xOffset = 0;
		if(yOffset === null || yOffset < 0 || yOffset > 200) yOffset = 0;
		
		var parHeight = $this.parent().outerHeight(true);
		var parWidth = $this.parent().outerWidth(true);
		
		//convert x/x offsets to pixels
		xOffset = parHeight*xOffset/100;
		yOffset = parWidth*yOffset/100;
				
		function update(){
			var pos = $window.scrollTop();				

			$this.each(function(){
				var $element = $(this);
				var top = $element.offset().top;
				var height = getHeight($element);

				// Check if totally above or totally below viewport
				if (top + height < pos || top > pos + windowHeight) {
					return;
				}
				
			    var yPos = Math.round((firstTop - pos) * ySpeedFactor) + yOffset;
			    var xPos = Math.round((firstTop - pos) * xSpeedFactor) + xOffset;
				var bgPos = xPos+"px "+yPos+"px";
				$this.css('backgroundPosition', bgPos);
			});
		}		

		$window.bind('scroll', update).resize(update);
		update();
	};
})(jQuery);
