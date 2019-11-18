import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'
import App from './App'
import Algorithms from './pages/Algorithms'
import Tracking from './pages/Tracking'
import BigData from './pages/BigData'
import FilterBubble from './pages/FilterBubble'
import EndScreen from './pages/EndScreen'
import NotFound from './NotFound'


class Router extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {} 
        }
    }



    getUserInfo = (data, formStep) => {
        let user = Object.assign({}, this.state.user)
        //console.log('router : ', data)
        switch(formStep) {
          case 1:
            user.firstName = data.firstName
            user.age = data.age
            user.gender = data.gender
            localStorage.setItem('firstName', user.firstName)
            localStorage.setItem('age', user.age)
            localStorage.setItem('gender', user.gender)
            // this.setState({
            //   user
            // })
            break;
          case 2:
            // user.firstName = user.firstName
            // user.age = user.age
            // user.gender = user.gender
            user.services = data.services
            localStorage.setItem('services', user.services)
            // this.setState({
            //   user
            // })
            break;
          case 3:
            // user.firstName = user.firstName
            // user.age = user.age
            // user.gender = user.gender
            // user.services = user.services
            user.images = data.images
            // this.setState({
            //   user
            // })
            break;
          default:
            return(null)
        }
    }


    scrollSection = () => {
        //console.log("scrolling", window.innerHeight);
        window.scrollBy({
          left: 0,
          top: window.innerHeight,
          behavior: "smooth"
        })
    }

    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <AnimatedSwitch
                        atEnter={{ opacity: 0 }}
                        atLeave={{ opacity: 0 }}
                        atActive={{ opacity: 1 }}
                        className="switch-wrapper"
                    >
                        <Route exact path="/" component={(props) => <App getUserInfo={this.getUserInfo} updatePrevLocation={this.updatePrevLocation} scrollSection={this.scrollSection} routerProps={props} />} />
                        <Route path="/algorithms" component={(props) => <Algorithms scrollSection={this.scrollSection} updatePrevLocation={this.updatePrevLocation} routerProps={props} />} />
                        <Route path="/tracking" component={(props) => <Tracking getUserInfo={this.getUserInfo} updatePrevLocation={this.updatePrevLocation} scrollSection={this.scrollSection} routerProps={props} />} />
                        <Route path="/big-data" component={(props) => <BigData getUserInfo={this.getUserInfo} updatePrevLocation={this.updatePrevLocation} scrollSection={this.scrollSection} routerProps={props} />} />
                        <Route path="/filter-bubble" component={FilterBubble} />
                        <Route path="/end" component={EndScreen} />
                        <Route component={NotFound} />
                    </AnimatedSwitch>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;
