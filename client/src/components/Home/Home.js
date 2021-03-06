import React from 'react';
import Cta from '../../blocs/Cta/Cta'
import BubbleCanvas from '../BubbleCanvas/BubbleCanvas'
import anime from 'animejs';
import css from './home.scss'

class Home extends React.Component {

    componentDidMount() {
        anime({
            targets: this.refs.title,
            translateY: [100, 0],
            translateX: [60, 0],
            loop: true,
            duration: 10000,
            direction: 'alternate',
            easing: 'easeInOutSine'
        })
    }

    render() {
        return(
            <section className={css.component}>
                <div className="center">
                    <div className="titleBubble" ref="title">
                        <h1>
                            <span className="dans">dans</span>
                            <span className="la">la</span>
                            <span className="bulle">bulle</span>
                        </h1>
                    </div>
                </div>
                <BubbleCanvas color="#0000FF" />
                <Cta text="démarrer l'expérience" scrollSection={this.props.scrollSection}/>
            </section>
        )
    }
}
export default Home
