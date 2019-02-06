import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'
import App from './App'
import Algorithms from './pages/Algorithms'
import Tracking from './pages/Tracking'
import BigData from './pages/BigData'
import FilterBubble from './pages/FilterBubble'
import NotFound from './NotFound'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <AnimatedSwitch
                atEnter={{ opacity: 0 }}
                atLeave={{ opacity: 0 }}
                atActive={{ opacity: 1 }}
                className="switch-wrapper"
            >
                <Route exact path="/" component={App} />
                <Route path="/algorithms" component={Algorithms} />
                <Route path="/tracking" component={Tracking} />
                <Route path="/big-data" component={BigData} />
                <Route path="/filter-bubble" component={FilterBubble} />
                <Route component={NotFound} />
            </AnimatedSwitch>
        </Switch>
    </BrowserRouter>
)

export default Router;