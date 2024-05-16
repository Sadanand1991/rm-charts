<?php
/**
 * Chart widget.
 *
 * @package RM_CHARTS
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * RM_Charts_Widget
 *
 * @since 1.0.0
 */
class RM_Charts_Widget {

	/**
	 * Instance
	 *
	 * @access private
	 * @var object Class Instance.
	 * @since 1.0.0
	 */
	private static $instance;

	/**
	 * Initiator
	 *
	 * @since 1.0.0
	 * @return object initialized object of class.
	 */
	public static function get_instance() {
		if ( ! isset( self::$instance ) ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Constructor
	 *
	 * @since 1.0.0
	 */
	public function __construct() {
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
		add_action( 'wp_dashboard_setup', array( $this, 'register_widget' ) );
	}

	/**
	 * Load assets.
	 *
	 * @param string $hook hook.
	 * @since 1.0.0
	 */
	public function enqueue_scripts( $hook = '' ) {
		if ( 'index.php' !== $hook ) {
			return;
		}
		$assets_file_path = RM_CHARTS_DIR . '/inc/assets/build/main.asset.php';

		if ( ! file_exists( $assets_file_path ) ) {
			return;
		}

		$assets = require_once RM_CHARTS_DIR . '/inc/assets/build/main.asset.php';

		if ( ! isset( $assets ) ) {
			return;
		}

		wp_enqueue_script(
			'rm-charts',
			RM_CHARTS_URL . 'inc/assets/build/main.js',
			array_merge(
				$assets['dependencies'],
				array(
					'react',
					'react-dom',
					'updates',
				)
			),
			$assets['version'],
			true
		);
		wp_enqueue_style( 'rm-charts', RM_CHARTS_URL . 'inc/assets/build/style-main.css', array(), $assets['version'] );

		// Required variables for JS.
		wp_localize_script(
			'rm-charts',
			'wpApiSettings',
			array(
				'root'  => esc_url_raw( get_rest_url() ),
				'nonce' => ( wp_installing() && ! is_multisite() ) ? '' : wp_create_nonce( 'wp_rest' ),
			)
		);
	}

	/**
	 * Register Widget.
	 *
	 * @since 1.0.0
	 */
	public function register_widget() {
		wp_add_dashboard_widget( 'rm_charts_widget', 'RM Charts Widget', array( $this, 'render_widget' ) );
	}

	/**
	 * Render Widget.
	 *
	 * @since 1.0.0
	 */
	public function render_widget() {
		echo '<div id="rm-charts-widget-container"></div>';
	}
}

/**
 * Kicking this off by calling 'get_instance()' method
 */
RM_Charts_Widget::get_instance();
