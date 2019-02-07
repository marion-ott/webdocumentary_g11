import React from 'react'
import css from './algoPage.scss'
import content from '../../content/content'
import ScrollSymbol from '../../blocs/ScrollSymbol/ScrollSymbol'


class AlgoIntro extends React.Component {
    render() {
        const data = content.data[5].algo
        return(
            <section className={css.component}>
                <div className="title">
                  <h1>{data.title}</h1>
                </div>
                <ScrollSymbol />
            </section>
        )
    }
}

export default AlgoIntro
