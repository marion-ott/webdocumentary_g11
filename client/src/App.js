import React, { Component } from 'react'
import './App.scss'

import content from './content/content'
import Tube from './components/TubeForm1/Tube'

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
<<<<<<< HEAD
=======
    //const formStep = this.state.formStep + 1
>>>>>>> 77aab0bda0390c4def879932489cb1a6bcd596fc
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
    //console.log("scroll")    
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
    console.log(this._blocks[id]);
    
    const layer = ReactDOM.findDOMNode(this._blocks[id]).querySelector('.layer')
    if(layer) {
      TweenLite.to(layer, 1,{ ease: Power4.ease, height: 0})
    }
    this.setState({
      step: this.state.step + 1
    })
  }

<<<<<<< HEAD
  render() {  
    console.log(this.props)
=======
  render() {
>>>>>>> 77aab0bda0390c4def879932489cb1a6bcd596fc
    return (
      <div className="App">
        <div>
          <Home
            ref={(el) => el && this._blocks.push(el)}
            step={this.state.step}
            scrollSection={this.props.scrollSection}
          />
          <Text
            ref={(el) => el && this._blocks.push(el)}
<<<<<<< HEAD
            //layerColor={false}
            title={content.data[1].step[0].title} 
            paragraph={content.data[1].step[0].text}  
            backgroundColor={content.data[1].step[0].backgroundColor} 
            txtColor={content.data[1].step[0].txtColor} 
            className={content.data[1].step[0].className}  
            scrollSection={this.props.scrollSection}
            autoTransition={true}
          />
          <Profile 
            ref={(el) => el && this._blocks.push(el)}
            layerColor="#0000FF"
            getUserInfo={this.props.getUserInfo} 
            formStep={this.state.formStep}
            scrollSection={this.props.scrollSection}
            title="Dites-nous tout..."
          />
=======
            layerColor={false}
            title={content.data[1].step[0].title}
            paragraph={content.data[1].step[0].text}
            backgroundColor={content.data[1].step[0].backgroundColor}
            txtColor={content.data[1].step[0].txtColor}
            className={content.data[1].step[0].className}
            scrollSection={this.scrollSection}
            autoTransition={true}
          />
          <div className="formHome">
              <Profile
                ref={(el) => el && this._blocks.push(el)}
                layerColor="#0000FF"
                getUserInfo={this.getUserInfo}
                formStep={this.state.formStep}
                scrollSection={this.scrollSection}
                title="Dites-nous tout..."
              />
              <Tube />
          </div>
>>>>>>> 77aab0bda0390c4def879932489cb1a6bcd596fc
          <Text
            ref={(el) => el && this._blocks.push(el)}
            title={content.data[1].step[2].title}
            paragraph={content.data[1].step[2].text}
            subtitle={content.data[1].step[2].subtitle}
            cta={content.data[1].step[2].cta}
<<<<<<< HEAD
            hasBlocks={true}
            backgroundColor={content.data[1].step[2].backgroundColor} 
            txtColor={content.data[1].step[2].txtColor} 
            className={content.data[1].step[2].className} 
=======
            backgroundColor={content.data[1].step[2].backgroundColor}
            txtColor={content.data[1].step[2].txtColor}
            className={content.data[1].step[2].className}
>>>>>>> 77aab0bda0390c4def879932489cb1a6bcd596fc
            blocks={content.data[1].step[1].blocks}
            scrollSection={this.props.scrollSection}
            redirect={this.props.routerProps.history.push}
            redirectTo="/algorithms"
          />
        </div>
      </div>
    );
  }
}

export default App;
