import React, { useState } from 'react';
import style from './MemeForm.module.css'
import PropTypes from 'prop-types';
import Button from '../Button/Button';


const MemeForm = (props) => {
	const [formstate, setformstate] = useState(props.meme);
	return (
		<form className={style.MemeForm} style={formstate.style} data-testid="MemeForm"
			onSubmit={(evt)=>{
				evt.preventDefault();
				console.log(formstate);
				props.onChangeInForm(formstate);
			}}
		>
			{JSON.stringify(formstate)}
			<h2>Editor</h2>
			<div>
				<span className={style.inputLabel}>Nom du meme</span>
				<input type="text" placeholder="titre du meme" value={formstate.titre} 
					onChange={(evt)=>{
						setformstate({...formstate, titre:evt.target.value})
					}}
				/>
			</div>
			<div>
				<span className={style.inputLabel}>image</span>
				<select  value={formstate.imageId}
					onChange={(evt)=>{
						setformstate({...formstate, imageId:Number(evt.target.value)})
					}}>
					<option value={-1}>
						No img
					</option>
					{props.images.map((e,i)=>{
						return <option key={'img-selector-'+i} value={e.id}>{e.titre}</option>
					})}
				</select>
			</div>
			<div>
				<span className={style.inputLabel}>texte du meme</span>
				<input type="text" placeholder="text du meme" value={formstate.text}
					onChange={(evt)=>{
						setformstate({...formstate, text:evt.target.value})
					}}
				/>
			</div>
			<div className={style.inlineDisplayer}>
				<div>
					<span className={style.inputLabel}>x</span>
					<input 
						type="number"
						value={formstate.x}
						onChange={(evt)=>{
								setformstate({...formstate, x:evt.target.value})
							}}
						/>
				</div>
				<div>
					<span className={style.inputLabel}>y</span>
					<input 
						type="number"  
						value={formstate.y}
						onChange={(evt)=>{
								setformstate({...formstate, y:evt.target.value})
							}}
						/>
				</div>
				<div>
					<span className={style.inputLabel}>Font size </span>
					<input 
						type="number" 
						min={1} 
						className="smallNumber" 
						value={formstate.fsize}
						onChange={(evt)=>{
											setformstate({...formstate, fsize:evt.target.value})
										}}
					/>
				</div>
				<div>
					<span className={style.inputLabel}>Underline</span>
					<input 
						type="checkbox" 
						value={formstate.y} 
						checked={formstate.underline? 'checked':''}
						onChange={(evt)=>{
											setformstate({...formstate, underline:evt.target.checked})
										}}
					/>
				</div>
			</div>

			<div>
				<span className={style.inputLabel}>Color</span>
				<input type="color" style={{width:'80%'}} value={formstate.color}
					onChange={(evt)=>{
						setformstate({...formstate, color:evt.target.value})
					}}
				/>

			</div>
			<Button type="reset" bgColor="red" action={()=>{}}>Reset</Button>
			<Button type="submit" bgColor="lightgreen" action={()=>{}}>Save</Button>
		</form>
	);
};


MemeForm.propTypes = {
	style:PropTypes.object,
	meme:PropTypes.object.isRequired,
	images:PropTypes.array.isRequired,
	onChangeInForm:PropTypes.func.isRequired,
};


export default MemeForm;
