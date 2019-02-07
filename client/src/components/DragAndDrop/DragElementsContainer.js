import React from 'react'
import DragElement from './DragElement'
import css from "./dragElement.scss"


class DragElementsContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            index: 1
        }
    }

    changeIndex = (event) => {
        event.persist()
        const index = this.state.index + 1
        this.setState({
            index: index
        }, () => this.changePosition(this.state.index, event))   
    }

    changePosition = (id, event) => {
        event.target.closest('.handle').style.zIndex = id
    }

    renderElements(type, index) {
        switch(type) {
            case 'image':
                return(<DragElement color={this.props.color} changeIndex={this.changeIndex} key={index} index={index} type={type} />)
            case 'video':
                return(<DragElement color={this.props.color} changeIndex={this.changeIndex} key={index} index={index} type={type} title={this.props.element.title} src={this.props.element.src} />)
            case 'text':
                return(<DragElement color={this.props.color} changeIndex={this.changeIndex} key={index} index={index} type={type} text={this.props.element.paragraph ? this.props.element.paragraph : this.props.element.text} />)
            case 'choice':
                return(<DragElement changeIndex={this.changeIndex} key={index} index={index} type={type} text={this.props.element.text} redirect={this.props.element.redirect} />)
            case 'map':
                return(<DragElement color={this.props.color} changeIndex={this.changeIndex} key={index} index={index} type={type} lat={this.props.data.lat && this.props.data.lat} lng={this.props.data.lng && this.props.data.lng} city={this.props.data.city && this.props.data.city} postalCode={this.props.data.postalCode && this.props.data.postalCode} temp={this.props.data.weather && this.props.data.weather} />)
            default:
        }
    }

    render() { 

        return(
            <div className={css.component}>
                { this.props.element.type ?
                    (
                        this.renderElements(this.props.element.type, this.props.index)
                    ) 
                    : (
                        this.props.blocks.map((block, key) => this.renderElements(block.type, key))
                    )
                }
            </div>
        )
    }
}

export default DragElementsContainer