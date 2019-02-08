import React from 'react';
import Draggable from 'react-draggable' // Both at the same time
import Media from '../Media/Media'
import Paragraph from '../../blocs/Paragraph/Paragraph'
import BigDataChoice from '../../blocs/BigDataChoice/BigDataChoice'
import TrackingChoice from '../../blocs/TrackingChoice/TrackingChoice'
import MapContainer from '../MapContainer/MapContainer'
import ReactDOM from 'react-dom'
import { TweenLite, Power4 } from "gsap/TweenMax"

class DragElement extends React.Component {

    componentDidMount() {
        const blockItem = ReactDOM.findDOMNode(this)
        let left = Math.random() * (120 - 20) + 20
        let top = Math.random() * (10 - 20) + 20
        blockItem.style.left = `${left}px`
        blockItem.style.top = `${top}px`
        TweenLite.to(blockItem, 0.1,{ ease: Power4.ease, opacity: 1})
        TweenLite.to(blockItem, 0.2,{ ease: Power4.ease, scale: 1, transformOrigin: '50% 50%' })
    }

    render() {

        return (
            <Draggable
                handle=".handle"
                defaultPosition={{x: 0, y: 0}}
                position={null}
                grid={[25, 25]}
                scale={1}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}>
                <div id={this.props.index} className={`handle ${this.props.color && this.props.color}`} onClick={(event) => this.props.changeIndex(event)}>
                    <div className="titleContainer">
                        <div className="dots">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        { this.props.type === 'video' ? <p className="videoTitle"><span>Video : </span>{this.props.title}</p> : null }
                    </div>
                    { this.props.type === 'video' ? <Media mediaType={this.props.type} src={this.props.src} title={this.props.title} />
                        : this.props.type === 'gif' ? <Media mediaType={this.props.type} src={this.props.src} />
                        : this.props.type === 'text' ? <Paragraph paragraph={this.props.text} name={this.props.userName} />
                        : this.props.type === 'map' ? <MapContainer lat={this.props.lat && this.props.lat} lng={this.props.lng && this.props.lng} city={this.props.city && this.props.city} postalCode={this.props.postalCode && this.props.postalCode} temp={this.props.temp && this.props.temp}/>
                        : this.props.type === 'choice' && this.props.redirect === '/big-data' ? <BigDataChoice redirect={this.props.redirect} text={this.props.text} path={this.props.path} />
                        : this.props.type === 'choice' && this.props.redirect === '/tracking' ? <TrackingChoice redirect={this.props.redirect} text={this.props.text} path={this.props.path} />
                        : null
                    }

                </div>
            </Draggable>
        );
    }
}

export default DragElement
