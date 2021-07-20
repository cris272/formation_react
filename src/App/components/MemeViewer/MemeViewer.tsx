import React from 'react';
import styles from './MemeViewer.module.css';
import PropTypes from 'prop-types';

interface PropsMemeViewer{
	meme:{
		id:number;
		titre:string;
		text:string;
		x:number;
		y:number;
		color;
		underline:boolean;
		weight:string;
		img:string;
		width:number;
		height:number;
		fsize:number;
	}
}

const MemeViewer = (props:PropsMemeViewer) => (
  <svg viewBox={'0 0 '+props.meme.width+' '+props.meme.width} className={styles.MemeViewer} data-testid="MemeViewer">
    <image href={props.meme.img} />
	<text 
		style={{textDecoration:(props.meme.underline?'underline':'none')}} 
		fontWeight={props.meme.weight}
		color={props.meme.color}
		fontSize={props.meme.fsize}
		x={props.meme.x} 
		y={props.meme.y}>{props.meme.text}
	</text>
  </svg>
);

MemeViewer.propTypes={
	titre:PropTypes.string.isRequired,
	text:PropTypes.string.isRequired,
	x:PropTypes.number.isRequired,
	y:PropTypes.number.isRequired,
	width:PropTypes.number.isRequired,
	height:PropTypes.number.isRequired,
	url:PropTypes.string.isRequired,
}

MemeViewer.defaultProps={
	meme:{
		titre:'meme',
		text:'Mon meme',
		x:90,
		y:100,
		color:'red',
		underline:false,
		weight:'900',
		img:'/img/futurama.jpg',
		width:500,
		height:400,
		fsize:40,
	}
}

export default MemeViewer;
