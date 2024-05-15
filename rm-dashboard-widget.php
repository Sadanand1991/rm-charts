<?php
/**
 * Plugin Name: RM Charts Widget
 * Description: Rank Math Charts widget
 * Author: Sadanand Lonari
 * Version: 1.0
 * License: GPL v2
 * Text Domain: rm-charts
 *
 * @package {{package}}
 */

if ( defined( 'RM_CHARTS_DIR' ) ) {
	return;
}

/**
 * Set constants
 */
define( 'RM_CHARTS_FILE', __FILE__ );
define( 'RM_CHARTS_BASE', plugin_basename( RM_CHARTS_FILE ) );
define( 'RM_CHARTS_DIR', plugin_dir_path( RM_CHARTS_FILE ) );
define( 'RM_CHARTS_URL', plugins_url( '/', RM_CHARTS_FILE ) );
define( 'RM_CHARTS_VER', '1.0' );

require_once 'inc/classes/class-rm-charts-widget.php';
require_once 'inc/api/class-rm-charts-widget-endpoints.php';
