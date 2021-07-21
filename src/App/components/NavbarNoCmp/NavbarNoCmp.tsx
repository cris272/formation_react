import React from 'react';
import styles from './NavbarNoCmp.module.css';
import {Link} from 'react-router-dom'


const NavbarNoCmp = () => (
	<div className={styles.NavbarNoCmp + ' navbar bg-dark navbar-dark'}>
		<Link className="navbar-brand" to="/">Title</Link>
		<ul className="nav navbar-nav">
			<li className="active">
				<Link to="/thumbnail" style={{color:'white'}}>Thumbnail</Link>
			</li>
			<li>
				<Link to="/editor" style={{color:'white'}}>new</Link>
			</li>
		</ul>
	</div>
);




export default NavbarNoCmp;
