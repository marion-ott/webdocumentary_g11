import React from 'react'
import BigDataIntro from '../components/BigDataPage/BigDataIntro'
import ParticleComponent from "../components/BigDataPage/ParticleComponent"


class BigData extends React.Component {
    render() {
       // const data = content.data[4].bigData
        return(
            <section>
                <ParticleComponent />
                <BigDataIntro />
            </section>
        )
    }
}

export default BigData
