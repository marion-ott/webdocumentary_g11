import React from 'react'
import css from './text.scss'
import Title from '../../blocs/Title/Title'
import Paragraph from '../../blocs/Paragraph/Paragraph'
import ScrollSymbol from '../../blocs/ScrollSymbol/ScrollSymbol';

class Text extends React.Component {
    render() {
        const { title, paragraph, subtitle } = this.props
        return(
            <div className={css.component}>
                <div>
                    { title ? <Title title={title} /> : false }
                    { paragraph ? <Paragraph paragraph={paragraph} subtitle={subtitle} /> : false }
                </div>
                <ScrollSymbol />
            </div>
        )
    }
}

export default Text