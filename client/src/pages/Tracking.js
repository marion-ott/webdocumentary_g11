import React from 'react'
import { getUserLocation, getWeather } from '../api/index'
import TrackingIntro from '../components/TrackingPage/TrackingIntro'
import MixElements from '../components/MixElements/MixElements'
import content from '../content/content'
import Profile from '../components/Profile/Profile'

class BigData extends React.Component {
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

    scrollSection = () => {
        window.scrollBy({
          left: 0,
          top: window.innerHeight,
          behavior: "smooth"
        })
      }

    render() {
        return(
            this.state.data && (
                <section>
                        <TrackingIntro />
                        <Profile
                            title="Quelles sont vos habitudes de navigation ?"
                            formStep={2}
                            backgroundColor="#FFFFFF"
                            scrollSection={this.scrollSection}
                        />
                        <MixElements
                            blocks={content.data[1].step[3].blocks}
                            data={this.state.data}
                        />
                </section>
            )
        )
    }
}

export default BigData
