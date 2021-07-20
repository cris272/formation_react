import React from 'react';
import style from './TemplateName.module.css'
import PropTypes from 'prop-types';


const TemplateName = (props) => {
	return (
		<div className={style.TemplateName} style={props.style} data-testid="TemplateName">
			TemplateName
		</div>
	);
};


TemplateName.propTypes = {
	style:PropTypes.object
};


export default TemplateName;
