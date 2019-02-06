import React from 'react'
import ButtonNext from './ButtonNext'

class ImageChoices extends React.Component {
    render() {
        const images = this.props.images
        console.log(images)
        return(
            <div>
                <div className="images">
                    {
                        images.map((image, key) => (
                            <div key={key}>
                                <video autoPlay="autoplay" loop="loop" width="100%" height="100%">
                                    <source src={image} type="video/mp4" />
                                </video>
                            </div>
                        ))
                    }
                </div>
                <ButtonNext 
                    buttonState={true}
                    onClick={this.props.updateImageIndex}
                />
            </div>
        )
    }
}

export default ImageChoices