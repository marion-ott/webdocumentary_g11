import React from 'react'
import AlgoIntro from '../components/AlgoPage/AlgoIntro'
import MixElements from '../components/MixElements/MixElements'
import Choices from '../components/Choices/Choices'
import content from '../content/content'
//import Tube from '../components/TubeStraightLeft/Tube'

class EndScreen extends React.Component {
    constructor() {
        super()
        this._blocks = []
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        
        return(
            <section className="ending">
                
            </section>
        )
    }
}

export default EndScreen
