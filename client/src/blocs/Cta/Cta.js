import React from 'react'
import css from './cta.scss'

class Cta extends React.Component {
    
    hoverAnimation = (event) => {
        event.target.style.letterSpacing = '0.2em'
    }

    hoverUnanimate = (event) => {
        event.target.style.letterSpacing = '0em'
    }

    render() {

        return(
            <div className={css.component}>
                <p 
                    onMouseEnter={this.hoverAnimation} 
                    onMouseLeave={this.hoverUnanimate} 
                    onClick={this.props.redirect ? () => this.props.redirect(this.props.redirectTo) : this.props.scrollSection}
                    >
                        {this.props.text}
                    </p>
            </div>
        )
    }
}

export default Cta