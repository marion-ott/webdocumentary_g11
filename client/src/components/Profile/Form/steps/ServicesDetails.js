import React from 'react'
import ButtonNext from './ButtonNext'

class ServicesDetails extends React.Component {
    render() {
        return(
            <div className="cookies">
                {
                    this.props.cookies.map((cookie, key) => (
                        <div className="checkboxContainer" key={key}>
                            <label className="checkbox">
                                <input type="checkbox"/>
                                <span className={`checkmark icon-${cookie.name.toLowerCase()}`}></span>
                            </label>
                        </div>
                    ))
                }
                <ButtonNext />
            </div>
        )
    }
}

export default ServicesDetails