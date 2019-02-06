import React from 'react';
import Cta from '../../blocs/Cta/Cta'
import BubbleCanvas from '../BubbleCanvas/BubbleCanvas'
import css from './home.scss'

class Home extends React.Component {
    render() {
        return(
            <section className={css.component}>
                <div className="center">
                    <div className="titleBubble">
                        <h1>
                            <span className="dans">dans</span>
                            <span className="la">la</span>
                            <span className="bulle">bulle</span>
                        </h1>
                    </div>
                </div>
                <BubbleCanvas color="#0000FF" />
                <Cta text="Démarrer l'expérience" scrollSection={this.props.scrollSection}/>
            </section>
        )
    }
}
export default Home


