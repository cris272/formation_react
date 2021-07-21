import React from 'react';
import styles from './MainLayout.module.css';
import PropTypes from 'prop-types'


const MainLayout = (props) => {
	console.log(styles)
	return (
	
  <div className={styles.MainLayout} data-testid="MainLayout" style={{display:'flex'}}>
    {props.children}
  </div>
)};

MainLayout.propTypes = {
	children:PropTypes.node.isRequired
}

export default MainLayout;


