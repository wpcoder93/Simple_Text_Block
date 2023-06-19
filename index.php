<?php

/*
    Plugin Name: Text To Frontend
    Description: Pratice
    Version: 1.0
    Author: Josh
*/

if ( !defined( 'ABSPATH' ) ) exit;

class AreYouPayingAttention {

    function __construct()
    {
        add_action( 'enqueue_block_editor_assets', array( $this, 'adminAssets'));
    }

    function adminAssets() 
    {
        wp_enqueue_script( 'ournewblocktype', plugin_dir_url( __FILE__) . 'build/index.js', array('wp-blocks', 'wp-element'));
    }
}

$areYouPayinAttention = new AreYouPayingAttention();