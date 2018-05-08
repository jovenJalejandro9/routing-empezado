import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

const Home = (props) => {

	const className = cx('holii', {
		'jarl': props.jarl
	})
	return (
		<div className={className}>
			<h1>Homeeee</h1>
		</div>
	)
}

Home.PropTypes = {
	jarl: PropTypes.string
}

export default Home