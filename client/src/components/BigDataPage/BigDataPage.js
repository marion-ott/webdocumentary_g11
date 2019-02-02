import React from 'react'

import css from './bigdataPage.scss'
import "circular-std";

import content from '../../content/content'
import ScrollSymbol from '../../blocs/ScrollSymbol/ScrollSymbol'
import ParticleComponent from "./ParticleComponent";



class BigDataPage extends React.Component {
    render() {
        const data = content.data[4].bigData
        return(
            <section className={css.component}>
            <ParticleComponent />
                <div className="title">
                  <h1 className="big">{data.title}</h1>
                  <h1 className="data">{data.title2}</h1>
                </div>
                <p>{data.start}</p>
                <ScrollSymbol />
            </section>
        )
    }
}

export default BigDataPage
