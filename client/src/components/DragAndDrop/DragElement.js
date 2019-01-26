import React from 'react';
import Draggable from 'react-draggable'; // Both at the same time
import Media from '../Media/Media';
import MapContainer from '../MapContainer/MapContainer'
import ReactDOM from 'react-dom';

class DragElement extends React.Component {
    constructor() {
        super()

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
                <div id={this.props.index} className="handle" onClick={(event) => this.props.changeIndex(event)}>
                    { this.props.type === 'video' ? <Media mediaType={this.props.mediaType} />
                        : this.props.type === 'map' ? <MapContainer lat={this.props.lat && this.props.lat} lng={this.props.lng && this.props.lng} city={this.props.city && this.props.city} temp={this.props.temp && this.props.temp}/>
                        : null
                    }
                    
                </div>
            </Draggable>
        );
    }
}

export default DragElement
