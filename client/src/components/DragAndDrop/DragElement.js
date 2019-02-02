import React from 'react';
import Draggable from 'react-draggable'; // Both at the same time
import Media from '../Media/Media';
import Paragraph from '../../blocs/Paragraph/Paragraph';
import MapContainer from '../MapContainer/MapContainer'
import "circular-std";

class DragElement extends React.Component {

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
                    <div className="titleContainer">
                        <div className="dots">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        { this.props.type === 'video' ? <p className="videoTitle"><span>Video :</span> Titre</p> : null }
                    </div>
                    { this.props.type === 'video' ? <Media mediaType={this.props.mediaType} />
                        : this.props.type === 'text' ? <Paragraph paragraph={this.props.text} />
                        : this.props.type === 'map' ? <MapContainer lat={this.props.lat && this.props.lat} lng={this.props.lng && this.props.lng} city={this.props.city && this.props.city} temp={this.props.temp && this.props.temp}/>
                        : null
                    }
                    
                </div>
            </Draggable>
        );
    }
}

export default DragElement
