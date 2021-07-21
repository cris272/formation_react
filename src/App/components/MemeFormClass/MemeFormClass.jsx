import React, { Component } from 'react';
import style from './MemeFormClass.module.css'
import PropTypes from 'prop-types';


class MemeFormClass extends Component {
	constructor(props){
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className={style.MemeFormClass} data-testid="MemeFormClass">
				MemeFormClass
			</div>
		);
	}
}


MemeFormClass.propTypes = {
	style:PropTypes.object
};


export default MemeFormClass;




