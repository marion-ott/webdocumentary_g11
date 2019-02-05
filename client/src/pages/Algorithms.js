import React from 'react'
import AlgoIntro from '../components/AlgoPage/AlgoIntro'
import MixElements from '../components/MixElements/MixElements'
import content from '../content/content'

class Algorithms extends React.Component {

    render() {
       // const data = content.data[4].bigData
        return(
            <section>
                <AlgoIntro />
                {/* <MixElements
                    ref={(el) => el && this._blocks.push(el)}
                    blocks={content.data[1].step[3].blocks}
                /> */}
            </section>
        )
    }
}

export default Algorithms
