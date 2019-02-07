import React from 'react'
import css from './toFilterBubble.scss'
import ReactDOM from 'react-dom'
import { TweenLite, Power4 } from "gsap/TweenMax"


class ToFilterBubble extends React.Component {
    redirect = (event) => {
        event.preventDefault()
        const circle = ReactDOM.findDOMNode(this).querySelector('.blackCircle')
        const circle2 = ReactDOM.findDOMNode(this).querySelector('.blackCircle2')
        const text = ReactDOM.findDOMNode(this).querySelector('.text')
        circle.style.zIndex = 999
        circle2.style.zIndex = 899
        TweenLite.to(circle2, 1,{ ease: Power4.ease, scale: 5})
        TweenLite.to(text, 0.5,{ ease: Power4.ease, opacity: 0})
        setTimeout(() => {
            this.props.push('/filter-bubble')
        }, 1000)
    }
    render() {
        return (
            <div className={css.component}>
                <div className="blackCircle2"></div>
                <div className="blackCircle">
                    <div className="text">
                        <p>Maintenant que vous avez une meilleure compréhension des principes qui constituent son origine, vous êtes prêts à découvrir ce qu’est la “bulle de filtres”</p>
                        <div>
                            <a href="/" onClick={this.redirect}>continuer</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToFilterBubble
