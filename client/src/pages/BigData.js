import React from 'react'
import BigDataIntro from '../components/BigDataPage/BigDataIntro'
import ParticleComponent from "../components/BigDataPage/ParticleComponent"
import Profile from '../components/Profile/Profile'

import Tube from '../components/TubeStraightLeft/Tube'
// import TubeTransition from '../components/TrackingTubeTransition/Tube'
import TubeSmall from '../components/TubeSmall/Tube'
import TubeForm from '../components/TubeForm2/Tube'

class BigData extends React.Component {
    render() {
        console.log(this.props.routerProps)
        return(
            <section className="bigData">
                <div className="straight">
                    <Tube />
                    <ParticleComponent />
                    <BigDataIntro />
                </div>
                <div className="form">
                    <TubeSmall />
                    <Profile
                        formStep={3}
                        //layerColor="#0000FF"
                        //getUserInfo={this.getUserInfo}
                        scrollSection={this.props.scrollSection}
                        title="Quel internaute êtes-vous ?"
                    />
                    <TubeForm />
                </div>
                <div className="straight">
                    <Tube />
                </div>
            </section>
        )
    }
}

export default BigData
