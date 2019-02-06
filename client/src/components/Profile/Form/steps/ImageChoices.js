import React from 'react'
import ButtonNext from './ButtonNext'

class ImageChoices extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            choiceAmount: 0
        }
        this._checkboxes = []
    }
    render() {
        const images = this.props.images
        
        return(
            <div className="imageForm">
                <div className="images">
                    {
                        this.props.images.map((image, key) => (
                            <div className="checkboxContainer" key={key}>
                                {/* <label className="checkbox"> */}
                                    <input type="checkbox" disabled={this.state.choiceAmount === 1 && !this.state.checkedServices.includes(image) ? true : false} onChange={this.getCheckedInput}  name={`image${key}`} ref={(el) => el && this._checkboxes.push(el)}/>
                                    <div className="checkmark">
                                        <video src={image} autoPlay="autoplay" loop="loop" width="100%" height="100%"></video>
                                    </div>
                                {/* </label> */}
                            </div>
                            )
                        )
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