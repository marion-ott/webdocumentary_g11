import React from 'react'
import css from './algoPage.scss'
import content from '../../content/content'
import ScrollSymbol from '../../blocs/ScrollSymbol/ScrollSymbol'
import AlgoBackground from './AlgoBackground'
import videoSrc from './algo_bg_video.mp4'


class AlgoIntro extends React.Component {
    render() {
        const data = content.data[5].algo
        return(
            <section className={css.component}>

                <video autoPlay loop id="algoBackground" muted plays-inline>
                    <source src={videoSrc} type="video/mp4" />
                </video>

                <div className="title">
                  <h1>{data.title}</h1>
                </div>
                <ScrollSymbol />
            </section>
        )
    }
}

export default AlgoIntro
