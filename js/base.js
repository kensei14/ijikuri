/**
 * @author Mack
 */

//(function($) {

$(document).ready(function() {

    var SCROLL_TIME = 1000;
    //var pageWidth = $(window).width() || 1000;
    var pageWidth = document.documentElement.clientWidth || window.innerWidth || window.document.documentElement.clientWidth || window.outerWidth;
    console.log(" width =  " + pageWidth);
    
	var pageHeight = 1500;

    init();

    function init()
    {
        setBody();
        setEvents();
        resizeWindow();
    }

    function setBody() {
    	var width_global = Number($('#container_global').css("width").replace("px", ""));
    	
      	var pages = document.getElementsByClassName("container_each");      	
    	var width_each = width_global;
    	var height_each = pageHeight;
    	var pos_x_each = Math.ceil(pageWidth / 2 -  width_each/ 2);    	
    	var pos_y_each;    	
    	
		$(".container_each").css({
			width : width_each +  "px",
			height : height_each + "px",
			left : pos_x_each + "px",
		});
		
    	var width_contents = width_global - 30;
    	var height_contents = pageHeight - 300;
		$(".contents").css({
			width : width_contents - 10 + "px",
			height : height_contents - 150 + "px"
		});

		/* Workの編集 */
		var work_imgs = $(".work_image");
		var work_rslts = $(".work_result");
		for(var i=0; i<work_imgs.length; i++) {
			if(work_imgs[i].width == 0) { work_rslts[i].style.width = 550 + "px"; }
			else { work_rslts[i].style.width = (width_each - work_imgs[i].width - 100) + "px"; }
		}
		
		/* Memberの編集 */
		$("#member_list ul").css({
			width : Math.ceil(width_each / 2 - 50) + "px"
		});

		for(var i=0; i < pages.length; i++) {
			pos_y_each = pageHeight * i;
			pages[i].style.top = pos_y_each + "px";
		}
    }

    function resizeWindow() {
        $(window).resize(function() {
            setBody();
        });
    }

	function setEvents() {
		var nav = document.getElementsByClassName("nav_list");
		//var about = document.getElementsClassName("about");
		var a_elems;
		
		console.log(nav.length);
		for (var i = 0; i < nav.length; i++) {
			a_elems = nav[i].getElementsByTagName("a");
			for (var j = 0; j < a_elems.length; j++) {
				a_elems[j].addEventListener("click", scrollToAnchor, false);
			}			
		}		
	}	
	
    function scrollToAnchor(event) {
    	var pTop = 0;
    	var pLeft = 0;
		
		event.preventDefault();

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
				
		console.log("scroll = " + pTop);
				
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
    
   	var fade1 = false;    
   	var fade2 = false;    
    window.onscroll = function() {
    	var scroll = document.body.scrollTop || document.documentElement.scrollTop;
    	var rate;
    	
    	if ((scroll > 1200) && !fade1) {
	    	console.log("scroll = " + scroll + "  rate :  " + rate);
	    	fade1 = true;
			$("#bg1").fadeTo(1000, 0.0, function() { console.log("ok");}) ;    		
    	}
    	else if ((scroll < 1200) && fade1) {
	    	console.log("scroll = " + scroll + "  rate :  " + rate);
	    	fade1 = false;
			$("#bg1").fadeTo(1000, 1.0, function() { console.log("ok");}) ;    		
    	}
    	
    	if ((scroll > 2700) && !fade2) {
	    	console.log("scroll = " + scroll + "  rate :  " + rate);
	    	fade2 = true;
			$("#bg2").fadeTo(1000, 0.0, function() { console.log("ok");}) ;    		    		
    	}
		else if ((scroll < 2700) && fade2) {
	    	console.log("scroll = " + scroll + "  rate :  " + rate);
	    	fade2 = false;
			$("#bg2").fadeTo(1000, 1.0, function() { console.log("ok");}) ;    		
    	}

    }
});

//})(jQuery);
