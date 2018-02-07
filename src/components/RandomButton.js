import React, { Component } from 'react';

class RandomButton extends Component {


     render() {
        return(

            <button onClick = {this.props.update} >Random!</button>

            
        )
    }
};

export default RandomButton