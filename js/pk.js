// REFRESH PAGE ON REZSIZE
$(window).resize(function(){location.reload();});

// SMOUTH SCROLL PAGE
$(function() {  

    jQuery.scrollSpeed(100,800);

});

(function($) {
    
    jQuery.scrollSpeed = function(step, speed, easing) {
        
        var $document = $(document),
            $window = $(window),
            $body = $('html, body'),
            option = easing || 'default',
            root = 0, 
            scroll = false,
            scrollY,
            scrollX,
            view;
            
        if (window.navigator.msPointerEnabled)
        
            return false;
            
        $window.on('mousewheel DOMMouseScroll', function(e) {
            
            var deltaY = e.originalEvent.wheelDeltaY,
                detail = e.originalEvent.detail;
                scrollY = $document.height() > $window.height();
                scrollX = $document.width() > $window.width();
                scroll = true;
            
            if (scrollY) {
                
                view = $window.height();
                    
                if (deltaY < 0 || detail > 0)
            
                    root = (root + view) >= $document.height() ? root : root += step;
                
                if (deltaY > 0 || detail < 0)
            
                    root = root <= 0 ? 0 : root -= step;
                
                $body.stop().animate({
            
                    scrollTop: root
                
                }, speed, option, function() {
            
                    scroll = false;
                
                });
            }
            
            if (scrollX) {
                
                view = $window.width();
                    
                if (deltaY < 0 || detail > 0)
            
                    root = (root + view) >= $document.width() ? root : root += step;
                
                if (deltaY > 0 || detail < 0)
            
                    root = root <= 0 ? 0 : root -= step;
                
                $body.stop().animate({
            
                    scrollLeft: root
                
                }, speed, option, function() {
            
                    scroll = false;
                
                });
            }
            
            return false;
            
        }).on('scroll', function() {
            
            if (scrollY && !scroll) root = $window.scrollTop();
            if (scrollX && !scroll) root = $window.scrollLeft();
            
        }).on('resize', function() {
            
            if (scrollY && !scroll) view = $window.height();
            if (scrollX && !scroll) view = $window.width();
            
        });       
    };
    
    jQuery.easing.default = function (x,t,b,c,d) {
    
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    };
    
})(jQuery);


//NAVBAR - SWING SCROLL
	$(document).ready(function(){
		$('a[href^="#"]').on('click',function (e) {
			e.preventDefault();

			var target = this.hash;
			var $target = $(target);

			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 600, 'swing', function () {
				window.location.hash = target;
			});
		});
	});

	
// NAVBAR - CHANGE FORM
$(document).ready(function(){
	var changenavigation = $('#section1').offset().top + 100;
	
	$(window).on('scroll',function(){

		stop = Math.round($(window).scrollTop());
		if (stop >= changenavigation) {
			$('.navbar').addClass('navbar-inverse');
		} else {
			$('.navbar').removeClass('navbar-inverse');
	   }

	});	
});

// NAVBAR - CLOSE AFTER CLICK
$(document).ready(function(){
	$('.navbar a').click(function(){
		$('.navbar-collapse').collapse('hide');
	});
});	

// HEADER - CHANGE COLOR BACKGROUND PARALEX & MARGIN TEXT
$(document).ready(function(){
	var header = $('#section1');
	var content = $('.container-s1');
	var background = header.css('background');
	var pattern = /rgba\(\d{1,3},\s?\d{1,3},\s?\d{1,3},\s?(\d{1,3}?(\.?\d{1,}){0,1})\)/i;
	
		
	$(window).on('scroll', function () {
	  
		var scrollTop = $(this).scrollTop();
		var calc = 0 + (scrollTop/900) ;
		
		if ( calc > '1' ) {
		  calc = 1;
		} else if ( calc < '0' ) {
		  calc = 0;
		}
		
		var calc2 = 520 + (scrollTop/2) ;
		
		// change text position
		content.css({ 'margin-top': '' + calc2 + 'px'});

		// change color - good way
		if(window.innerWidth > 767){
			var newColor = 'rgba(255,255,255,' + calc + ')';
			var newBackground = background.replace(pattern, newColor);
			header.css({ 'background': newBackground });
		}
		// change color - quick way
		//header.css({ 'background': 'rgba(255, 255, 255, ' + calc + ') none repeat scroll 0% 0% / auto padding-box border-box' });
	});
});


// 'TIMELINE' - CHANGE ICON
$(document).ready(function(){
	/*job1*/
	$('#job1').on('shown.bs.collapse', function () {
	   $("#jobicon1").removeClass("fontello-zoom-in-2").addClass("fontello-zoom-out-3");
	});
	$('#job1').on('hidden.bs.collapse', function () {
	   $("#jobicon1").removeClass("fontello-zoom-out-3").addClass("fontello-zoom-in-2");
	});
	
	/*job2*/
	$('#job2').on('shown.bs.collapse', function () {
	   $("#jobicon2").removeClass("fontello-zoom-in-2").addClass("fontello-zoom-out-3");
	});
	$('#job2').on('hidden.bs.collapse', function () {
	   $("#jobicon2").removeClass("fontello-zoom-out-3").addClass("fontello-zoom-in-2");
	});
	
	/*job3*/
	$('#job3').on('shown.bs.collapse', function () {
	   $("#jobicon3").removeClass("fontello-zoom-in-2").addClass("fontello-zoom-out-3");
	});

	$('#job3').on('hidden.bs.collapse', function () {
	   $("#jobicon3").removeClass("fontello-zoom-out-3").addClass("fontello-zoom-in-2");
	});
});

/* 'TIMELINE' - close one scroll
$(document).ready(function(){
	var changenavigation = $('#section4').offset().top ;
	
	$(window).on('scroll',function(){

		stop = Math.round($(window).scrollTop());
		if (stop >= changenavigation) {
			$("#job1, #job2, #job3").removeClass("customCollapse collapse in").addClass("customCollapse collapse");
			$("#jobicon1, #jobicon2, #jobicon3").removeClass("fontello-zoom-out-3").addClass("fontello-zoom-in-2");
		}
	});	
});*/

//Animation handler
//--------------------
//1-Cache reference to animation items
//1-Scroll position detection
//2-

//Initiat elements animation - WOW JS - (class="wow fadeInDown")
jQuery(function($){
new WOW().init();
});

//PROGRES BAR - skills
$(function() {
    
    var $meters = $(".skillbar > span");
    var $section = $('#section4');
    var $queue = $({});
    
    function loadDaBars() {
        $meters.each(function() {
            var $el = $(this);
            var origWidth = $el.width();
            $el.width(0);
            $queue.queue(function(next) {
                $el.animate({width: origWidth}, 600, next);
            });
        });
    }
    
    $(document).bind('scroll', function(ev) {
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $section.offset().top - window.innerHeight + 400;
        if (scrollOffset > containerOffset) {
            loadDaBars();
            // unbind event not to load scrolsl again
            $(document).unbind('scroll');
        }
    });
});

//Parallax 2 - change color background
$(document).ready(function(){
	var header = $('.bg-quotation-cover');
	var background = header.css('background');
	var pattern = /rgba\(\d{1,3},\s?\d{1,3},\s?\d{1,3},\s?(\d{1,3}?(\.?\d{1,}){0,1})\)/i;
	
		
	$(window).on('scroll', function () {
	  
		var scrollTop = $(this).scrollTop();
		var position = $('#section6').offset().top ;
		//var calc = 0.45 + ((3000-scrollTop)/1950) ;
		var calc = 0.65 - ((scrollTop - position + 350)/600) ;
		
		if ( calc > '1' ) {
		  calc = 1;
		} else if ( calc < '0' ) {
		  calc = 0;
		}		

		var newColor = 'rgba(0,0,0,' + calc + ')';
		var newBackground = background.replace(pattern, newColor);
		header.css({ 'background': newBackground });
	});
});

// //Change Quote
$(document).ready(function(){
	var quotes = [
		'<div><p>“Design is not just what it looks like and feels like. Design is how it works.”</p><p><small>Steve Jobs</small></p></div>',
		'<div><p>“Creat with the heart, build with the mind.”</p><p><small>Criss Jami</small></p></div>',
		'<div><p>“Always deliver more than expected.”</p><p><small>Larry Page</small></p></div>'
	];
	var counter=0
	$('blockquote').html(quotes).hide()
	function change(){
			$('blockquote').html(quotes[counter]).fadeIn(500).delay(4000).fadeOut(500,function(){
				counter++
				if(counter>=quotes.length){counter=0}
				change()
			})
	}
	change()
})