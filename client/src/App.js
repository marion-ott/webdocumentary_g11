import React, { Component } from 'react'
import './App.css'
import content from './content/content'
import Home from './components/Home/Home'
import Text from './components/Text/Text'
import Profile from './components/Profile/Profile'
import ReactDOM from 'react-dom'
import { TweenLite, Power4 } from "gsap/TweenMax"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      step: 1,
      user: {},
      formStep: 1
    }
    this._blocks = []
  }


  getUserInfo = (data) => {
    let user = Object.assign({}, this.state.user)
    //const formStep = this.state.formStep + 1    
    switch(this.state.formStep) {
      case 1:
        user.firstName = data.firstName
        user.age = data.age
        user.gender = data.gender
        this.setState({
          user
        })
        break;
      case 2:
        user.services = data.services
        this.setState({
          user
        })
        break;
      case 3:
        user.images = data.images
        this.setState({
          user
        })
        break;
      default:
        return(null)
    }
    // this.setState({
    //   formStep
    // }, () => console.log('current user in state : ', this.state))
  }

  scrollSection = () => {
    window.scrollBy({
      left: 0,
      top: window.innerHeight,
      behavior: "smooth"
    })
    setTimeout(() => {
      this.animateLayer(this.state.step)
    }, 500)
  }

  animateLayer = (id) => {
    const layer = ReactDOM.findDOMNode(this._blocks[id]).querySelector('.layer')
    if(layer) {
      TweenLite.to(layer, 1,{ ease: Power4.ease, height: 0})
    }
    this.setState({
      step: this.state.step + 1
    })
  }

  render() {   
    return (
      <div className="App">
        <div>
          <Home
            ref={(el) => el && this._blocks.push(el)}
            step={this.state.step}
            scrollVertical={this.scrollVertical}
            scrollSection={this.scrollSection}
          />
          <Text 
            ref={(el) => el && this._blocks.push(el)}
            layerColor={false}
            title={content.data[1].step[0].title} 
            paragraph={content.data[1].step[0].text}  
            backgroundColor={content.data[1].step[0].backgroundColor} 
            txtColor={content.data[1].step[0].txtColor} 
            className={content.data[1].step[0].className}  
            scrollSection={this.scrollSection}
          />
          <Profile 
            ref={(el) => el && this._blocks.push(el)}
            layerColor="#0000FF"
            getUserInfo={this.getUserInfo} 
            formStep={this.state.formStep}
            scrollSection={this.scrollSection}
          />
          <Text 
            ref={(el) => el && this._blocks.push(el)}
            title={content.data[1].step[1].title} 
            paragraph={content.data[1].step[1].text}
            subtitle={content.data[1].step[1].subtitle}
            backgroundColor={content.data[1].step[1].backgroundColor} 
            txtColor={content.data[1].step[1].txtColor} 
            className={content.data[1].step[1].className} 
            blocks={content.data[1].step[1].blocks}
            scrollSection={this.scrollSection}
          />
          <Text
            ref={(el) => el && this._blocks.push(el)}
            title={content.data[1].step[2].title} 
            paragraph={content.data[1].step[2].text}
            subtitle={content.data[1].step[2].subtitle}
            cta={content.data[1].step[2].cta}
            backgroundColor={content.data[1].step[2].backgroundColor} 
            txtColor={content.data[1].step[2].txtColor} 
            className={content.data[1].step[2].className} 
            blocks={content.data[1].step[2].blocks}
            scrollSection={this.scrollSection}
            redirect={this.props.history.push}
            redirectTo="/algorithms"
          /> 
        </div>
      </div>
    );
  }
}

export default App;
