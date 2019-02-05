import React from 'react'
import BigDataIntro from '../components/BigDataPage/BigDataIntro'
import ParticleComponent from "../components/BigDataPage/ParticleComponent"
import Tube from '../components/Tube/Tube'

class BigData extends React.Component {
    render() {
       // const data = content.data[4].bigData
        return(
            <section>
                <Tube />
                <ParticleComponent />
                <BigDataIntro />
                <BigDataIntro />
            </section>
        )
    }
}

export default BigData
