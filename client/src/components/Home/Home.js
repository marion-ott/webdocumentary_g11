import React from 'react'
import content from '../../content/content'
import css from './home.scss'
import ScrollSymbol from '../../blocs/ScrollSymbol/ScrollSymbol'

class Home extends React.Component {
    render() {
        const data = content.data[this.props.step].home
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
                <div className="startContainer">
                    <p>{data.start}</p>
                </div>
                {/* <ScrollSymbol /> */}
            </section>
        )
    }
}

export default Home