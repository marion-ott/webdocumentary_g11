import React from 'react'
import { scrollVertical } from '../../helpers'

const svgPosition = {
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translate(-50%, 0)",
    cursor: "pointer"
}

const ScrollSymbol = (props) => (
    <div style={svgPosition} onClick={scrollVertical}>
        <svg onClick={props.scrollSection} width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="21.5" cy="21.5" r="21.5" fill="black"/>
            <path d="M20.6464 31.3536C20.8417 31.5488 21.1583 31.5488 21.3536 31.3536L24.5355 28.1716C24.7308 27.9763 24.7308 27.6597 24.5355 27.4645C24.3403 27.2692 24.0237 27.2692 23.8284 27.4645L21 30.2929L18.1716 27.4645C17.9763 27.2692 17.6597 27.2692 17.4645 27.4645C17.2692 27.6597 17.2692 27.9763 17.4645 28.1716L20.6464 31.3536ZM20.5 11L20.5 31L21.5 31L21.5 11L20.5 11Z" fill="white"/>
        </svg>
    </div>
)

export default ScrollSymbol