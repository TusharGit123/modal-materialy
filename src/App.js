import React, { Component } from 'react'
import './App.css';
import AddInput from './Components/AddInput/AddInput';
import NewModal from "./Components/NewModal/NewModal";


export default class App extends Component {

  render() {
  
    return (
      <React.Fragment>  
      {/*<AddInput/>*/}
       <NewModal/>
      </React.Fragment>
    )
  }
}


