import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Algorithms from './pages/Algorithms';
import Tracking from './pages/Tracking';
import BigData from './pages/BigData';
import FilterBubble from './pages/FilterBubble';
import NotFound from './NotFound';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/algorithms" component={Algorithms} />
            <Route path="/tracking" component={Tracking} />
            <Route path="/big-data" component={BigData} />
            <Route path="/filter-bubble" component={FilterBubble} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default Router;