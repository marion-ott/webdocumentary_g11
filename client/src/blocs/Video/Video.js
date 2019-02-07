import React from 'react'
import { Player } from 'video-react'
import css from './video.scss'

class Video extends React.Component {
render() {
    return(
      <div className={css.component}>
          <div className="videoContainer">
              <Player
                  playsInline
                  src={this.props.source}
              />
          </div>
      </div>
  )  

}
} 

export default Video