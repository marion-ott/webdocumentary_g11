import React from 'react'
import ButtonNext from './ButtonNext'

class ServicesDetails extends React.Component {
    constructor(props) {
        super(props) 
        this._checkboxes = [] 
    }
    getCheckedInput = () => {
        const checkedServices = this._checkboxes.filter(checkbox => checkbox.checked).map(checkbox => checkbox.name)
        this.props.updateServices(checkedServices)
    }
    render() {
        return(
            <div className="cookies">
                {
                    this.props.cookies.map((cookie, key) => (
                        <div className="checkboxContainer" key={key}>
                            <label className="checkbox">
                                <input type="checkbox" name={cookie.name} ref={(el) => el && this._checkboxes.push(el)}/>
                                <span className={`checkmark icon-${cookie.name.toLowerCase()}`}></span>
                            </label>
                        </div>
                    ))
                }
                <ButtonNext onClick={this.getCheckedInput} />
            </div>
        )
    }
}

export default ServicesDetails