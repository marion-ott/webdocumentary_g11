import React from 'react'
import AlgoIntro from '../components/AlgoPage/AlgoIntro'
import MixElements from '../components/MixElements/MixElements'
import Choices from '../components/Choices/Choices'
import content from '../content/content'
import Tube from '../components/TubeStraightLeft/Tube'

class Algorithms extends React.Component {
    constructor() {
        super()
        this._blocks = []
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return(
            <section className="algorithms">
                {/* <Tube /> */}
                <AlgoIntro />
                <MixElements
                    ref={(el) => el && this._blocks.push(el)}
                    blocks={content.data[1].step[4].blocks}
                />
                <Choices push={this.props.routerProps.history.push} />
            </section>
        )
    }
}

export default Algorithms
