import React from 'react'
import BigDataIntro from '../components/BigDataPage/BigDataIntro'
import ParticleComponent from "../components/BigDataPage/ParticleComponent"
import Profile from '../components/Profile/Profile'
import Choices from '../components/Choices/Choices'
import Tube from '../components/TubeStraightLeft/Tube'
// import TubeTransition from '../components/TrackingTubeTransition/Tube'
import TubeSmall from '../components/TubeSmall/Tube'
import TubeForm from '../components/TubeForm2/Tube'

class BigData extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        
        return(
            <section className="bigData">
                {/* <div className="straight"> */}
                    {/* <Tube /> */}
                    <ParticleComponent />
                    <BigDataIntro />
                {/* </div> */}
                {/* <div className="form"> */}
                    {/* <TubeSmall /> */}
                    <Profile
                        formStep={3}
                        //layerColor="#0000FF"
                        //getUserInfo={this.getUserInfo}
                        scrollSection={this.props.scrollSection}
                        title="Quel internaute êtes-vous ?"
                    />
                    {/* <TubeForm /> */}
                {/* </div> */}
                {/* <div className="straight">
                    <Tube />
                </div> */}
                <Choices push={this.props.routerProps.history.push} />
            </section>
        )
    }
}

export default BigData
