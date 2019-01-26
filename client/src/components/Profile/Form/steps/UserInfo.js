import React from 'react'
import './steps.scss'
import ButtonNext from './ButtonNext'

class UserInfo extends React.Component {
    render() {
        return(
            <div className="userInfo">
                <div>
                    <label htmlFor="firstName">Prénom</label>
                    <input onChange={this.props.handleChange('firstName')} name="firstName" type="text" required />
                </div>
                <div className="ageContainer">
                    <label htmlFor="age">Âge</label>
                    <input className="age" onChange={this.props.handleChange('age')} type="number" name="age"/>
                </div>
                <div className="gender">
                    <div className="checkboxContainer">
                        <label className="checkbox">
                            <input type="radio" value="female" name="gender" required />
                            <span className="checkmark icon-mars"></span>
                        </label>
                    </div>
                    <div className="checkboxContainer">
                        <label className="checkbox">
                            <input type="radio" value="male" name="gender" />
                            <span className="checkmark icon-venus"></span>
                        </label>
                    </div>
                    <div className="checkboxContainer">
                        <label className="checkbox">
                            <input type="radio" value="other" name="gender" />
                            <span className="checkmark other">autre</span>
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