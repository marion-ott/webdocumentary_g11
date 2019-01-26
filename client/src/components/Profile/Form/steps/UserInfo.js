import React from 'react'
import './steps.scss'
import ButtonNext from './ButtonNext'

class UserInfo extends React.Component {
    render() {
        return(
            <div className="userInfo">
                <label htmlFor="firstName">Prénom</label>
                <input name="firstName" type="text"/>
                <label htmlFor="lastName">Nom</label>
                <input name="lastName" type="text"/>
                <div className="gender">
                    <div className="checkboxContainer">
                        <label className="checkbox">
                            <input type="checkbox"/>
                            <span className="checkmark icon-mars"></span>
                        </label>
                    </div>
                    <div className="checkboxContainer">
                        <label className="checkbox">
                            <input type="checkbox"/>
                            <span className="checkmark icon-venus"></span>
                        </label>
                    </div>
                </div>
                <ButtonNext
                    onClick={this.props.nextStep}
                />
            </div>
        )
    }
}

export default UserInfo