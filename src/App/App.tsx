import * as React from 'react';
import MemeViewer from './components/MemeViewer/MemeViewer';
import MemeForm from './components/MemeForm/MemeForm';
import MainLayout from './components/MainLayout/MainLayout';
import ListMemeLayout from './components/ListMemeLayout/ListMemeLayout';
import NavbarNoCmp from './components/NavbarNoCmp/NavbarNoCmp';
import {Link, Switch, Route} from 'react-router-dom';
// import MemeEditorLoader from './components/MemeEditorLoader/MemeEditorLoader';
import {initialState, listInitialState, store} from './store/store'

export interface IMemeImage{
    id:number;
    img:string;
    width:number;
    height:number;
    titre:string;
}

export interface IMemeContent{
    id?:number;
    titre:string;
    text:string;
    x:number;
    y:number;
    color:string;
    underline:boolean;
    weight:string;
    fsize:number;
    imageId:number;
}

export interface IAppProps {
}

export interface IAppState {
    currentMeme:IMemeContent;
    memes:Array<IMemeContent>;
    images:Array<IMemeImage>;
}


export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {...initialState, ...listInitialState};
    
  }

  componentDidMount(){
		this.setState({...store.getState().current, ...store.getState().lists});
		store.subscribe(()=>{
			console.log('App subscribe')
			this.setState({...store.getState().current, ...store.getState().lists});
		});
  }

  public render() {
    return (
        <>
            <NavbarNoCmp />
            <div className="App" data-testid="App">
				<Switch>
					<Route path="/" exact>
						Hello world
					</Route>
					<Route path="/thumbnail" >
						<ListMemeLayout>
						{this.state.memes.map((e,i)=>{
							return (
							<Link key={'meme-'+i} to={"/editor/"+e.id}>
								<MemeViewer meme={e} image={this.state.images.find(e2=>{return e2.id===e.imageId})}/>
							</Link>
							)
						})}
						</ListMemeLayout>
					</Route>
					<Route path="/editor/:id" >
						<MainLayout>
							<MemeForm/>
							<MemeViewer meme={this.state.currentMeme} image={this.state.images.find(e=>{return e.id===this.state.currentMeme.imageId})}/>
						</MainLayout>
					</Route>
					<Route path="/editor" >
						<MainLayout>
							<MemeForm/>
							<MemeViewer meme={this.state.currentMeme} image={this.state.images.find(e=>{return e.id===this.state.currentMeme.imageId})}/>
						</MainLayout>
					</Route>
					<Route path="/" >
						404
					</Route>
				</Switch>
            </div>
        </>
    );
  }
}
