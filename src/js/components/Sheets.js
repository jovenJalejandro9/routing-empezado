import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

const Sheets = (props) => {
	const className = cx('holii', {
		'jarl': props.jarl
	})
	return (
		<div className={className}>
			<h1>Fichas</h1>
		</div>
	)
}

Sheets.PropTypes = {
	jarl: PropTypes.string
}

export default Sheets