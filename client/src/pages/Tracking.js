import React from 'react'
import { getUserLocation, getWeather } from '../api/index'
import TrackingIntro from '../components/TrackingPage/TrackingIntro'
import MixElements from '../components/MixElements/MixElements'
import content from '../content/content'
import Profile from '../components/Profile/Profile'
import Choices from '../components/Choices/Choices'
// import Tube from '../components/TubeStraightLeft/Tube'
// import TubeSmall from '../components/TubeSmall/Tube'
// import TubeForm from '../components/TubeForm2/Tube'

class Tracking extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null
        }
    }
    async componentWillMount() {
        const info = await getUserLocation()
        const data = {}
        data.city = info.location.city
        data.country = info.location.country
        data.lat = info.location.lat
        data.lng = info.location.lng
        data.postalCode = info.location.postalCode
        const weather = await getWeather(data.postalCode, data.country.toLowerCase())
        data.weather = Math.round(weather.main.temp)
        this.setState({
          data: data
        })
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    getCookieInfo = (array) => {
        this.setState({
            cookies: array
        })
    }

    render() {
        return(
            this.state.data && (
                <section className="tracking">
                    {/* <div className="straight">
                        <Tube /> */}
                        <TrackingIntro />
                    {/* </div> */}
                    {/* <div className="form">
                        <TubeSmall /> */}
                        <Profile
                            title="Quelles sont vos habitudes de navigation ?"
                            getUserInfo={this.props.getUserInfo}
                            formStep={2}
                            backgroundColor="#FFFFFF"
                            scrollSection={this.props.scrollSection}
                            getCookieInfo={this.getCookieInfo}
                        />
                      {/* <TubeForm />
                    </div> */}
                    {/* <div className="straight">
                        <Tube /> */}
                          <MixElements
                              blocks={content.data[1].step[7].blocks}
                              data={this.state.data}
                              cookies={this.state.cookies && this.state.cookies}
                              //name={localStorage.getItem('firstName')}
                            //   redirect={this.props.routerProps.history.push}
                            //   redirectTo="/big-data"
                            //   cta="Continuer"
                          />
                          <MixElements
                              blocks={content.data[1].step[3].blocks}
                              data={this.state.data}
                              name={localStorage.getItem('firstName')}
                            //   redirect={this.props.routerProps.history.push}
                            //   redirectTo="/big-data"
                            //   cta="Continuer"
                          />
                          <MixElements
                              blocks={content.data[1].step[8].blocks}
                              data={this.state.data}
                              
                            //   redirect={this.props.routerProps.history.push}
                            //   redirectTo="/big-data"
                            //   cta="Continuer"
                          />
                          
                    {/* </div> */}
                    <Choices history={this.props.routerProps.history} push={this.props.routerProps.history.push} />
                </section>
            )
        )
    }
}

export default Tracking
