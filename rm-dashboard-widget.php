<?php
/**
 * RM Charts Widget Plugin.
 *
 * @package      RM_CHARTS
 * @copyright    Copyright (C) 2024, RM Charts - support@rmcharts.com
 * @link         https://rmcharts.com
 * @since        1.0
 *
 * @wordpress-plugin
 * Plugin Name:       RM Charts Widget
 * Version:           1.0
 * Plugin URI:        https://rmcharts.com/
 * Description:       RM Charts Widget is a WordPress plugin that adds a custom dashboard widget with a Recharts graph.
 * Author:            Sadanand Lonari
 * Author URI:        https://github.com/Sadanand1991/rm-charts
 * License:           GPL-3.0+
 * License URI:       https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain:       rm-charts
 * Domain Path:       /languages
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
