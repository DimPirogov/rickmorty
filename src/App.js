import React, { Component } from 'react';
import './App.css';
import Slider from './components/Slider';
import SingleImage from './components/SingleImage';
import Details from './components/Details';


class App extends Component {
  constructor(){
    super()
    this.state = {
      epOnFocus : 0,
      visible: false,
      pictureId: 0,
      selectedImages:[]
    }
    
    this.changeEp = (ep) =>{
      this.setState({epOnFocus:ep});
    }
  }

  componentDidMount(){
    fetch('http://localhost:8000/roster')
        .then(data =>{
            return data.json()
        })
        .then(parseData =>{
            this.setState({selectedImages: parseData})
        } )
  }

  showBio = (id) => {
      this.setState({visible : true});
      this.setState({pictureId : id});
      }

  render() {
    console.log('App')
    return ( 
      <div className='App'>
        <Slider updateFunc={this.changeEp} focusedEp={this.state.epOnFocus} />
        <SingleImage  
                    showBioP={this.showBio}
                    sImages={this.state.selectedImages}
                    />
        { this.state.visible ? (<Details 
                    sImage={this.state.pictureId}
                    sImages={this.state.selectedImages}/>
                ) : (<div></div>) }
      </div>
    );
  }
}

export default App;