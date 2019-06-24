import React, { Component } from 'react';
import Modal from '../Modal/Modal';


export default class AddInput extends Component {   

     constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }
  
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  
  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  

    state = {
        show:false
      }
      showModal = () => {
        this.setState({
            ...this.state,
            show: !this.state.show
        });
    }

    state = {
        countries:[]
    };

    addCountry(){
        this.setState({countries: [...this.state.countries, ""]})
    };

    handleChange(e, index){
        this.state.countries[index] = e.target.value
        
        // set the changed state
        this.setState({countries: this.state.countries})
    };
 
    handleRemove(index){
         // remove an iten at the index
         this.state.countries.splice(index, 1)

         console.log( this.state.address);

        //  Update the state
        this.setState({countries: this.state.countries})
    };

    handleSubmit(e){
        console.log(this.state);

        // send this to the http request...
    }

    render() {
         const { width } = this.state;
         const isMobile = width <= 768;
        return (
                <React.Fragment>   
                {
                    this.state.countries.map((country, index) => {
                        return(
                            <div className="container" key={index}>
                                <div className="row">
                                  <div className="col">
                                    <input onChange={(e) => this.handleChange(e, index)} value={country} />
                                    <button onClick={() => this.handleRemove(index)}>Remove</button>
                                  </div>                             
                                </div>                          
                            </div>
                        )
                    })

                }                             
                
                <hr/>
                {
                    <div className="container">
                      <div className="row">
                        <div className="col">
                          <input type="button" onClick={this.showModal} value="Add Material" />
                          <Modal onClose = {this.showModal} show={this.state.show}>
                           Add your Material.
                          </Modal>
                          <button onClick={(e) => this.addCountry(e)   } >Add Material</button>
                        </div>
                      </div>
                    </div>                 
                }

               
                
                    
               {
                   //     isMobile ? showModal = () => {
                //         this.setState({
                //             ...this.state,
                //             show: !this.state.show
                //         }) :   addCountry(){
                //             this.setState({countries: [...this.state.countries, ""]})
                //         }
                 
                // isMobile ?  <input type="button" onClick={this.showModal} value="Add Material" /> :
                //           <button onClick={(e) => this.addCountry(e)   } >Add Material</button>
               } 
                              
                <hr/>

                 {<button onClick={(e) => this.handleSubmit((e))} >Submit</button>}

                </React.Fragment>
                
            
        )
    }
}
