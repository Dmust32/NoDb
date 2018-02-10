import React from 'react';



const Button = ({update}) => {
    return <button className="button" onClick={ () => {update()}} > Join! </button>
    
}

export default Button;