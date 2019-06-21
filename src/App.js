import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css';
import Modal from './Components/Modal/Modal';
// import Input2 from './Components/Input2/Input2';
import AddInput from './Components/AddInput/AddInput';







export default class App extends Component {
  state = {
    show:false
  }
  showModal = () => {
    this.setState({
        ...this.state,
        show: !this.state.show
    });
}
 
  render() {
    return (
      <React.Fragment>   
      <div className="container">
        <div className="row">
          <div className="col">
            <input type="button" onClick={this.showModal} value="Add Material" />
            <Modal onClose = {this.showModal} show={this.state.show}>
            This message is from Modal!
            </Modal>
          </div>
        </div>
      </div>
        {/*<Input2/>*/}

     <AddInput/>
      </React.Fragment>
    )
  }
}


