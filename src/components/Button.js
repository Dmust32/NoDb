import React from 'react';



const Button = () => {
    return <button onClick = { () => {this.props.update()}} > Join! </button>
    
}

export default Button;