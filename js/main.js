$(document).ready(function(){
	
	$('.focuspoint').focusPoint();
	
	//setup variables
	$bcgMaster = $('#bcg-01 img');
	$logoSVG = $('#techcLogo');
	
	//Default SVG offsets
	var svgWidth = $bcgMaster.width(),
		svgHeight = $bcgMaster.height(),
		svgTop = $bcgMaster.css('top'),
		svgLeft = $bcgMaster.css('left');
	
	//resize svg on page load
	resizeSVG(svgWidth, svgHeight, svgTop, svgLeft);
	
	//on windows resize
	$(window).resize(function(){
		//just set time out for svg to resize the browser
		setTimeout(function(){
			//updated svg offsets
			svgWidth = $bcgMaster.width(),
			svgHeight = $bcgMaster.height(),
			svgTop = $bcgMaster.css('top'),
			svgLeft = $bcgMaster.css('left');

			//resize svg on page resize
			resizeSVG(svgWidth, svgHeight, svgTop, svgLeft);
		}, 100);
	});
	
	function resizeSVG(svgWidth, svgHeight, svgTop, svgLeft){
		$logoSVG
			.height(svgHeight)
			.width(svgWidth)
			.css({left: svgLeft, top: svgTop});
	}
    
    function enableSkrollr(){
    console.log('we are on desktop');
 
    // Enable Skroll only for non-touch devices
    if(!Modernizr.touch){
        var s = skrollr.init();
        }
    }
 
    function disableSkrollr(){
        console.log('we are on mobile');

        // Destroy Skrollr
        var s = skrollr.init();
        s.destroy();
    }
 
    enquire.register("screen and (min-width: 768px)", {
        setup : function() {
            disableSkrollr();
        },
        match : function() {
            enableSkrollr();
        }, 
        unmatch : function() {
            disableSkrollr();
        }
    });
    
    skrollr.menu.init(s, {
        //How long the animation should take in ms.
	       duration: function(currentTop, targetTop) {
		//By default, the duration is hardcoded at 500ms.
		  return 2000;

		//But you could calculate a value based on the current scroll position (`currentTop`) and the target scroll position (`targetTop`).
		//return Math.abs(currentTop - targetTop) * 10;
	   }
    });
	
});
