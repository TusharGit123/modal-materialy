import React, { Component } from 'react'

export default class AddInput extends Component {



    
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

         console.log( this.state.address, "$$$$");

        //  Update the state
        this.setState({countries: this.state.countries})
    };
    handleSubmit(e){
        console.log(this.state, '$$$$');

        // send this to the http request...
    }

    render() {
        return (
                <React.Fragment>            
                {
                    this.state.countries.map((country, index) => {
                        return(
                            <div key={index}>
                            <input onChange={(e) => this.handleChange(e, index)} value={country} />
                            <button onClick={() => this.handleRemove(index)}>Remove</button>
                            </div>
                        )
                    })

                }
                <hr/>

                <button onClick={(e) => this.addCountry(e)   } >Add Material</button>
                
                <hr/>

                    {/*<button onClick={(e) => this.handleSubmit((e))} >Submit</button>*/}

                </React.Fragment>

            
        )
    }
}
