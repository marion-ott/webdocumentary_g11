import React from 'react'
import ButtonNext from './ButtonNext'

class ServicesDetails extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            choiceAmount: 0
        }
        
    }
    getCheckedInput = () => {
        let checkedServices = []
        checkedServices = this._checkboxes.filter(checkbox => checkbox.checked).map(checkbox => checkbox.name)
        this.setState({
            choiceAmount: checkedServices.length,
            checkedServices: checkedServices
        })
    }

    validateChoices = () => {
        this.props.updateServices(this.state.checkedServices)
    }

    render() {
        this._checkboxes = []
        return(
            <div className="cookies">
                <p>Quels sites ou services utilisez vous régulièrement ?</p>
                {
                    this.props.cookies.map((cookie, key) => (
                        <div className="checkboxContainer" key={key}>
                            <label className="checkbox">
                                <input type="checkbox" disabled={this.state.choiceAmount === 3 && !this.state.checkedServices.includes(cookie.name) ? true : false} onChange={this.getCheckedInput}  name={cookie.name} ref={(el) => el && this._checkboxes.push(el)}/>
                                <span className={`checkmark`}>{cookie.name.toLowerCase()}</span>
                            </label>
                        </div>
                    ))
                }
                <p className="choiceAmount">{this.state.choiceAmount}/3 sélectionnés</p>
                <ButtonNext buttonState={this.state.choiceAmount < 3 ? false : true} onClick={this.validateChoices} />
            </div>
        )
    }
}

export default ServicesDetails

//style={{backgroundImage: `url(${process.env.PUBLIC_URL}${cookie.src})`, backgroundSize: '60%', backgroundPosition: 'center center'}}