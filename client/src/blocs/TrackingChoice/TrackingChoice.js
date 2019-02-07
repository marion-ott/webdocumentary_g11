import React from 'react'
import css from './trackingChoice.scss'
import TrackingBackground from '../../components/TrackingPage/TrackingBackground'


class TrackingChoice extends React.Component {

    render() {
        return (
            this.props.path === "/tracking" ? null
            : this.props.path === "/tracking/" ? null 
            : (
                <div className={css.component}>
                    <TrackingBackground />
                    <div className="text">
                        <p>En savoir plus sur le tracking</p>
                        <a href="/tracking/#">découvrir</a>
                    </div>
                </div>
            )
        );
    }
}

export default TrackingChoice
