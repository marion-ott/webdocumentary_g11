import React from 'react'
import BigDataIntro from '../components/BigDataPage/BigDataIntro'
import ParticleComponent from "../components/BigDataPage/ParticleComponent"
import Tube from '../components/TubeStraightLeft/Tube'
import Profile from '../components/Profile/Profile'

class BigData extends React.Component {
    render() {
       // const data = content.data[4].bigData
        return(
            <section className="bigData">
                <Tube />
                <ParticleComponent />
                <BigDataIntro />
                <Profile 
                    formStep={3}
                    //layerColor="#0000FF"
                    //getUserInfo={this.getUserInfo} 
                    scrollSection={this.props.scrollSection}
                    title="Quel internaute êtes-vous ?"
                />
                <BigDataIntro />
            </section>
        )
    }
}

export default BigData
