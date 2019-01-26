import React from 'react'
import Video from '../../blocs/Video/Video'
import css from './media.scss'

class Media extends React.Component {
    render() {
        return(
            <div className={css.component}> 
                
                <Video
                    title="Oskar Morgenstern à propos de l'ordinateur en 1972"
                    source="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                />
            </div>
        )
    }
}

export default Media