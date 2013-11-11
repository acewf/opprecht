<?php
header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
header("Cache-Control: no-store, no-cache, must-revalidate"); // HTTP/1.1
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache"); // HTTP/1.0
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); // Date in the past

function getContentByTitle($a){
	$page_data = get_page_by_title($a); 
	//echo get_the_post_thumbnail( $page_data->ID, 'full' );
	$objReturn = (object)

	$thumb_id = get_post_thumbnail_id($page_data->ID);
	$objReturn->thumb_url = wp_get_attachment_image_src($thumb_id,'thumbnail-size', true);
	$objReturn->content = apply_filters('the_content', $page_data->post_content); 
	$objReturn->title = $page_data->post_title; 
	$objReturn->custom = get_post_custom( $page_data->ID);

	return $objReturn;
} 
function getContentByID($a){
	$thumb_id = $a;

	$objReturn = (object) 'ciao';
	$thumb_id = get_post_thumbnail_id($thumb_id);
	$objReturn->thumb_url = wp_get_attachment_image_src($thumb_id,'thumbnail-size', true);
	$objReturn->content = apply_filters('the_content', $page_data->post_content); 
	$objReturn->title = $page_data->post_title; 
	$objReturn->custom = get_post_custom( $page_data->ID);
	return $objReturn;
}
?>
<?php	get_header(); ?>

	<?php $objWelcome = getContentByTitle('Wellcomescreen'); ?>
	<div id="home">
		<img src="<?php echo $objWelcome->thumb_url[0]; ?>" class="image"/>
    	<div id="text"><?php echo $objWelcome->content; ?></div>
  </div>
<!-- -->
<div id="painting">
    <div id="pagetitle">THE PAINTING</div>
    <div class="content">
      <div id="viewport2" onselectstart="return false;">
      	<ul id="mouseSwipeScroll">
      		<?php query_posts('posts_per_page=100'); ?>
			<?php if ( have_posts() ) : ?>
				<?php while ( have_posts() ) {
						$thePost = the_post();
					?>
					<?php if ( has_post_thumbnail() && ! post_password_required() ) : ?>
					<?php $datapostyear = get_the_date( 'Y' ); ?>
					<?php $datapostmes = get_the_date( 'm' ); ?>
					<?php $datapostday = get_the_date( 'd' ); ?>
					<?php $valuePost = getContentByID($thePost->ID); ?>
					<li class="panel" data-year="<?php echo $datapostyear; ?>" data-mes="<?php echo $datapostmes; ?>" data-dia="<?php echo $datapostday; ?>"> 
						<div class="img_wraper">
						<div class="imagecontent">
							<img src="<?php echo $valuePost->thumb_url[0]; ?>" class="mouseSwipeScroll-image" />
						</div>
						
			            <div class="overlay">
			            	<img src="<?php echo $valuePost->thumb_url[0]; ?>" width="120" height="120" />
			              	<p><?php the_title(); ?></p>
							<span class="hideinfo"><?php the_content(); ?></span>
			            	<div>
				            	<div class="cost">CHF <?php echo $valuePost->custom['wpcf-price'][0]; ?></div>
				            	<?php 
									if ($valuePost->custom['wpcf-itsavailable'][0]) {
										$valueClass = "sold";
										$valueadd = "SOLD";
									} else {
										$valueClass = "order";
										$valueadd = "ORDER";
									}
									?>
								<div class="<?php echo $valueClass; ?>"><?php echo $valueadd; ?></div>
			             	</div>
			              	<a href="#" class="more-info">MORE</a>
			            </div>
			            <div class="background"></div>
			            </div>
		          	</li>
					<?php endif; ?>
				<?php

				 }; ?>
			<?php endif; ?>
		</ul>
  		</div>
	</div>
</div>

<div id="artist">
<?php $objArtis = getContentByTitle('THE ARTIST'); ?>
<div id="pagetitle">THE ARTIST</div>
	<div class="content">
	  <div id="photos">
	    <div id="slides"  class="slide_area"> 
	    	<img src="<?php echo $objArtis->thumb_url[0]; ?>" class="slide_img" alt="">
	    	<?php
	    	for ($i=0; $i<sizeof($objArtis->custom['wpcf-image-to-gallery']); $i++) {
	    		$item = $objArtis->custom['wpcf-image-to-gallery'][$i];
			    echo '<img src="'.$item .'" alt="" class="slide_img">';
			}
			?>
	    </div>
	     <ul class="imgs_controllers"  value="0">
        </ul>
	  </div>
	  <div id="texts">
	    <div id="txtbox1" class="texts_contents"><?php echo nl2br($objArtis->content); ?></div>
	  	<a href="#home" id="a_totop" class="to-top">
	  		<img src="<?php echo get_template_directory_uri(); ?>/imgs/tree_small_orange.png" alt="">
	  	</a>
	  </div>
	</div>
</div>
<div id="cause">
	<?php $objCause = getContentByTitle('THE CAUSE'); ?>
<div id="pagetitle">THE CAUSE</div>
	<div class="content">
	  <div id="photos">
	    <div id="slides"  class="slide_area"> 
	    	<img src="<?php echo $objCause->thumb_url[0]; ?>" alt="" class="slide_img">
	    	<?php
	    	for ($i=0; $i<sizeof($objCause->custom['wpcf-image-to-gallery']); $i++) {
	    		$item = $objCause->custom['wpcf-image-to-gallery'][$i];
			    echo '<img src="'.$item .'" alt="" class="slide_img">';
			}
			?>
	    </div>
	    <ul class="imgs_controllers" value="0">
        </ul>
	  </div>
	  <div id="texts">
	    <div id="txtbox1" class="texts_contents"><?php echo nl2br($objCause->content); ?></div>
	  	<a href="#home" id="a_totop" class="to-top"><img src="<?php echo get_template_directory_uri(); ?>/imgs/tree_small_brown.png" alt=""></a>
	  </div>
	</div>
</div>
<div id="exibition">
	<?php $objExibition = getContentByTitle('THE EXHIBITION'); ?>
<div id="pagetitle">THE EXIBITION</div>
	<div class="content">
	  <div id="photos">
	    <div id="slides"  class="slide_area"> 
	    	<img src="<?php echo $objExibition->thumb_url[0]; ?>" alt="" class="slide_img">
	    	<?php
	    	for ($i=0; $i<sizeof($objExibition->custom['wpcf-image-to-gallery']); $i++) {
	    		$item = $objExibition->custom['wpcf-image-to-gallery'][$i];
			    echo '<img src="'.$item .'" alt="" class="slide_img">';
			}
			?>
	    </div>
	    <ul class="imgs_controllers"  value="0">
        </ul>
	  </div>
	  <div id="texts">
	    <div id="txtbox1" class="texts_contents"><?php echo nl2br($objExibition->content); ?></div>
	  	<a href="#home" id="a_totop" class="to-top"><img src="<?php echo get_template_directory_uri(); ?>/imgs/tree_small_orange.png" alt=""></a>
	  </div>
	</div>
</div>

<div id="contact">
	<div id="pagetitle">CONTACT</div>
	<div class="content">
	  <form id="form-contact" class="formular" method="post" action="formsubmit.php">
	    <input type="text" id="form_name" name="form_name" class="text-input required default" onfocus="if(this.value == 'NAME') { this.value = ''; }" onblur="if(this.value == '') { this.value = 'NAME'; }" value="NAME" />
	    <input type="text" id="formvor_name" name="formvor_name" class="text-input required default" onfocus="if(this.value == 'VORNAME') { this.value = ''; }" onblur="if(this.value == '') { this.value = 'VORNAME'; }" value="VORNAME" />
	    <input type="text" id="form_email" name="form_email" class="text-input required email default" onfocus="if(this.value == 'EMAIL') { this.value = ''; }" onblur="if(this.value == '') { this.value = 'EMAIL'; }" value="EMAIL" />
	    <textarea id="form_nachricht" name="form_nachricht" class="text-input" onFocus="if(this.value == 'NACHRICHT') { this.value = ''; }" onBlur="if(this.value == '') { this.value = 'NACHRICHT'; }">NACHRICHT</textarea>
	    <input class="btn-submit" type="submit" name="submit" id="submit" value="SEND" />
	  </form>
	</div>
	</div>
	</div>
</div>

<?php get_sidebar(); ?>
<?php get_footer(); ?>