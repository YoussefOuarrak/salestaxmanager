<?php

// Tax + Finale Price Update 
function update_finaleprice($post_id){
	$tax = 0;
	$category = get_field('category'); //to Check Category
	$import = get_field('import'); //to Check Import
	$price = get_field('price'); //to Get Product net Price
	switch ($category) {
		case "Book":
			$tax = ($import) ? $price * 5/100 : 0;
			break;
		case "Food":
			$tax = ($import) ? $price * 5/100 : 0;
			break;
		case "Medical Product":
			$tax = ($import) ? $price * 5/100 : 0;
			break;
		case "Others":
			$tax = ($import) ? $price * 15/100 : $price * 10/100;
			break;
	}
	$taxrounded = round($tax / 0.05) * 0.05; // Round up to 0.05
    $total =  $price + $taxrounded;
	$valuetax = number_format($taxrounded, 2);
	$valueprice = number_format($total, 2);
    $field_name = "taxprices";
    $field_name2 = "totalprice";
    update_field($field_name, $valuetax, $post_id);
    update_field($field_name2, $valueprice, $post_id);
}
add_action('save_post', 'update_finaleprice');


/* Custom Post Type for Products */
function kb_custom_post_type() {
	register_post_type('products', array(
		'labels' => array(
		  'name' => 'Products',
		  'singular_name' => 'Products',
		  'add_new' => 'new Product',
		  'all_items' => 'Products',
		  'add_new_item' => 'Product hinzufügen',
		  'edit_item' => 'Product bearbeiten',
		  'new_item' => 'Neues Product',
		  'view_item' => 'Product anzeigen',
		  'search_items' => 'Product durchsuchen',
		  'not_found' => 'Keine Product gefunden',
		  'not_found_in_trash' => 'Kein Product im Papierkorb',
		  'parent_item_colon' => 'Übergeordnete Product',
		  'menu_name' => 'Products',
		),
		'public' => true,
		'exclude_from_search' => false,
		'menu_icon' => 'dashicons-products',
		'hierarchical' => true,
		'publicly_queryable' => true,
		'show_in_rest' => true,
		'supports' => array('title', 'thumbnail','revisions')

	));
}
add_action( 'init', 'kb_custom_post_type', 0 );
  

//Hide Backend Menu for users
function custom_menu_page_removing() {
    if ( wp_get_current_user()->user_login != 'admin' ){
        remove_menu_page( 'edit.php' );
		remove_menu_page('upload.php');
		remove_menu_page('edit-comments.php');
		remove_menu_page('tools.php');
		remove_menu_page('options-general.php');
		remove_menu_page('edit.php?post_type=page');
	}
}
add_action( 'admin_menu', 'custom_menu_page_removing' );


?>
