import React from 'react';
import Draggable from 'react-draggable'; // Both at the same time
import Media from '../Media/Media';
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
                    <Media mediaType={this.props.mediaType} />
                </div>
            </Draggable>
        );
    }
}

export default DragElement
