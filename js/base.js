/**
 * @author Mack
 */

(function($) {

$(document).ready(function() {

    var SCROLL_TIME = 1000;
    var pageWidth = $(window).width();
	var pageHeight = 1500;

    init();

    function init()
    {
        setBody();
        setEvents();
        resizeWindow();
    }

    function setBody() {
    	var width_header = Number($('#container_fixed').css("width").replace("px", ""));
    	var pos_header = Math.ceil(pageWidth / 2 -  width_header/ 2);
		$("#container_fixed").css({
			left : pos_header + "px",
		});
    	
    	var pages = document.getElementsByClassName("container_each");
    	var inner_Height = pageHeight - 300;
    	var inner_Width = width_header;
		var pos_y;

		$(".container_each").css({
			width : pageWidth + "px",
			height : pageHeight + "px"
		});
		$(".container_each_in").css({
			width : inner_Width + "px",
			height : inner_Height + "px"
		});


		for(var i=0; i < pages.length; i++) {
			pos_y = pageHeight * i;
			pages[i].style.top = pos_y + "px";
		}
    }

    function resizeWindow() {
        $(window).resize(function() {
            setBody();
        });
    }

	function setEvents() {
		var nav = document.getElementById("nav_list");
		var about = document.getElementById("about");
		var a_elems = nav.getElementsByTagName("a");
		
		for (i = 0; i < a_elems.length; i++) {
			a_elems[i].addEventListener("click", scrollToAnchor, false);
		}
		
	}	
    function scrollToAnchor() {
    	var pTop = 0;
    	var pLeft = 0;
		
		var anchor  = $(this).attr('href');
		switch(anchor) {
			case '#works':
				pTop = pageHeight * 1;
				break;
			case '#members':
				pTop = pageHeight * 2;
				break;
			case '#contact':
				pTop = pageHeight * 3;
				break;
			default :
				pTop = 0;
				break;
		}
				
		$('html,body').animate({
		    scrollTop: pTop,
		    scrollLeft: pLeft
		}, {
		    duration: SCROLL_TIME,
		    easing: 'easeOutCubic',
		    queue: false
		});
		
		return false;
		
    }
});

})(jQuery);