import React from 'react'

import css from './algoPage.scss'

import content from '../../content/content'
import AlgoBackground from "./AlgoBackground";



class AlgoIntro extends React.Component {
    render() {
        const data = content.data[6].algo
        return(
            <section className={css.component}>
                <AlgoBackground />
                <div className="title">
                  <h1>{data.title}</h1>
                </div>
            </section>
        )
    }
}

export default AlgoIntro
