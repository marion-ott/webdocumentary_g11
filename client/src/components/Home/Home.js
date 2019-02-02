import React from 'react'
import Cta from '../../blocs/Cta/Cta'
import css from './home.scss'

class Home extends React.Component {
    render() {
        //const data = content.data[this.props.step].home
        return(
            <section className={css.component}>
                <div className="center">
                    <div className="bubbles">
                        <div className="filledBubble"></div>
                        <div className="filledBubble"></div>
                        <div className="filledBubble"></div>
                        <div className="filledBubble"></div>
                        <div className="borderBubble"></div>
                        <div className="borderBubble"></div>
                        <div className="borderBubble"></div>
                        <div className="borderBubble"></div>
                        <div className="borderBubble"></div>
                    </div>
                    <div className="titleBubble">
                        <h1>
                            <span className="dans">dans</span>
                            <span className="la">la</span>
                            <span className="bulle">bulle</span>
                        </h1>
                    </div>
                </div>
                <Cta text="Démarrer l'expérience" scrollSection={this.props.scrollSection}/>
                {/* <ScrollSymbol /> */}
            </section>
        )
    }
}

export default Home