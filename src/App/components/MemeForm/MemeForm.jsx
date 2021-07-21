import React, { useEffect, useState } from 'react';
import style from './MemeForm.module.css'
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import {initialState, store, listInitialState} from '../../store/store'
import {useParams, withRouter} from 'react-router-dom';


const MemeForm = (props) => {
	const [formstate, setformstate] = useState(store.getState().current.currentMeme);
	useEffect(() => {
		store.subscribe(() =>{
			setformstate(store.getState().current.currentMeme);
		})
	}, [store]);

	useEffect(() => {
		store.dispatch({type:'SET_CURRENT_MEME', value:formstate})
	}, [formstate]);

	useEffect(() => {
		const foundMemeById = store.getState().lists.memes.find(e=>e.id===Number(props.match.params.id));
		setformstate(foundMemeById?foundMemeById:initialState.currentMeme);
		console.log(store.getState().current.currentMeme);
	}, [store.getState().lists.memes]);





	return (
		<form className={style.MemeForm} style={props.style} data-testid="MemeForm"
			onSubmit={(evt)=>{
				evt.preventDefault();
				store.dispatch({type:'SAVE_CURRENT_MEME'});
				props.history.push('/thumbnail/')
			}}

			onReset={(evt)=>{
				setformstate(initialState.currentMeme);
				// props.onChangeInForm(formstate);
			}}
		>
			{/* {JSON.stringify(formstate)} */}
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
					{store.getState().lists.images.map((e,i)=>{
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
				<input 
					type="color" 
					style={{width:'80%'}} 
					value={formstate.color}
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
};


export default withRouter(MemeForm);
