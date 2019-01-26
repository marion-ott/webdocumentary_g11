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
        console.log(id)
        event.target.closest('.handle').style.zIndex = id
    }

    render() {
        return(
            <div className={css.component}>
                { this.props.elements.map((elem, i) => (
                    elem === 'map' ? <DragElement changeIndex={this.changeIndex} key={i} index={i} type={elem} lat={this.props.lat && this.props.lat} lng={this.props.lng && this.props.lng} city={this.props.city && this.props.city} temp={this.props.temp && this.props.temp} />
                     : <DragElement changeIndex={this.changeIndex} key={i} index={i} type={elem} />
                )) }
            </div>
        )
    }
}

export default DragElementsContainer