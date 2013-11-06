
$(document).ready(function() {

/* menu slide */	
      $("#menu_show_hide").mouseover(function(){
         $(".target").show("slide",{direction:"left"},200);
      });
      $("#menu_show_hide").click(function(){
		  $(".target").hide("slide",{direction:"left"},200);
      });
	  
	
      $(".target").mouseleave(function(){
         $(".target").hide("slide",{direction:"left"},200);
      });
	  
	  
/* menu scrollto */ 
	  $("#a_artist").click(function() {
		  $('html, body').animate({scrollTop: $("#artist").offset().top}, 900);
		  $(".target").hide("slide",{direction:"left"},200);
	  });
	  
	  $("#a_painting").click(function() {
		  $('html, body').animate({scrollTop: $("#painting").offset().top}, 900);
		  $(".target").hide("slide",{direction:"left"},200);
	  });
	  
	  $("#a_cause").click(function() {
		  $('html, body').animate({scrollTop: $("#cause").offset().top}, 900);
		  $(".target").hide("slide",{direction:"left"},200);
	  });
	  
	  $("#a_exibition").click(function() {
		  $('html, body').animate({scrollTop: $("#exibition").offset().top}, 900);
		  $(".target").hide("slide",{direction:"left"},200);
	  });
	  
	  $("#a_contact").click(function() {
		  $('html, body').animate({scrollTop: $("#contact").offset().top}, 900);
		  $(".target").hide("slide",{direction:"left"},200);
	  });
	  
	  $("#a_totop").click(function() {
		  $('html, body').animate({scrollTop: $("#home").offset().top}, 900);
	  });
  
 
 /* slideshows */ 

     
	$(function() {
      $('#slides').slidesjs({
        width: 800,
        height: 805,
        navigation: false
      });
      $('#slides2').slidesjs({
        width: 800,
        height: 805,
        navigation: false
      });
      $('#slides3').slidesjs({
        width: 800,
        height: 805,
        navigation: false
      });
    });


/* texts scrollbars */
  
  $('#txtbox1').perfectScrollbar();
  $('#txtbox2').perfectScrollbar();
  $('#txtbox3').perfectScrollbar();

/* previews thumbnails */
$(document).bind("dragstart", function() { return false; });
  
  $('#mouseSwipeScroll').swipe({
    TYPE:'mouseSwipe',
    HORIZ: true
  });
  
  /*thumbnails overlay */
  $('.panel').mouseover(function () {
	  $('#o'+this.id).show();
  }).mouseout(function () {
	  $('#o'+this.id).hide();
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

