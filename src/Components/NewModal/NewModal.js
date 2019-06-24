import React, { Component } from 'react';
import Modal from '../Modal/Modal';

export default class NewModal extends Component {
    constructor(){
        super();
        this.state={
            input:false,
            name:"",
            show:false, 
            Inputs:[],
            width: window.innerWidth
        }
    };

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
      };
      
      // make sure to remove the listener
      // when the component is not mounted anymore
      componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
      };
      
      handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
      };

    showModal = () => {
        this.setState({
            ...this.state,
            show: !this.state.show,
          
        });
    }

    onClickHandler = (e) => {
        e.preventDefault();
        this.setState({
            input:true
        })
    };


    render() {
        const { width } = this.state;
         const isMobile = width <= 768;

        const {input} = this.state

        const renderBtnMobile =(
            <button onClick={this.showModal}>Add Material</button>
        )

        const renderBtnDesktop =(
            <button onClick={this.onClickHandler}>Add Material</button>
        )

        const renderInput = (
            <React.Fragment>
                <input type= "text" name="material" value={this.state.name} onChange={this.onChangeHandler}/><br></br>                  
            </React.Fragment>
        )
  
        return (
            <div>              
                {isMobile ? <button onClick={this.showModal}>Add Material</button> : renderBtnDesktop}<br></br>
                {input === true  && !isMobile ? renderInput : "" }
                <Modal onClose = {this.showModal} show={this.state.show}>
                           Add your Material.
                 </Modal>
            </div>
        )
    }
}
