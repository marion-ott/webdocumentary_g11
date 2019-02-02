import React from 'react'
import css from './text.scss'
import Title from '../../blocs/Title/Title'
import Paragraph from '../../blocs/Paragraph/Paragraph'
import DragElementsContainer from '../DragAndDrop/DragElementsContainer'
import ScrollSymbol from '../../blocs/ScrollSymbol/ScrollSymbol';

class Text extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.setState({
            blocks: this.props.blocks
        })
    }

    render() {
        const { title, paragraph, subtitle } = this.props
        return(
            <div className={css.component} style={{backgroundColor: this.props.backgroundColor}}>
                <div className="txtContent">
                    { title ? <Title title={title} txtColor={this.props.txtColor} /> : false }
                    { paragraph ? <Paragraph paragraph={paragraph} subtitle={subtitle} txtColor={this.props.txtColor} className={this.props.className} /> : false }
                </div>
                { this.state.blocks && this.state.blocks.map((block, key) => (<DragElementsContainer key={key} index={key} element={block} />)) }
                <ScrollSymbol />
            </div>
        )
    }
}

export default Text