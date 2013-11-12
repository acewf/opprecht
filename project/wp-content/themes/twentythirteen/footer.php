		</div><!-- #main -->
		<div id="footer">
		  <p>© Jürg Opprecht - Made by FEW</p>
		</div>

<div id="div_overlay">
	<div id="overlay_wrapper">
		<div id="overlay_close"></div>
        
        <div id="overlay_order" >
            <div id="order_img"><img  width="420" height="423" /></div>
            <div id="order_text">
                <div id="txtbox4" class="texts_contents"> MIT 13 JAHREN BEGANN ICH ZU MALEN UND HATTE MIT 16 JAHREN</div>
                <div id="overlay_order_bt">ORDER</div>
            </div>
        </div>
        
        <div id="overlay_form">
        	<form id="form-contact2" class="formular" method="post" action="formsubmit.php">
                <input type="text" id="form_name" name="form_name" class="text-input required default" onfocus="if(this.value == 'NAME') { this.value = ''; }" onblur="if(this.value == '') { this.value = 'NAME'; }" value="NAME" />
                <input type="text" id="formvor_name" name="formvor_name" class="text-input required default" onfocus="if(this.value == 'VORNAME') { this.value = ''; }" onblur="if(this.value == '') { this.value = 'VORNAME'; }" value="VORNAME" />
                <input type="text" id="form_email" name="form_email" class="text-input required email default" onfocus="if(this.value == 'EMAIL') { this.value = ''; }" onblur="if(this.value == '') { this.value = 'EMAIL'; }" value="EMAIL" />
                <textarea id="form_nachricht" name="form_nachricht" class="text-input" onFocus="if(this.value == 'NACHRICHT') { this.value = ''; }" onBlur="if(this.value == '') { this.value = 'NACHRICHT'; }">NACHRICHT</textarea>
                <input class="btn-submit" type="submit" name="submit" id="submit" value="SEND" />
              </form>
        </div>
	</div>
	<div class="overlay_bg"></div>
	
</div>
<!--
<script type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/jquery.mouseSwipe.js"></script> 
-->
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/jquery-1.9.1.min.js"></script> 
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/jquery-ui.js"></script> 
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/jquery.slides.min.js"></script> 
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/jquery.easing.1.3.js"></script> 
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/jquery.mousewheel.js"></script> 
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/scrollbar.js"></script> 
<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/scripts.js"></script>

</body>
</html>