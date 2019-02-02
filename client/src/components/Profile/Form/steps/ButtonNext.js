import React from 'react'

const ButtonNext = props => (
    <button 
        className={`buttonNext ${props.buttonState ? "enabled" : "disabled"}`} 
        disabled={props.buttonState ? false : true}
        onClick={props.onClick}
        >Continuer
    </button>
)

export default ButtonNext