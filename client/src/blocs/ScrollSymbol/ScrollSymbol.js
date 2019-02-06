import React from 'react'
import { scrollVertical } from '../../helpers'
import anime from 'animejs';





class ScrollSymbol extends React.Component {
    componentDidMount() {
        anime({
            targets: this.refs.icon,            
            translateY: [-5, 0],            
            loop: true,
            duration: 650,
            direction: 'alternate',            
            easing: 'easeInOutSine'
        })
    }

    render() {
        const svgPosition = {
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translate(-50%, 0)",
            cursor: "pointer"
        }

        return(
            <div style={svgPosition} onClick={scrollVertical} ref='icon'>
                <svg onClick={this.props.scrollSection} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="32" cy="32" r="32" fill="#0000FF"/>
                    <path d="M31.2929 47.7071C31.6834 48.0976 32.3166 48.0976 32.7071 47.7071L39.0711 41.3431C39.4616 40.9526 39.4616 40.3195 39.0711 39.9289C38.6805 39.5384 38.0474 39.5384 37.6569 39.9289L32 45.5858L26.3431 39.9289C25.9526 39.5384 25.3195 39.5384 24.9289 39.9289C24.5384 40.3195 24.5384 40.9526 24.9289 41.3431L31.2929 47.7071ZM31 17L31 47L33 47L33 17L31 17Z" fill="white"/>
                </svg>
            </div>
        )
    }
} 

export default ScrollSymbol