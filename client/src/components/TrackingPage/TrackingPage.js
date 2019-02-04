import React from 'react'
import css from './trackingPage.scss'
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
                  <div id="titleTracking--inner">
                    <span>
                      <div className= "title-container">
                          <h1 className= "title">{data.title}</h1>
                      </div>
                    </span>
                    <span>
                      <div className= "title-container">
                          <h1 className= "title">{data.title}</h1>
                      </div>
                    </span>
                  </div>
                </div>
            </section>
        )
    }
}

export default TrackingPage
