import React from 'react'
import AlgoIntro from '../components/AlgoPage/AlgoIntro'
import MixElements from '../components/MixElements/MixElements'
import content from '../content/content'
import Tube from '../components/TubeStraightLeft/Tube'
import DragElementContainer from '../components/DragAndDrop/DragElementsContainer';

class Algorithms extends React.Component {
    constructor() {
        super()
        this._blocks = []
    }
    render() {
        const choices = content.data[7].choices
        //console.log(choices)
        return(
            <section className="algorithms">
                <Tube />
                <AlgoIntro />
                <MixElements
                    ref={(el) => el && this._blocks.push(el)}
                    blocks={content.data[1].step[4].blocks}
                />
                <section style={{width: "100%", height: "100vh", backgroundColor: "red"}}>
                    { choices.map((choice, key) => <DragElementContainer element={choice} key={key} />) }
                    {/* <DragElementContainer element={test} index={0} /> */}
                </section>
            </section>
        )
    }
}

export default Algorithms
