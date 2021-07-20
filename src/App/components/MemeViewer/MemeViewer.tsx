import React from 'react';
import styles from './MemeViewer.module.css';
import PropTypes from 'prop-types';
import {IMemeContent, IMemeImage} from '../../App';

interface PropsMemeViewer{
	meme:IMemeContent,
	image:IMemeImage|undefined
}

const MemeViewer = (props:PropsMemeViewer) => (
  <svg viewBox={'0 0 '+(props.image? props.image.width:'1000')+' '+(props.image? props.image.height:'1000')} className={styles.MemeViewer} data-testid="MemeViewer">
    {props.image&&<image href={props.image.img}/>}
	<text 
		style={{textDecoration:(props.meme.underline?'underline':'none')}} 
		fontWeight={props.meme.weight}
		fill={props.meme.color}
		fontSize={props.meme.fsize}
		x={props.meme.x} 
		y={props.meme.y}>{props.meme.text}
	</text>
  </svg>
);

MemeViewer.propTypes={
	meme:PropTypes.object.isRequired,
	image:PropTypes.object,
}

export default MemeViewer;
