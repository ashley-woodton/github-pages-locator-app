import React from 'react';
import './App.css';
import Form from './Form.js';
import Cardlist from './Cardlist.js';
// const axios = require('axios')


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      profiles: []
    }
  };

  addNewProfile = (profileData) =>{
    console.log('APP', profileData)
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData],
    }))
  }

  render(){
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit= {this.addNewProfile}/>
        <Cardlist profiles={this.state.profiles}/>
      </div>
    )
  }
}



export default App;
