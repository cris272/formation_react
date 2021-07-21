import {createStore, combineReducers} from 'redux';
import { REST_ADR } from '../config/config';

export const initialState={
    currentMeme:{
		titre:'meme',
		text:'Mon meme2',
		x:90,
		y:100,
		color:'#FF0000',
		underline:false,
		weight:'900',
		imageId:0,
		fsize:40,
	},
	memes:[],
	images:[],
}

export const listInitialState={
	memes:[],
	images:[],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
	case 'SET_CURRENT_MEME':
		return { ...state, currentMeme:action.value}
	case 'SAVE_CURRENT_MEME':
		const isNew = state.currentMeme.id?false:true;
		fetch(`${REST_ADR}/memes${isNew?'':'/'+state.currentMeme.id}`,
		{
			headers:{
				"Content-Type":"application/json",
				"Accept":"application/json",
			},
			method:isNew?'POST':'PUT',
			body:JSON.stringify(state.currentMeme)
		})
		.then(f=>f.json())
		.then(o => {
			store.dispatch({type:'SET_CURRENT_MEME', value:o});
			const alreadyInListMeme=store.getState().lists.memes.findIndex((e) => e.id===o.id)
			if (-1 === alreadyInListMeme){


				store.dispatch({type:'ADD_MEME', values:o})
			}
			else{
				store.dispatch({type:'ADD_MEMES', values:[
					...store.getState().lists.memes.slice(0,alreadyInListMeme),
					o,
					...store.getState().lists.memes.slice(alreadyInListMeme+1),
				]})
			}
		});
		return state;

	default:
		return state
  }
}

const listReducer = (state = listInitialState, action) => {
	console.log(action.type);
	switch (action.type) {
		case 'ADD_IMAGES':
			return { ...state, images:action.values}
		case 'ADD_MEMES':
			return { ...state, memes:action.values}
		case 'ADD_MEME':
			return { ...state, memes:[...state.memes,action.values]}
		case 'INIT_MEMES':
			fetch(`${REST_ADR}/memes`).then(f=>f.json()).then(arr => store.dispatch({type:'ADD_MEMES', values:arr}));
			return state;
		case 'INIT_IMAGES':
			fetch(`${REST_ADR}/images`).then(f=>f.json()).then(arr => store.dispatch({type:'ADD_IMAGES', values:arr}));
			return state;
		default:
			return state
	}
}




export const store=createStore(combineReducers({current:reducer, lists:listReducer}));

store.subscribe(()=>{
	console.log(store.getState());
});

store.dispatch({type:'INIT_IMAGES'});
store.dispatch({type:'INIT_MEMES'});