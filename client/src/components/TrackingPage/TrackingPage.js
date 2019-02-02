import React from 'react'

import css from './trackingPage.scss'
import "circular-std";

import content from '../../content/content'
import Camera from "./Camera";
import TrackingBackground from "./TrackingBackground";



class TrackingPage extends React.Component {
    render() {
        const data = content.data[5].tracking
        return(
            <section className={css.component}>
                <TrackingBackground />
                <Camera />
                <div id="titleTracking">
                  <h1>{data.title}</h1>
                </div>
            </section>
        )
    }
}

export default TrackingPage
