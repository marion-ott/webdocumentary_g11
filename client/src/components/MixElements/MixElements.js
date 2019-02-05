import React from 'react'
import css from './mixElements.scss'
import DragElementsContainer from '../DragAndDrop/DragElementsContainer'
import Cta from '../../blocs/Cta/Cta'
import ScrollSymbol from '../../blocs/ScrollSymbol/ScrollSymbol'

class MixElements extends React.Component {
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
        return(
            <div className={css.component} style={{backgroundColor: this.props.backgroundColor}}>
                { this.state.blocks && this.state.blocks.map((block, key) => (<DragElementsContainer key={key} index={key} element={block} data={this.props.data} />)) }
                { this.props.cta ?
                    (
                        <Cta text="Continuer" scrollSection={this.scrollSection} />
                    )
                    : <ScrollSymbol scrollSection={this.props.scrollSection} /> }
            </div>
        )
    }
}

export default MixElements