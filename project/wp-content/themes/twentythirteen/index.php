<?php
header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
header("Cache-Control: no-store, no-cache, must-revalidate"); // HTTP/1.1
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache"); // HTTP/1.0
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); // Date in the past
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme and one of the
 * two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * For example, it puts together the home page when no home.php file exists.
 *
 * @link http://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Thirteen
 * @since Twenty Thirteen 1.0
 */
?>
<?php	get_header(); ?>

	<?php 
		$page_data = get_page_by_title('Wellcomescreen'); 
		//echo get_the_post_thumbnail( $page_data->ID, 'full' );
		$thumb_id = get_post_thumbnail_id($page_data->ID);
		$thumb_url = wp_get_attachment_image_src($thumb_id,'thumbnail-size', true);
		$content = apply_filters('the_content', $page_data->post_content); 
		$title = $page_data->post_title; 
	?>
	<div id="home">
		<img src="<?php echo $thumb_url[0]; ?>" class="image"/>
    	<div id="text"><?php echo $content; ?></div>
  </div>

<?php if ( have_posts() ) : ?>
	<?php /* The loop */ ?>
	<?php if ( has_post_thumbnail() && ! post_password_required() ) : ?>
		<div class="entry-thumbnail">
			<?php the_post_thumbnail('full');  ?>
		</div>
	<?php endif; ?>
	<?php /*twentythirteen_paging_nav();*/ ?>

<?php else : ?>
	<?php get_template_part( 'content', 'none' ); ?>
<?php endif; ?>
<div>END POST</div>

<?php get_sidebar(); ?>
<?php get_footer(); ?>