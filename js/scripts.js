
$(document).ready(function() {

/* menu slide */	
      $("#menu_show_hide").mouseover(function(){
         $(".target").show("slide",{direction:"left"},200);
      });
      $("#menu_show_hide").click(function(){
		  $(".target").hide("slide",{direction:"left"},200);
      });
	  
	
      $("#target").mouseout(function(){
         $(".target").show("slide",{direction:"left"},200);
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
  
 
 /* scroll boxes */ 

     
	$("html").niceScroll({styler:"fb",cursorcolor:"#000"});
	$("#texts_contents1").niceScroll();



  
});
