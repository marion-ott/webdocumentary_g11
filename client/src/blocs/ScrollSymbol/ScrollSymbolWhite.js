import React from 'react'
import { scrollVertical } from '../../helpers'
import anime from 'animejs';


class ScrollSymbolWhite extends React.Component {
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
                    <circle cx="32" cy="32" r="32" fill="white"/>
                    <path d="M30.9004 46.4931C31.0956 46.6884 31.4122 46.6884 31.6075 46.4931L34.7894 43.3111C34.9847 43.1159 34.9847 42.7993 34.7894 42.604C34.5942 42.4087 34.2776 42.4087 34.0823 42.604L31.2539 45.4324L28.4255 42.604C28.2302 42.4087 27.9136 42.4087 27.7184 42.604C27.5231 42.7993 27.5231 43.1159 27.7184 43.3111L30.9004 46.4931ZM30.7539 16.3721L30.7539 46.1395L31.7539 46.1395L31.7539 16.3721L30.7539 16.3721Z" fill="black"/>
                </svg>
            </div>
        )
    }
} 

export default ScrollSymbolWhite



