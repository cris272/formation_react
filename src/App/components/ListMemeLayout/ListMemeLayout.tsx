import React from 'react';
import styles from './ListMemeLayout.module.css';
import PropTypes from 'prop-types'

const ListMemeLayout = (props) => (
  <div className={styles.ListMemeLayout} data-testid="ListMemeLayout">
    {props.children}
  </div>
);

ListMemeLayout.propTypes = {
	children:PropTypes.node.isRequired
}

export default ListMemeLayout;

