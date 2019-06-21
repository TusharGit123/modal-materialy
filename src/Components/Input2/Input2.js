import React, { Component } from 'react'

export default class Input2 extends Component {
    constructor(props){
        super(props)
        this.state = { show : true};
        this.toggleDiv = this.toggleDiv.bind(this)
    }
    toggleDiv = () => {
        const { show } = this.state;
        this.setState({ show : !show})
    }
    render() {
        return (
           <React.Fragment>
            <button onClick={ this.toggleDiv }>Show me</button>
           { this.state.show && <Box/>}
           </React.Fragment>
        )
    }
}




 class Box extends Component {
    render() {
        return (
           <input type="text" placeholder="Enter something"/>
        )
    }
}


