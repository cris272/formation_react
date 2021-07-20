import React, { Component } from 'react';
import style from './TemplateName.module.css'
import PropTypes from 'prop-types';


class TemplateName extends Component {
	constructor(props){
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className={style.TemplateName} data-testid="TemplateName">
				TemplateName
			</div>
		);
	}
}


TemplateName.propTypes = {
	style:PropTypes.object
};


export default TemplateName;




