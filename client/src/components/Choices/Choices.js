import React from 'react'
import css from './choices.scss'
import content from '../../content/content'
import ToFilterBubble from '../ToFilterBubble/ToFilterBubble'
import DragElementContainer from '../DragAndDrop/DragElementsContainer'
        
class Choices extends React.Component {

    render() {
        const choices = content.data[7].choices
        
        return(
            <section className={css.component}>
                { choices.map((choice, key) => <DragElementContainer path={this.props.history && this.props.history.location.pathname} element={choice} key={key} />) }
                <ToFilterBubble push={this.props.push} />
            </section>
        )
    }
}

export default Choices