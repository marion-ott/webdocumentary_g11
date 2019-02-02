import React from 'react'
import DragElement from './DragElement';
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
        console.log(event.target)
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
                return(<DragElement changeIndex={this.changeIndex} key={index} index={index} type={type} />)
            case 'video':
                return(<DragElement changeIndex={this.changeIndex} key={index} index={index} type={type} title={this.props.element.title} src={this.props.element.src} />)
            case 'text':
                return(<DragElement changeIndex={this.changeIndex} key={index} index={index} type={type} text={this.props.element.paragraph} />)
            case 'map':
                return(<DragElement changeIndex={this.changeIndex} key={index} index={index} type={type} lat={this.props.lat && this.props.lat} lng={this.props.lng && this.props.lng} city={this.props.city && this.props.city} temp={this.props.temp && this.props.temp} />)

            default:
        }
    }

    render() {
        console.log(this.props.element.type)
        return(
            <div className={css.component}>
                {/* { this.props.elements.map((elem, i) => (
                    elem === 'map' ? <DragElement changeIndex={this.changeIndex} key={i} index={i} type={elem} lat={this.props.lat && this.props.lat} lng={this.props.lng && this.props.lng} city={this.props.city && this.props.city} temp={this.props.temp && this.props.temp} />
                     : <DragElement changeIndex={this.changeIndex} key={i} index={i} type={elem} />
                )) } */}
                {
                    this.renderElements(this.props.element.type, this.props.index)
                }
            </div>
        )
    }
}

export default DragElementsContainer