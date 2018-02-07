import React from 'react';



const Button = ({update}) => {
    return <button onClick={ () => {update()}} > Join! </button>
    
}

export default Button;