import React, { useState, useEffect } from 'react';
import apiFetch from '@wordpress/api-fetch';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';
const apiNonce = wpApiSettings.nonce;

const Charts = () => {
	const [ data, setData ] = useState( [] );
	const [ filter, setFilter ] = useState( '7days' );

	useEffect( () => {
		const fetchData = async () => {
			try {
				const response = await apiFetch( {
					path: `/rm-charts-widget/v1/data?filter=${ filter }`,
					method: 'GET',
					headers: {
						'content-type': 'application/json',
						'X-WP-Nonce': apiNonce,
					},
				} );
				setData( response || [] );
			} catch ( error ) {
				throw new Error( error );
			}
		};
		fetchData();
	}, [ filter ] );

	const handleChange = ( event ) => {
		setFilter( event.target.value );
	};

	return (
		<div className="rm-charts-widget">
			<div className="rm-charts-widget-heading">
				<select value={ filter } onChange={ handleChange }>
					<option value="7days">Last 7 Days</option>
					<option value="15days">Last 15 Days</option>
					<option value="1month">Last 1 Month</option>
				</select>
			</div>
			<ResponsiveContainer width="100%" height={ 300 }>
				<LineChart data={ data }>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="date" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line type="monotone" dataKey="value" stroke="#8884d8" />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Charts;
