import React from 'react'
import BigDataIntro from '../components/BigDataPage/BigDataIntro'
import ParticleComponent from "../components/BigDataPage/ParticleComponent"
import Profile from '../components/Profile/Profile'
import Choices from '../components/Choices/Choices'
import MixElements from '../components/MixElements/MixElements'
import content from '../content/content'
//import Tube from '../components/TubeStraightLeft/Tube'
// import TubeTransition from '../components/TrackingTubeTransition/Tube'
//import TubeSmall from '../components/TubeSmall/Tube'
//import TubeForm from '../components/TubeForm2/Tube'

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
                    <MixElements
                        blocks={content.data[1].step[5].blocks}
                        //data={this.state.data}
                        //name={localStorage.getItem('firstName')}
                            //   redirect={this.props.routerProps.history.push}
                            //   redirectTo="/big-data"
                            //   cta="Continuer"
                    />
                    {/* <TubeForm /> */}
                {/* </div> */}
                {/* <div className="straight">
                    <Tube />
                </div> */}
                <Choices history={this.props.routerProps.history} push={this.props.routerProps.history.push} />
            </section>
        )
    }
}

export default BigData
