import React from 'react'
import css from './profile.scss'
import Form from './Form/Form'


class Profile extends React.Component {
    render() {
        return(
            <div className={css.component}>
                <div className="formContainer">
                    <div className="formContainer__title">
                        <h3>Dites-nous en plus</h3>
                    </div>
                    <div className="form">
                        <Form />
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile