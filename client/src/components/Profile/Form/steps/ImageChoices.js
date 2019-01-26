import React from 'react'
import ButtonNext from './ButtonNext'


class ImageChoices extends React.Component {
    render() {
        
        return(
            <div>
                <div className="images">
                    <div className="left" style={{"backgroundImage": `url(${this.props.images[0]})`}}></div>
                    <div className="right">
                        <div style={{"backgroundImage": `url(${this.props.images[0]})`}}></div>
                        <div style={{"backgroundImage": `url(${this.props.images[0]})`}}></div>
                    </div>
                </div>
                <ButtonNext 
                    onClick={this.props.nextStep}
                />
            </div>
        )
    }
}

export default ImageChoices