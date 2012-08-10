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


		
    	/*************************/
    	/*
    	var width_header = Number($('#container_fixed').css("width").replace("px", ""));
    	var pos_header = Math.ceil(pageWidth / 2 -  width_header/ 2);
    	    	
    	var pages = document.getElementsByClassName("container_each");
    	var inner_Height = pageHeight - 300;
    	var inner_Width = width_header;
		var pos_y;
		
		$("#container_fixed").css({
			left : pos_header + "px",
		});
		$(".container_each").css({
			width : pageWidth * 0.7 +  "px",
			height : pageHeight + "px",
			left : pos_header + "px",
		});
		$(".container_each_in").css({
			width : inner_Width + "px",
			height : inner_Height + "px"
		});
		$(".contents").css({
			width : inner_Width - 40 + "px",
			height : inner_Height  - 100 + "px"
		});
		var contents = document.getElementsByClassName("contents");
		for(var i=0; i<contents.length; i++) {
			//alert(contents[i].childNodes[0]);
			//console.log(contents[i].childNodes[0]);
		}
		
		var work_imgs = $(".work_image");
		var work_rslts = $(".work_result");
		for(var i=0; i<work_imgs.length; i++) {
			if(work_imgs[i].width == 0) { work_rslts[i].style.width = 550 + "px"; }
			else { work_rslts[i].style.width = (inner_Width - work_imgs[i].width - 100) + "px"; }
		}
		
		$("#member_list ul").css({
			width : Math.ceil(inner_Width / 2 - 50) + "px"
		});

		for(var i=0; i < pages.length; i++) {
			pos_y = pageHeight * i;
			pages[i].style.top = pos_y + "px";
		}
				*/
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
});

//})(jQuery);
