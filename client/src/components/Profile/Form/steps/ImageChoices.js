import React from 'react'
import ButtonNext from './ButtonNext'

class ImageChoices extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            choiceAmount: 0,
            checkedImage: []
        }
    }

    getCheckedInput = () => {
        let checkedImage = []
        checkedImage = this._checkboxes.filter(checkbox =>checkbox.checked).map(checkbox => checkbox.name)
        this.setState({
            choiceAmount: checkedImage.length,
            checkedImage: checkedImage
        })
    }

    validateChoices = () => {
        this.props.updateImageChoice(this.state.checkedImage)
    }
    

    render() {
        const images = this.props.images
        this._checkboxes = []

        return(
            <div className="imageForm">
                <div className="images">
                    {
                        images.map((image, key) => (
                            <div className="checkboxContainer" key={key}>
                                <label className="checkbox">
                                    <input type="checkbox" onChange={this.getCheckedInput} disabled={this.state.choiceAmount === 1 && !this.state.checkedImage.includes(`image${key}`) ? true : false} name={`image${key}`} ref={(el) => el && this._checkboxes.push(el)}/>
                                    <span className={`checkmark`}>
                                        <video src={image} autoPlay="autoplay" loop="loop" width="100%" height="100%"></video>
                                    </span>
                                </label>
                            </div>
                            
                            )
                        )
                    }
                </div>
                <ButtonNext 
                    buttonState={this.state.choiceAmount === 1 ? true : false}
                    onClick={this.props.imageIndex === 2 ? this.props.scrollSection : this.validateChoices}
                />
            </div>
        )
    }
}

export default ImageChoices



