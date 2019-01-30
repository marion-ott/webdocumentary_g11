import React, { Component } from 'react'
import './App.css'
import content from './content/content'
import Home from './components/Home/Home'
import BigDataPage from './components/BigDataPage/BigDataPage'
import TrackingPage from './components/TrackingPage/TrackingPage'
import AlgoPage from './components/AlgoPage/AlgoPage'
import MapContainer from './components/MapContainer/MapContainer'
import Media from './components/Media/Media'
import DragElementsContainer from './components/DragAndDrop/DragElementsContainer'
import Text from './components/Text/Text'
import Profile from './components/Profile/Profile'
import { getUserLocation, getWeather } from './api/index'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      step: 0
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

  render() {

    return (
      <div className="App">
      { this.state.data && (
        <div>
          <Home
            step={this.state.step}
            scrollVertical={this.scrollVertical}
          />
          <DragElementsContainer city={this.state.data.city} temp={this.state.data.weather} lat={this.state.data.lat} lng={this.state.data.lng} elements={['map']} />
          {/* <MapContainer  /> */}
          <Text
            title={content.data[1].step[0].title}
            paragraph={content.data[1].step[0].text}
          />
          <BigDataPage/>
          <TrackingPage />
          <AlgoPage />
          <Media />
          <Text
            title={content.data[1].step[1].title}
            paragraph={content.data[1].step[1].text}
            subtitle={content.data[1].step[1].subtitle}
          />
          <Profile />
          <DragElementsContainer elements={['video']}/>
        </div>
      ) }
      </div>
    );
  }
}

export default App;
