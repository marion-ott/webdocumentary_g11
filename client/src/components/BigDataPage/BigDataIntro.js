import React from 'react'
import css from './bigdataPage.scss'
import content from '../../content/content'
import ScrollSymbol from '../../blocs/ScrollSymbol/ScrollSymbol'

class BigDataIntro extends React.Component {
    render() {
        const data = content.data[3].bigData
        return(
            <section className={css.component}>
                <div className="title">
                  <h1 className="big">{data.title}</h1>
                  <h1 className="data">{data.title2}</h1>
                </div>
            </section>
        )
    }
}

export default BigDataIntro
