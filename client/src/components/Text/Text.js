import React from 'react'
import css from './text.scss'
import Title from '../../blocs/Title/Title'
import Paragraph from '../../blocs/Paragraph/Paragraph'
import DragElementsContainer from '../DragAndDrop/DragElementsContainer'
import Cta from '../../blocs/Cta/Cta'
import ScrollSymbol from '../../blocs/ScrollSymbol/ScrollSymbol'

class Text extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            blocks: []
        }
    }

    componentWillMount() {
        this.setState({
            blocks: this.props.blocks
        })
    }

    render() {
        const { title, paragraph, subtitle, cta } = this.props
        return(
            <div className={css.component} style={{backgroundColor: this.props.backgroundColor}}>
                <div className="txtContent">
                    { title ? <Title title={title} txtColor={this.props.txtColor} /> : false }
                    { paragraph ? <Paragraph paragraph={paragraph} subtitle={subtitle} txtColor={this.props.txtColor} className={this.props.className} /> : false }
                </div>
                { this.state.blocks && this.state.blocks.map((block, key) => (<DragElementsContainer key={key} index={key} element={block} />)) }
                { cta ?
                    (
                        <Cta text="Continuer" scrollSection={this.scrollSection} redirect={this.props.redirect} redirectTo={this.props.redirectTo} />
                    )
                    : <ScrollSymbol scrollSection={this.props.scrollSection} /> }
            </div>
        )
    }
}

export default Text