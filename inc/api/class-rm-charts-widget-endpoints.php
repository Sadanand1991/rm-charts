<?php
/**
 * Chart widget endpoints.
 *
 * @package {{package}}
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * RM_Charts_Widget_Endpoints
 *
 * @since 1.0.0
 */
class RM_Charts_Widget_Endpoints {

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
		add_action( 'rest_api_init', array( $this, 'register_routes' ) );
	}

	/**
	 * Register Route
	 *
	 * @since 1.0.0
	 */
	public function register_routes() {
		register_rest_route(
			'rm-charts-widget/v1',
			'/data',
			array(
				'methods'             => \WP_REST_Server::READABLE,
				'callback'            => array( $this, 'get_data' ),
				'permission_callback' => array( $this, 'get_item_permissions_check' ),
			)
		);
	}

	/**
	 * Check whether a given request has permission to read notes.
	 *
	 * @param  object $request WP_REST_Request Full details about the request.
	 * @return object|boolean
	 */
	public function get_item_permissions_check( $request ) {

		if ( ! current_user_can( 'manage_options' ) ) {
			return new \WP_Error(
				'rt_chart_rest_cannot_access',
				__( 'Sorry, you are not allowed to do that.', 'rt-charts' ),
				array( 'status' => rest_authorization_required_code() )
			);
		}
		return true;
	}

	/**
	 * Fetch data
	 *
	 * @param mixed $request request data.
	 * @since 1.0.0
	 */
	public function get_data( $request ) {
		$filter = $request->get_param( 'filter' );
		$data   = array();

		// Define start and end dates based on the filter.
		$end_date = gmdate( 'Y-m-d' );
		switch ( $filter ) {
			case '7days':
				$start_date = gmdate( 'Y-m-d', strtotime( '-7 days' ) );
				break;
			case '15days':
				$start_date = gmdate( 'Y-m-d', strtotime( '-15 days' ) );
				break;
			case '1month':
				$start_date = gmdate( 'Y-m-d', strtotime( '-1 month' ) );
				break;
			default:
				$start_date = gmdate( 'Y-m-d', strtotime( '-7 days' ) );
		}

		// Generate sample data within the date range.
		$current_date = $start_date;
		while ( $current_date <= $end_date ) {
			$value        = wp_rand( 100, 500 ); // Generate random value.
			$data[]       = array(
				'date'  => $current_date,
				'value' => $value,
			);
			$current_date = gmdate( 'Y-m-d', strtotime( $current_date . ' +1 day' ) );
		}

		return rest_ensure_response( $data );
	}
}

/**
 * Kicking this off by calling 'get_instance()' method
 */
RM_Charts_Widget_Endpoints::get_instance();
