import * as React from 'react';
import MemeViewer from './components/MemeViewer/MemeViewer';
import MemeForm from './components/MemeForm/MemeForm';
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

const initialState={
    currentMeme:{
		titre:'meme',
		text:'Mon meme2',
		x:90,
		y:100,
		color:'#FF0000',
		underline:false,
		weight:'900',
		imageId:1,
		fsize:40,
	},
    memes:[],
    images:[
        {height:420, width:640, id:0, img:"/img/futurama.jpg", titre:"futurama 0"},
        {height:420, width:640, id:1, img:"/img/futurama.jpg", titre:"futurama 1"},
        {height:420, width:640, id:2, img:"/img/futurama2.jpg", titre:"futurama 2"},
    ]
}
export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = initialState;
    
  }

  componentDidMount(){
      console.log('le composant App est monté');
      
  }

  public render() {
    return (
      <div className="App" data-testid="App">
        <MemeForm meme={this.state.currentMeme} images={this.state.images} onChangeInForm={(meme)=>{this.setState({currentMeme:meme})}}/>
        <MemeViewer meme={this.state.currentMeme} image={this.state.images.find(e=>{return e.id===this.state.currentMeme.imageId})}/>
      </div>
    );
  }
}
