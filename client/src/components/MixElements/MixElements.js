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
        this._blocks = []
    }

    componentWillMount() {
        this.setState({
            blocks: this.props.blocks
        })
    }


    render() {
        return(
            <div className={css.component} style={{backgroundColor: this.props.backgroundColor}}>
                { this.state.blocks && this.state.blocks.map((block, key) => (<DragElementsContainer key={key} index={key} cookies={this.props.cookies && this.props.cookies} element={block} color={this.props.color && this.props.color} data={this.props.data} userName={this.props.name} ref={el => el && this._blocks.push(el)} />)) }
                { this.props.cta ?
                    (
                        <Cta text="Continuer" scrollSection={!this.props.redirect && this.scrollSection} redirect={this.props.redirect} redirectTo={this.props.redirectTo} />
                    )
                    : <ScrollSymbol scrollSection={this.props.scrollSection} /> }
            </div>
        )
    }
}

export default MixElements