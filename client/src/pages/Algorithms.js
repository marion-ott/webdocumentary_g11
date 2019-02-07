import React from 'react'
import AlgoIntro from '../components/AlgoPage/AlgoIntro'
import MixElements from '../components/MixElements/MixElements'
import content from '../content/content'
import Tube from '../components/TubeStraightLeft/Tube'

class Algorithms extends React.Component {
    constructor() {
        super()
        this._blocks = []
    }
    render() {
        //const data = content.data[5].bigData
        return(
            <section className="algorithms">
                <Tube />
                <AlgoIntro />
                <MixElements
                    ref={(el) => el && this._blocks.push(el)}
                    blocks={content.data[1].step[4].blocks}
                />
            </section>
        )
    }
}

export default Algorithms
