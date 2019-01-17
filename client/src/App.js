import React, { Component } from 'react'
import './App.css'
import content from './content/content'
import Home from './components/Home/Home'
import MapContainer from './components/MapContainer/MapContainer'
import Media from './components/Media/Media'
import Text from './components/Text/Text'
import Profile from './components/Profile/Profile'
import { getExactLocation } from './api/index'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 0
    }
  }

  async componentWillMount() {
    const info = await getExactLocation()
    console.log(info)
  }

  render() {

    return (
      <div className="App">
        <Home 
          step={this.state.step}
          scrollVertical={this.scrollVertical}  
        />
        <Media />
        <MapContainer lat={33} lng={48} />
        <Text 
          title={content.data[1].step[0].title} 
          paragraph={content.data[1].step[0].text}  
        />
        <Text 
          title={content.data[1].step[1].title} 
          paragraph={content.data[1].step[1].text}
          subtitle={content.data[1].step[1].subtitle}
        />
        <Profile />
      </div>
    );
  }
}

export default App;
