import React from 'react'
import anime from 'animejs';

class MoreSymbol extends React.Component {
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
            <div style={svgPosition} onClick={this.props.renderBlocks} ref='icon'>
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="64" height="64" fill="white"/>
                    <circle cx="32" cy="32" r="31" stroke="#0000FF" strokeWidth="2"/>
                    <path d="M31 17L31 47L33 47L33 17L31 17Z" fill="#0000FF"/>
                    <path d="M47 31L17 31L17 33L47 33L47 31Z" fill="#0000FF"/>
                </svg>
            </div>
        )
    }
} 

export default MoreSymbol



