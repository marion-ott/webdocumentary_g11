import React from 'react'
import css from './text.scss'
import Title from '../../blocs/Title/Title'
import Paragraph from '../../blocs/Paragraph/Paragraph'
import DragElementsContainer from '../DragAndDrop/DragElementsContainer'
import Cta from '../../blocs/Cta/Cta'
import ScrollSymbol from '../../blocs/ScrollSymbol/ScrollSymbol'
import ReactDOM from 'react-dom'
import { TweenLite, Power4 } from "gsap"
import MoreSymbol from '../../blocs/MoreSymbol.js/MoreSymbol';

class Text extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            blocks: [],
            hasBlocks: this.props.hasBlocks
        }
        this._blocks = []
    }

    componentWillMount() {
        this.setState({
            blocks: this.props.blocks
        })
    }

    componentDidMount() {
        if(this.state.blocks && this.state.blocks.length > 0) { 
            this._blocks.map(block => {
                let left = Math.random() * (200 - 20) + 20
                let top = Math.random() * (140 - 20) + 20
                ReactDOM.findDOMNode(block).style.left = `${left}px`
                ReactDOM.findDOMNode(block).style.top = `${top}px`
                TweenLite.to(ReactDOM.findDOMNode(block), 0.2,{ ease: Power4.ease, opacity: 0, scale: 0.5, transformOrigin: '50% 50%' })
                return true
            })
        }
    }

    componendWillUnmount() {}

    renderDraggableBlocks = () => {
        this._blocks.map(block => {
            const blockItem = ReactDOM.findDOMNode(block)
            TweenLite.to(blockItem, 0.1,{ ease: Power4.ease, opacity: 1})
            TweenLite.to(blockItem, 0.2,{ ease: Power4.ease, scale: 1, transformOrigin: '50% 50%' }) 
            return true
        })
        this.setState({
            hasBlocks: false
        })
    }

    render() {
        
        const { title, paragraph, subtitle, cta } = this.props
        //console.log(this.props.hasBlocks)
        return(
            <div className={css.component} style={{backgroundColor: this.props.backgroundColor}}>
                <div className="txtContent">
                    { title ? <Title title={title} txtColor={this.props.txtColor} /> : false }
                    { paragraph ? <Paragraph paragraph={paragraph} subtitle={subtitle} txtColor={this.props.txtColor} className={this.props.className} /> : false }
                </div>
                { this.state.blocks && this.state.blocks.map((block, key) => (<DragElementsContainer color={this.props.color && this.props.color} key={key} index={key} element={block}  ref={el => el && this._blocks.push(el)}/>)) }

                { cta && !this.state.hasBlocks ?
                    (
                        <Cta text="Continuer" scrollSection={!this.props.redirect && this.scrollSection} redirect={this.props.redirect} redirectTo={this.props.redirectTo} />
                    )
                    : !this.state.hasBlocks ? <ScrollSymbol scrollSection={this.props.scrollSection} /> 
                    : this.props.hasBlocks ? <MoreSymbol renderBlocks={this.renderDraggableBlocks} /> : null}
            </div>
        )
    }
}

export default Text