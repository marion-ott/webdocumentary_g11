import React from 'react'
import { Player } from 'video-react'
import css from './video.scss'

const Video = props => (
    <div className={css.component}>
        <div className="videoContainer">
            <Player
                playsInline
                poster={`${process.env.PUBLIC_URL}/assets/media/img/test.png`}
                src={props.source}
            />
        </div>
    </div>
)

export default Video