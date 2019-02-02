import React from 'react'
import css from './paragraph.scss'
import Subtitle from './Subtitle/Subtitle'

const Paragraph = props => (
    <div id="paragraph" className={css.component}>
        <p className={`paragraph ${props.className}`} style={{color: props.txtColor}} dangerouslySetInnerHTML={{__html: props.paragraph}}></p>
        { props.subtitle ? <Subtitle subtitle={props.subtitle}/> : false }
    </div>
)

export default Paragraph