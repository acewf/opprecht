var engine = new Object();
var itemsReferenc = {};
itemsReferenc.home = "#home";
itemsReferenc.thepainting = "#painting";
itemsReferenc.theartist = "#artist";
itemsReferenc.thecause = "#cause";
itemsReferenc.theexhibition = "#exibition";
itemsReferenc.contact = "#contact";
var itemsZindex = 2;

window.onscroll = function (event) {
	if (window.pageYOffset<800) {
		var value = Math.round(window.pageYOffset/2.5);
		var imgvalue = window.innerHeight -Math.round(window.pageYOffset/1.5);
		/*
		var percent = window.pageYOffset/600;
		var alpha = 1-percent;
		*/
		$("#text").css({"margin-top":value});
		$(".imageresize").css({"height":imgvalue});
		$(".imageresize").css({"margin-top":value});
	};
}
engine.isDragging = false;
engine.startMovePoint = 0;
engine.ExtractNumber = function(value)
{
    var n = parseInt(value);
	
    return n == null || isNaN(n) ? 0 : n;
}
engine.addListeners = function(){
	var div = document.getElementById('drag_over');
	div.style.cursor = 'move';

	var dragpaints = document.getElementById('dragmove');
    div.addEventListener('mousedown', engine.mouseDown, false);
    dragpaints.addEventListener('mousedown', engine.mouseDown, false);
    window.addEventListener('mouseup', engine.mouseUp, false);
}

engine.mouseUp = function()
{
	engine.isDragging  = false;
    window.removeEventListener('mousemove', engine.divMove, true);
    window.removeEventListener('mousemove', engine.divMovePaints, true);
    document.body.style.cursor = 'default';
}
engine.mouseDown = function(e){
	var div = document.getElementById('drag_over');
	console.log(e.target)
	if (e.target==div) {
		window.addEventListener('mousemove', engine.divMove, true);
	} else {
		window.addEventListener('mousemove', engine.divMovePaints, true);	
	}
  
  var target = e.target 
  engine.startMovePoint = engine.ExtractNumber(target.style.left);
  engine.startX = e.clientX;
  document.body.focus();
}
engine.divMove = function(e){	
	engine.isDragging = true;
	var div = document.getElementById('drag_over');
	var drag_under = document.getElementById('drag_under');
	div.style.position = 'absolute';
	div.style.cursor = 'move';
	drag_under.style.position = 'absolute';
	var x = engine.startMovePoint + e.clientX - engine.startX;
	if (x<0) {
		x = 0;
	};
	var valorLarg = $('#drag_over').width();
	if (x>window.outerWidth-valorLarg) {
		x = window.outerWidth-valorLarg;
	};
	var percentPath = x/(window.outerWidth-valorLarg);
	var valueGox = ($('#dragmove').width()-window.outerWidth)*percentPath;
	$('#dragmove').offset({left:-valueGox});
	div.style.left = x + 'px';
	drag_under.style.left = x+ 'px';
}
engine.divMovePaints = function(e){	
	var div = document.getElementById('dragmove');
	div.style.position = 'absolute';
	div.style.cursor = 'move';
	var x = engine.startMovePoint + e.clientX - engine.startX;
	var valorLarg = $('#dragmove').width();
	var percentPath = x/(window.outerWidth-valorLarg);

	console.log(percentPath)
	/*
	var valueGox = ($('#drag_over').width()-window.outerWidth)*percentPath;
	$('#drag_over').offset({left:-valueGox})
	*/
	div.style.left = x + 'px';
}

engine.hashchange =  function (e,hashvalue) {
		if (e!=null) {e.preventDefault();};
	    var target = hashvalue,
	    $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        //window.location.hash = target;
	    });
}
$(document).ready(function() {
	engine.addListeners();
	var elem = document;
    if (elem.addEventListener) {    // all browsers except IE before version 9
            // Internet Explorer, Opera, Google Chrome and Safari
        elem.addEventListener ("mousewheel", window.onscroll, false);
            // Firefox
        elem.addEventListener ("DOMMouseScroll", window.onscroll, false);
    }
    else {
        if (elem.attachEvent) { // IE before version 9
            elem.attachEvent ("onmousewheel", window.onscroll);
        }
    }

    $( "body" ).mousemove(function( event ) {
	  if(event.screenY<200){
	  		 $(".target").show("slide",{direction:"left"},100);
	  } else {
	  	 $(".target").hide("slide",{direction:"left"},100);
	  }
	});




	$('a[href^="#"]').on('click',function (e) {
		var lowerString = this.hash.toLowerCase();
	    engine.hashchange(e,itemsReferenc[lowerString.substring(1,lowerString.length)]);
	});

	/* menu slide */
    $('.texts_contents').each(function() {
    	var parent = $(this).parent();
    	console.log($(this).height(),parent.height())
    	if($(this).height()>parent.height()+10){
			//$(this).perfectScrollbar();
    	}
    });

    /*
    $('.slidedragger_over').bind("dragstart", function() { 
    	console.log('++++')
    	return false; 
    });
	*/
	$('.mouseSwipeScroll-image').each(function() {
   		var ratio = this.width/this.height;
   		if (ratio>1) {
   			$(this).removeClass("mouseSwipeScroll-image");
   			$(this).addClass("mouseSwipeScroll-image_ratio");
   		};
    // ...
	});
	$('.slide_img').each(function() {
   		var ratio = this.width/this.height;
   		if ((ratio>1))  {
   			$(this).css({height:'100%',width:'auto'});
   		};
    // ...
	});
	$('.slide_area').each(function() {
	   	var allimages = $(this).find('.slide_img');
	   	if(allimages.length>1){
	   		var newHTML = '<li id="prev" class="imgs_control" value="-1"><span><<span></li>';
		   	for(var i=0;i<allimages.length;i++){
		   		if(i==0){
		   			newHTML += '<li class="imgs_control imgs_control_active" value="'+i+'"></li>';
		   		} else {
		   			newHTML += '<li class="imgs_control" value="'+i+'"></li>';
		   		}
		   		
		   	}
		   	newHTML +=  '<li id="next" class="imgs_control" value="1"><span>><span></li>';
	   		var imgs_controllers = $(this).parent();
	   		var imgs_controllersClass = imgs_controllers.find('.imgs_controllers');
	   		imgs_controllersClass.html(newHTML);
	   	}
   	});
   	$('.imgs_control').click(function(event) {
   		var imgs_controllers = $(this).parent();
   		var total = imgs_controllers.find('li');
   		var activeElement = imgs_controllers.find('.imgs_control_active');
   		var active = activeElement[0];
   		var nrgo = 0;
   		activeElement.removeClass("imgs_control_active");
   		if ((this.id=="next") || (this.id=="prev")) {
   			nrgo = active.value+this.value;
   			if (nrgo<0) {
   				nrgo = 0;
   			};
   			if (nrgo>total-1) {
   				nrgo = total;
   			};
   			var next
   			if (this.id=="next") {
				next = activeElement.next();
   			} else {
				next = activeElement.prev();
   			}
   			
   			next.addClass("imgs_control_active");
   		} else {
			nrgo = this.value;
			$(this).addClass("imgs_control_active");
   		}
   		
   		var result = $(this).parent().parent().find('.slide_img');
   		var item = result[nrgo];
   		$(item).fadeOut(0);
   		$(item).fadeIn( "slow");
   		$(item).css({"z-index":itemsZindex,"position": 'absolute'});
   		itemsZindex++;

   	});

   	$('.panel').click(function(event) {
   		if (!engine.isDragging) {
	   		var div = $(this).find('.hideinfo');
	   		var newContent = $("#overlay_order").find('.texts_contents');
	   		newContent.html(div.html());//.getAttribute( 'data-content' );
			var divImg = $(this).find('.imagecontent');
	   		var newDivImg = $("#overlay_order").find('#order_img');
	   		newDivImg.html("<div class='img_wraper' style='width: 420px;height: 420px;'>"+divImg.html()+"<div>");//.getAttribute( 'data-content' );
	   		$('#div_overlay').css({display: 'block'});
	   		$('#overlay_order').css({display: 'block'});
   		};
   		
   });
	$('#overlay_order_bt').click(function(event) {
		$('#overlay_order').css({display: 'none'});
		$('#overlay_form').css({display: 'block'});
	});
	$('#overlay_close').click(function(event) {
    	$('#div_overlay').css({display: 'none'});
   		$('#overlay_order').css({display: 'none'});
   		$('#overlay_form').css({display: 'none'});
    });
    $('.panel').mouseover(function () {
		var div = $(this).find('.overlay');
		var background = $(this).find('.background');
		background.show();
		div.show();
	}).mouseout(function () {
	  	var div = $(this).find('.overlay');
	  	var background = $(this).find('.background');
	  	background.hide();
	  	div.hide();
	});
	$('.to-top').mouseover(function () {
	  	$(this).css({"-webkit-transform": "scale(1.3)"});
	}).mouseout(function () {
	  	$(this).css({"-webkit-transform": "scale(1)"});
	});
  
  
  
/* form validations and submits
http://www.designchemical.com/blog/index.php/jquery/create-your-own-jquery-ajax-form-submit-with-validation/
 */
	var $loading = $('<div class="loading"><img alt="" /></div>');
	$(".default").each(function(){
		var defaultVal = $(this).attr('title');
		$(this).focus(function(){
			if ($(this).val() == defaultVal){
				$(this).removeClass('active').val('');
			}
		});
		$(this).blur(function() {
			if ($(this).val() == ''){
				$(this).addClass('active').val(defaultVal);
			}
		})
		.blur().addClass('active');
	});
	$('.btn-submit').click(function(e){
		var $formId = $(this).parents('form');
		var formAction = $formId.attr('action');
		defaulttextRemove();
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		$('li',$formId).removeClass('error');
		$('span.error').remove();
		$('.required',$formId).each(function(){
			var inputVal = $(this).val();
			var $parentTag = $(this).parent();
			if(inputVal == ''){
				$parentTag.addClass('error').append('<span class="error">Required field</span>');
			}
			if($(this).hasClass('email') == true){
				if(!emailReg.test(inputVal)){
					$parentTag.addClass('error').append('<span class="error">Enter a valid email address.</span>');
				}
			}
		});
		if ($('span.error').length == "0") {
			$formId.append($loading.clone());
			$('fieldset',$formId).hide();
			$.post(formAction, $formId.serialize(),function(data){
				$('.loading').remove();
				$formId.append(data).fadeIn();
			});
		}
		e.preventDefault();
	});
});