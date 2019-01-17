import React from 'react'
import css from './paragraph.scss'
import Subtitle from './Subtitle/Subtitle'

const Paragraph = props => (
    <div className={css.component}>
        <p className="paragraph">{props.paragraph}</p>
        { props.subtitle ? <Subtitle subtitle={props.subtitle}/> : false }
    </div>
)

export default Paragraph