import style from './Button.module.css';
import PropTypes from 'prop-types';
import {useState} from 'react';
export const uneVar = 'Hello';

/**
 * Bouton personnalisable
 * @param {object} props 
 * @returns {element}
 */

function Button(props) {
	const [isClicked, setisClicked] = useState(false);
	return (
		<button style={{...props.style, backgroundColor:props.bgColor}} className={style.Button+(isClicked?' '+style.clicked:'')} type={props.type}
			onClick={(evt)=>{
				setisClicked(true)
				setTimeout(()=>{
					setisClicked(false);

				}, 300)
				props.action('test 1')
			}}>
			{props.children}
		</button>
	);
}


Button.propTypes={
  children:PropTypes.any.isRequired,
  action:PropTypes.func.isRequired,
  bgColor:PropTypes.string,
  type:PropTypes.string,
}

Button.defaultProps={
	bgColor: '#0033BB',
	action:() => {},
}

export default Button;