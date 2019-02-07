import React from 'react'
import css from './trackingPage.scss'
import content from '../../content/content'
import Camera from "./Camera";
import TrackingBackground from "./TrackingBackground";
import ScrollSymbol from '../../blocs/ScrollSymbol/ScrollSymbol';



class TrackingIntro extends React.Component {

    componentDidMount() {
        // var bigContainer = document.querySelector('.titleFullContainer')
        // var halfPart = document.querySelector('.titleHalf')
        // var translationValue = 0
        // function containerTranslation () {
        //     if (translationValue > halfPart.offsetWidth) {
        //     translationValue = 0
        //     } else {
        //     translationValue++
        //     }
        //     bigContainer.style.transform = "translateX(-" + translationValue + "px)"
        // }

        // var interval = setInterval(containerTranslation, 10)
    }
    render() {
        const data = content.data[4].tracking

        return(
            <section className={css.component}>
                <TrackingBackground />
                <Camera />
                <div id="titleTracking">
                  <div className="titleFullContainer" id="titleTracking--inner">
                    <span className="titleHalf">
                      <div className= "title-container">
                          <h1 className= "title">{data.title}</h1>
                      </div>
                    </span>
                    <span className="titleHalf">
                      <div className= "title-container">
                          <h1 className= "title">{data.title}</h1>
                      </div>
                    </span>
                  </div>
                </div>
                <ScrollSymbol />
            </section>
        )
    }
}

export default TrackingIntro
