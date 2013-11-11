var engine = new Object();
var itemsReferenc = {};
itemsReferenc.home = "#home";
itemsReferenc.thepainting = "#painting";
itemsReferenc.theartist = "#artist";
itemsReferenc.thecause = "#cause";
itemsReferenc.theexhibition = "#exibition";
itemsReferenc.contact = "#contact";
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
	$('a[href^="#"]').on('click',function (e) {
		var lowerString = this.hash.toLowerCase();
		console.log(lowerString.substring(1,lowerString.length));
		console.log("supost dispatch",itemsReferenc[lowerString.substring(1,lowerString.length)]);
	    engine.hashchange(e,itemsReferenc[lowerString.substring(1,lowerString.length)]);
	});

/* menu slide */	
      $("#menu").mouseover(function(){
         $(".target").show("slide",{direction:"left"},100);
      });
      $(".linkit").click(function(){
		  $(".target").hide("slide",{direction:"left"},100);
      });
	  
	
      $("#menu").mouseleave(function(){
         $(".target").hide("slide",{direction:"left"},100);
      });

	  
	  
/* menu scrollto */ 
 
 /* slideshows */ 

     


/* texts scrollbars */
  
  $('#txtbox1').perfectScrollbar();
  $('#txtbox2').perfectScrollbar();
  $('#txtbox3').perfectScrollbar();
  $('#txtbox4').perfectScrollbar();

/* previews thumbnails */
$(document).bind("dragstart", function() { return false; });
  
  $('#mouseSwipeScroll').swipe({
    TYPE:'mouseSwipe',
    SNAPDISTANCE:340,
    HORIZ: true
  });
  

   $('.mouseSwipeScroll-image').each(function() {
   		var ratio = this.width/this.height;
   		if (ratio>1) {
   			$(this).removeClass("mouseSwipeScroll-image");
   			$(this).addClass("mouseSwipeScroll-image_ratio");
   		};
    // ...
	});
   	$('.panel').click(function(event) {
   		var div = $(this).find('.hideinfo');
   		var newContent = $("#overlay_order").find('.texts_contents');
   		newContent.html(div.html());//.getAttribute( 'data-content' );


		var divImg = $(this).find('.imagecontent');
   		var newDivImg = $("#overlay_order").find('#order_img');
   		newDivImg.html("<div class='img_wraper' style='width: 420px;height: 420px;'>"+divImg.html()+"<div>");//.getAttribute( 'data-content' );
   		$('#div_overlay').css({display: 'block'});
   		$('#overlay_order').css({display: 'block'});
   		
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
  /*thumbnails overlay */
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
	var $loading = $('<div class="loading"><img src="loading.gif" alt="" /></div>');
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

