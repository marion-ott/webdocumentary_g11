import React from 'react'
import Video from '../../blocs/Video/Video'
import css from './media.scss'

class Media extends React.Component {
    render() {
        console.log('media ', this.props.src)
        return(
            <div className={css.component}> 
                { this.props.mediaType === 'video' ? (
                <Video
                    title={this.props.title}
                    source={`${process.env.PUBLIC_URL} ${this.props.src}`}
                />

                ) : (<video src={`${process.env.PUBLIC_URL} ${this.props.src}`} autoPlay="autoplay" loop="loop" width="100%" height="100%"></video>) 
                }
            </div>
        )
    }
}

export default Media